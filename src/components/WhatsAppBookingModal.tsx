import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, MessageSquare, Calendar, Phone, User, CheckCircle2 } from 'lucide-react';
import { getDoctorImage, getDoctorFallbackUrl, DEFAULT_DOCTOR_AVATAR } from '../lib/doctorImages';

export const WhatsAppBookingModal: React.FC = () => {
  const { bookingModalDoctor, setBookingModalDoctor, language, t, specialties } = useApp();

  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');

  if (!bookingModalDoctor) return null;

  const doctorSpecialty = specialties.find((s) => s.id === bookingModalDoctor.specialtyId);

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName || !patientPhone) return;

    const doctorName = bookingModalDoctor.name[language] || bookingModalDoctor.name.ar;
    const specialtyName = doctorSpecialty ? doctorSpecialty.name[language] : '';

    const textAr = `طلب حجز موعد عيادة كشف:
🏥 المستشفى العربية للجراحة - Arabia Surgicare Hospital
👨‍⚕️ الطبيب المعالج: ${doctorName}
🩺 التخصص: ${specialtyName}
👤 اسم المريض: ${patientName}
📱 رقم هاتف التواصل: ${patientPhone}
📅 الموعد المفضل: ${preferredDate || 'أقرب موعد متاح'}

أرجو تأكيد حجز الموعد والتوقيت المتاح. شكراً لكم!`;

    const textEn = `Clinic Appointment Booking Request:
🏥 Arabia Surgicare Hospital
👨‍⚕️ Doctor: ${doctorName}
🩺 Specialty: ${specialtyName}
👤 Patient Name: ${patientName}
📱 Phone: ${patientPhone}
📅 Preferred Date: ${preferredDate || 'Earliest available'}

Please confirm my appointment slot. Thank you!`;

    const message = language === 'ar' ? textAr : textEn;
    const targetWa = bookingModalDoctor.whatsapp || '201118573813';
    const waUrl = `https://wa.me/${targetWa.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;

    window.open(waUrl, '_blank');
    setBookingModalDoctor(null);
    setPatientName('');
    setPatientPhone('');
    setPreferredDate('');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative space-y-5 border border-slate-100">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-lg">
              💬
            </div>
            <div>
              <h3 className="font-black text-slate-900 text-sm sm:text-base">{t('waModalTitle')}</h3>
              <p className="text-[11px] text-slate-500">{t('hospitalName')}</p>
            </div>
          </div>

          <button
            onClick={() => setBookingModalDoctor(null)}
            className="p-1.5 hover:bg-slate-100 rounded-xl transition text-slate-400 hover:text-slate-600 cursor-pointer border-0"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Selected Doctor Summary Box */}
        <div className="bg-purple-50/80 p-3.5 rounded-2xl border border-purple-100 flex items-center gap-3.5">
          <img
            src={getDoctorImage(bookingModalDoctor)}
            alt={bookingModalDoctor.name[language]}
            referrerPolicy="no-referrer"
            onError={(e) => {
              const fallback = getDoctorFallbackUrl(bookingModalDoctor);
              if (e.currentTarget.src !== fallback) {
                e.currentTarget.src = fallback;
              } else {
                e.currentTarget.src = DEFAULT_DOCTOR_AVATAR;
              }
            }}
            className="w-14 h-14 rounded-xl object-cover border border-purple-200 shrink-0 bg-slate-100"
          />
          <div className="space-y-0.5">
            <p className="font-black text-slate-900 text-xs sm:text-sm">
              {bookingModalDoctor.name[language]}
            </p>
            <p className="text-[11px] font-bold text-purple-700">
              {bookingModalDoctor.title[language]}
            </p>
            <p className="text-[10px] text-slate-500 font-medium">
              ⏰ {bookingModalDoctor.timing[language]}
            </p>
          </div>
        </div>

        {/* Quick Form */}
        <form onSubmit={handleConfirmBooking} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t('bookingFormPatientName')} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute top-3.5 left-3.5 rtl:right-3.5 rtl:left-auto h-4 w-4 text-slate-400" />
              <input
                type="text"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                placeholder={language === 'ar' ? 'ادخل الاسم بالكامل' : 'Enter full name'}
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 ltr:pl-10 rtl:pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t('bookingFormPatientPhone')} <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute top-3.5 left-3.5 rtl:right-3.5 rtl:left-auto h-4 w-4 text-slate-400" />
              <input
                type="tel"
                required
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                placeholder="01xxxxxxxx"
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 ltr:pl-10 rtl:pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t('bookingFormDate')}
            </label>
            <div className="relative">
              <Calendar className="absolute top-3.5 left-3.5 rtl:right-3.5 rtl:left-auto h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                placeholder={
                  language === 'ar' ? 'مثال: السبت القادم 6 مساءً' : 'e.g. Next Saturday 6 PM'
                }
                className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 ltr:pl-10 rtl:pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-black text-xs py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border-0 mt-2"
          >
            <MessageSquare className="h-4 w-4" />
            <span>{t('waSubmitBtn')}</span>
          </button>
        </form>
      </div>
    </div>
  );
};
