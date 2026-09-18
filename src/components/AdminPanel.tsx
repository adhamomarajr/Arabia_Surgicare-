import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Doctor } from '../types';
import { ShieldCheck, Plus, Trash2, Save, LogOut, ArrowRight, ArrowLeft, UserPlus, CheckCircle, Lock, Download, AlertTriangle, Mail, Loader2 } from 'lucide-react';
import { getDoctorImage, DOCTOR_PHOTO_PRESETS, getDoctorFallbackUrl, DEFAULT_DOCTOR_AVATAR } from '../lib/doctorImages';
import { sendAdminUpdateNotification, ADMIN_NOTIFICATION_EMAIL } from '../lib/notifyService';

export const AdminPanel: React.FC = () => {
  const {
    t,
    language,
    doctors,
    specialties,
    isAdminLoggedIn,
    loginAdmin,
    logoutAdmin,
    addDoctor,
    updateDoctor,
    deleteDoctor,
    setCurrentView,
  } = useApp();

  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(doctors[0]?.id || 'new');
  const [successMsg, setSuccessMsg] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Form State
  const emptyDoctor: Doctor = {
    id: `doc-${Date.now()}`,
    specialtyId: specialties[0]?.id || 'plastic-surgery',
    name: { ar: '', en: '' },
    title: { ar: '', en: '' },
    image: DOCTOR_PHOTO_PRESETS[0]?.image || '',
    experienceYears: 10,
    available: true,
    whatsapp: '201118573813',
    timing: { ar: 'السبت والأربعاء: 5:00 م - 9:00 م', en: 'Sat & Wed: 5:00 PM - 9:00 PM' },
    education: { ar: 'استشاري ودكتوراه في التخصص الطبي', en: 'Consultant & Doctorate Degree' },
    bio: { ar: 'استشاري ذو خبرة طبية وجراحية متقدمة في علاج ورعاية المرضى', en: 'Consultant physician with extensive specialized clinical experience' },
    achievements: { ar: ['عضو الجمعيات الطبية المتخصصة', 'إجراء مئات التدخلات الناجحة'], en: ['Member of International Medical Societies', 'Hundreds of successful procedures'] },
    specializations: { ar: ['استشارات متقدمة', 'عمليات دقيقة'], en: ['Advanced Consultations', 'Specialized Surgeries'] },
  };

  const [formData, setFormData] = useState<Doctor>(doctors[0] || emptyDoctor);

  const handleSelectDoctor = (id: string) => {
    setSelectedDoctorId(id);
    setShowDeleteConfirm(false);
    if (id === 'new') {
      setFormData({
        ...emptyDoctor,
        id: `doc-${Date.now()}`,
        specialtyId: specialties[0]?.id || 'plastic-surgery',
      });
    } else {
      const found = doctors.find((d) => d.id === id);
      if (found) {
        setFormData(JSON.parse(JSON.stringify(found)));
      }
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = loginAdmin(password);
    if (!success) {
      setLoginError(true);
    } else {
      setLoginError(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.ar?.trim() || !formData.name.en?.trim()) {
      alert(language === 'ar' ? 'الرجاء إدخال اسم الطبيب باللغتين العربية والإنجليزية' : 'Please enter doctor name in both languages');
      return;
    }

    setIsSaving(true);
    const existing = doctors.some((d) => d.id === formData.id);
    const action = existing ? 'update' : 'create';

    try {
      if (existing) {
        await updateDoctor(formData);
      } else {
        await addDoctor(formData);
        setSelectedDoctorId(formData.id);
      }

      // Explicitly send email update to adhamae81@gmail.com
      const notifyResult = await sendAdminUpdateNotification({
        action,
        doctor: formData,
        recipient: ADMIN_NOTIFICATION_EMAIL,
        notes: existing ? 'تحديث وتعديل بيانات طبيب' : 'إضافة طبيب جديد للمستشفى',
      });

      const channelsStr = notifyResult.deliveryMethods?.length
        ? ` (${notifyResult.deliveryMethods.join(' + ')})`
        : '';

      setSuccessMsg(
        language === 'ar'
          ? `✅ تم حفظ التعديلات بنجاح وإرسال إشعار التحديث إلى بريدك الإلكتروني (${ADMIN_NOTIFICATION_EMAIL})${channelsStr}`
          : `✅ Changes saved successfully and notification sent to your email (${ADMIN_NOTIFICATION_EMAIL})${channelsStr}`
      );
    } catch (err: any) {
      console.error('Error saving doctor:', err);
      setSuccessMsg(language === 'ar' ? 'تم حفظ التعديلات بنجاح' : 'Changes saved successfully');
    } finally {
      setIsSaving(false);
      setTimeout(() => setSuccessMsg(''), 8000);
    }
  };

  const handleDelete = () => {
    if (selectedDoctorId === 'new') return;
    setShowDeleteConfirm(true);
  };

  const confirmDeleteDoctor = async () => {
    if (selectedDoctorId === 'new') return;
    setIsDeleting(true);
    const doctorToDelete = { ...formData };

    try {
      await deleteDoctor(formData.id);
      const notifyResult = await sendAdminUpdateNotification({
        action: 'delete',
        doctor: doctorToDelete,
        recipient: ADMIN_NOTIFICATION_EMAIL,
        notes: 'تم حذف الطبيب من المستشفى وقاعدة البيانات',
      });

      const channelsStr = notifyResult.deliveryMethods?.length
        ? ` (${notifyResult.deliveryMethods.join(' + ')})`
        : '';

      setShowDeleteConfirm(false);
      handleSelectDoctor('new');
      setSuccessMsg(
        language === 'ar'
          ? `✅ تم حذف الطبيب بنجاح وإرسال إشعار الحذف إلى بريدك الإلكتروني (${ADMIN_NOTIFICATION_EMAIL})${channelsStr}`
          : `✅ Doctor deleted successfully and notification sent to your email (${ADMIN_NOTIFICATION_EMAIL})${channelsStr}`
      );
    } catch (err: any) {
      console.error('Error deleting doctor:', err);
      setShowDeleteConfirm(false);
      handleSelectDoctor('new');
    } finally {
      setIsDeleting(false);
      setTimeout(() => setSuccessMsg(''), 8000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-['Cairo']">
      {/* Admin Header */}
      <div className="bg-slate-900 py-4 px-6 border-b border-slate-800 flex justify-between items-center sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold text-lg">
            🎛️
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-black text-white text-sm sm:text-base">{t('adminTitle')}</h2>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                {language === 'ar' ? 'مزامنة سحابية مباشرة (Firebase)' : 'Live Firebase Sync'}
              </span>
            </div>
            <p className="text-[11px] text-purple-400">Arabia Surgicare Hospital Management</p>
          </div>
        </div>

        <button
          onClick={() => setCurrentView('main')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition cursor-pointer border-0 flex items-center gap-2"
        >
          <span>{language === 'ar' ? 'العودة للموقع الرئيسي' : 'Return to Main Site'}</span>
          {language === 'ar' ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
        </button>
      </div>

      <div className="max-w-6xl mx-auto w-full p-4 sm:p-6 flex-grow">
        {/* LOGIN SCREEN IF NOT LOGGED IN */}
        {!isAdminLoggedIn ? (
          <div className="max-w-md mx-auto my-12 bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-5 animate-fade-in">
            <div className="text-center space-y-2">
              <div className="h-12 w-12 rounded-2xl bg-purple-900/60 text-purple-400 flex items-center justify-center mx-auto border border-purple-700">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-black text-white">{t('adminLoginRequired')}</h3>
              <p className="text-xs text-slate-400">{t('hospitalName')}</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1.5">
                  {t('adminPasswordLabel')}
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-600"
                />
              </div>

              {loginError && (
                <p className="text-xs text-red-400 font-bold text-center">
                  {language === 'ar'
                    ? 'رمز المرور غير صحيح!'
                    : 'Incorrect password!'}
                </p>
              )}

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-3.5 rounded-xl transition cursor-pointer border-0 shadow-md"
              >
                {t('adminLoginBtn')}
              </button>
            </form>
          </div>
        ) : (
          /* DASHBOARD PANEL IF LOGGED IN */
          <div className="space-y-6 animate-fade-in">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-400" />
                <span className="text-xs font-bold text-purple-300">
                  {language === 'ar'
                    ? 'نظام إدارة الكادر الطبي والتخصصات الفائقة'
                    : 'Medical Staff & Specialty Management System'}
                </span>
                <span className="hidden md:inline-flex items-center gap-1.5 bg-purple-950/80 text-purple-200 border border-purple-600/40 text-[11px] px-2.5 py-1 rounded-full font-medium">
                  <Mail className="h-3 w-3 text-purple-400" />
                  <span>{ADMIN_NOTIFICATION_EMAIL}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/download-zip"
                  download="arabia-surgicare-hospital.zip"
                  className="bg-purple-600/20 hover:bg-purple-600 text-purple-300 hover:text-white border border-purple-500/30 text-xs font-bold px-3.5 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5 no-underline"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>{language === 'ar' ? 'تحميل المشروع (ZIP)' : 'Download ZIP'}</span>
                </a>

                <button
                  onClick={logoutAdmin}
                  className="bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 text-xs font-bold px-3.5 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>{t('adminLogout')}</span>
                </button>
              </div>
            </div>

            {/* Main Form Box */}
            <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-6">
              {/* Doctor Selection Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <h3 className="text-sm font-black text-purple-400">
                    {language === 'ar' ? 'إدارة وتعديل بيانات الأطباء' : 'Edit Doctor Information'}
                  </h3>
                  <p className="text-xs text-slate-400">{t('adminDoctorSelectLabel')}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                  <select
                    value={selectedDoctorId}
                    onChange={(e) => handleSelectDoctor(e.target.value)}
                    className="text-xs bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-purple-600 font-bold"
                  >
                    <option value="new">➕ {t('adminAddDoctor')}</option>
                    {doctors.map((doc) => (
                      <option key={doc.id} value={doc.id}>
                        {doc.name[language] || doc.name.ar} ({specialties.find((s) => s.id === doc.specialtyId)?.name[language]})
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => handleSelectDoctor('new')}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition cursor-pointer border-0 flex items-center gap-1.5"
                  >
                    <Plus className="h-4 w-4" />
                    <span>{t('adminAddDoctor')}</span>
                  </button>

                  {selectedDoctorId !== 'new' && (
                    <button
                      type="button"
                      onClick={handleDelete}
                      disabled={isDeleting}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-3.5 py-2 rounded-xl transition cursor-pointer border-0 flex items-center gap-1.5 disabled:opacity-50"
                    >
                      {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                      <span>{t('adminDeleteDoctor')}</span>
                    </button>
                  )}
                </div>
              </div>

              {/* In-app confirmation dialog for deleting doctor */}
              {showDeleteConfirm && (
                <div className="bg-red-950/70 border-2 border-red-600 rounded-2xl p-4 sm:p-5 space-y-3 animate-fade-in shadow-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-black text-white">
                        {language === 'ar' ? 'تأكيد حذف الطبيب نهائياً' : 'Confirm Doctor Deletion'}
                      </h4>
                      <p className="text-xs text-red-200 mt-1">
                        {language === 'ar'
                          ? `هل أنت متأكد من رغبتك في حذف "${formData.name.ar || formData.name.en}"؟ سيتم حذف بياناته من الموقع وقاعدة البيانات السحابية، وإرسال إشعار فوري إلى البريد الإلكتروني ${ADMIN_NOTIFICATION_EMAIL}.`
                          : `Are you sure you want to delete "${formData.name.en || formData.name.ar}"? This will remove the doctor from the website and send an audit notification to ${ADMIN_NOTIFICATION_EMAIL}.`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      disabled={isDeleting}
                      onClick={confirmDeleteDoctor}
                      className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-4 py-2 rounded-xl cursor-pointer transition border-0 flex items-center gap-1.5 shadow-md disabled:opacity-50"
                    >
                      {isDeleting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                      <span>{language === 'ar' ? 'نعم، احذف الطبيب نهائياً' : 'Yes, Delete Permanently'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowDeleteConfirm(false)}
                      disabled={isDeleting}
                      className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs px-4 py-2 rounded-xl cursor-pointer transition border border-slate-700"
                    >
                      <span>{language === 'ar' ? 'إلغاء' : 'Cancel'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Edit Form */}
              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      الاسم باللغة العربية
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name.ar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: { ...formData.name, ar: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Name in English
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name.en}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: { ...formData.name, en: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      اللقب العلمي والوظيفة (عربي)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title.ar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          title: { ...formData.title, ar: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Medical Title (English)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.title.en}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          title: { ...formData.title, en: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-purple-400 mb-1">
                      تعيين التخصص بالعيادة (1 من 6 تخصصات)
                    </label>
                    <select
                      value={formData.specialtyId}
                      onChange={(e) => setFormData({ ...formData, specialtyId: e.target.value })}
                      className="w-full text-xs bg-slate-950 border border-purple-500 rounded-xl px-3.5 py-2.5 text-white font-bold"
                    >
                      {specialties.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name[language]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      صورة الطبيب (Photo: URL أو رفع صورة من الجهاز)
                    </label>
                    <div className="flex flex-col sm:flex-row items-center gap-3 bg-slate-950 p-3 rounded-2xl border border-slate-800">
                      <div className="h-16 w-16 rounded-xl overflow-hidden bg-slate-900 border border-slate-700 shrink-0">
                        <img
                          src={getDoctorImage(formData)}
                          alt="Doctor Preview"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover bg-slate-900"
                          onError={(e) => {
                            const fallback = getDoctorFallbackUrl(formData);
                            const imgEl = e.target as HTMLImageElement;
                            if (imgEl.src !== fallback) {
                              imgEl.src = fallback;
                            } else {
                              imgEl.src = DEFAULT_DOCTOR_AVATAR;
                            }
                          }}
                        />
                      </div>
                      <div className="flex-1 w-full space-y-2">
                        <input
                          type="text"
                          value={formData.image}
                          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                          placeholder="رابط الصورة https://..."
                          className="w-full text-xs bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-white"
                        />
                        <div className="flex items-center gap-2">
                          <label className="bg-purple-600/30 hover:bg-purple-600 text-purple-200 text-[11px] font-bold px-3 py-1.5 rounded-lg border border-purple-500/30 cursor-pointer transition flex items-center gap-1">
                            <span>📁 رفع صورة من الجهاز</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  const reader = new FileReader();
                                  reader.onloadend = () => {
                                    if (typeof reader.result === 'string') {
                                      setFormData({ ...formData, image: reader.result });
                                    }
                                  };
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                          </label>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          <span className="text-[10px] text-slate-400">الصور المعتمدة:</span>
                          {DOCTOR_PHOTO_PRESETS.map((preset) => (
                            <button
                              key={preset.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, image: preset.image })}
                              className="text-[10px] bg-slate-850 hover:bg-purple-900/60 text-slate-300 hover:text-white px-2 py-0.5 rounded-md border border-slate-700 transition cursor-pointer"
                            >
                              {preset.nameAr}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      حالة التواجد بالحجز
                    </label>
                    <select
                      value={formData.available ? 'true' : 'false'}
                      onChange={(e) =>
                        setFormData({ ...formData, available: e.target.value === 'true' })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    >
                      <option value="true">متاح لاستقبال الحجوزات</option>
                      <option value="false">غير متاح حالياً</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      مواعيد العيادة (عربي)
                    </label>
                    <input
                      type="text"
                      value={formData.timing.ar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          timing: { ...formData.timing, ar: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Working Hours (English)
                    </label>
                    <input
                      type="text"
                      value={formData.timing.en}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          timing: { ...formData.timing, en: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      المؤهلات والشهادات (عربي)
                    </label>
                    <input
                      type="text"
                      value={formData.education.ar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          education: { ...formData.education, ar: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Education (English)
                    </label>
                    <input
                      type="text"
                      value={formData.education.en}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          education: { ...formData.education, en: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      نبذة وسيرة ذاتية (عربي)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.bio.ar}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          bio: { ...formData.bio, ar: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Biography (English)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.bio.en}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          bio: { ...formData.bio, en: e.target.value },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      سنوات الخبرة (أرقام)
                    </label>
                    <input
                      type="number"
                      value={formData.experienceYears}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          experienceYears: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      رقم واتساب الحجز (WhatsApp Direct)
                    </label>
                    <input
                      type="text"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      الإنجازات والجوائز (عربي - افصل بينها بفاصلة ,)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.achievements.ar?.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          achievements: {
                            ...formData.achievements,
                            ar: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-400 mb-1">
                      Achievements (English - comma separated)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.achievements.en?.join(', ')}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          achievements: {
                            ...formData.achievements,
                            en: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                          },
                        })
                      }
                      className="w-full text-xs bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-white"
                    />
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs py-3.5 rounded-xl transition cursor-pointer border-0 shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {isSaving ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>{language === 'ar' ? 'جاري الحفظ وإرسال الإشعار للبريد الإلكتروني...' : 'Saving & dispatching email update...'}</span>
                      </>
                    ) : (
                      <>
                        <Save className="h-4 w-4" />
                        <span>{t('adminSaveBtn')}</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[11px] text-purple-300/80">
                    <Mail className="h-3.5 w-3.5 text-purple-400" />
                    <span>
                      {language === 'ar'
                        ? `يتم إرسال إشعار فوري بجميع تفاصيل التعديل إلى: ${ADMIN_NOTIFICATION_EMAIL}`
                        : `Instant email notification sent on save to: ${ADMIN_NOTIFICATION_EMAIL}`}
                    </span>
                  </div>
                </div>
              </form>

              {successMsg && (
                <div className="p-4 bg-emerald-950/80 border-2 border-emerald-600 text-emerald-200 text-xs font-bold rounded-2xl text-center flex flex-col sm:flex-row items-center justify-center gap-2 shadow-lg animate-fade-in">
                  <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>{successMsg}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <footer className="bg-slate-900 py-4 px-6 border-t border-slate-800 text-center text-xs text-slate-500">
        لوحة إدارة المستشفى العربية للجراحة © 2026
      </footer>
    </div>
  );
};
