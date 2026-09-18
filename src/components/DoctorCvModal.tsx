import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Doctor } from '../types';
import { X, Printer, FileText, CheckCircle2, Globe, Building, Award, Stethoscope, ChevronRight, ChevronLeft } from 'lucide-react';

interface DoctorCvModalProps {
  doctor: Doctor | null;
  onClose: () => void;
}

export const DoctorCvModal: React.FC<DoctorCvModalProps> = ({ doctor, onClose }) => {
  const { language, t } = useApp();
  const [activeTab, setActiveTab] = useState<'both' | 'en' | 'ar'>('both');

  if (!doctor || !doctor.cvDocument) return null;

  const cv = doctor.cvDocument;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in print:p-0 print:bg-white print:static">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:shadow-none print:border-none print:w-full">
        {/* Modal Top Header (Hidden on Print) */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center font-bold">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">{cv.title[language] || t('cvModalTitle')}</h3>
              <p className="text-xs text-purple-300">{doctor.name[language]} — {doctor.title[language]}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="bg-purple-700 hover:bg-purple-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition flex items-center gap-1.5 cursor-pointer border-0 shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">{t('printCvBtn')}</span>
            </button>
            <button
              onClick={onClose}
              className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white p-2 rounded-xl transition cursor-pointer border-0"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Language Tabs (Hidden on Print) */}
        <div className="bg-slate-100 border-b border-slate-200 px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 shrink-0 print:hidden">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
            <Globe className="h-4 w-4 text-purple-600" />
            <span>{language === 'ar' ? 'عرض المستند:' : 'Document View:'}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-300/80 shadow-2xs">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1 text-xs font-black rounded-lg transition cursor-pointer border-0 ${
                activeTab === 'both' ? 'bg-purple-700 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {language === 'ar' ? 'الصفحتان معاً (Page 1 & 2)' : 'Both Pages (1 & 2)'}
            </button>
            <button
              onClick={() => setActiveTab('en')}
              className={`px-3 py-1 text-xs font-black rounded-lg transition cursor-pointer border-0 ${
                activeTab === 'en' ? 'bg-purple-700 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {t('page1Tab')}
            </button>
            <button
              onClick={() => setActiveTab('ar')}
              className={`px-3 py-1 text-xs font-black rounded-lg transition cursor-pointer border-0 ${
                activeTab === 'ar' ? 'bg-purple-700 text-white' : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {t('page2Tab')}
            </button>
          </div>
        </div>

        {/* Modal Scrollable Document Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-10 font-['Cairo'] text-slate-800 bg-slate-50 print:p-0 print:bg-white print:overflow-visible">
          {/* ============================================================ */}
          {/* PAGE 1: ENGLISH OFFICIAL CURRICULUM VITAE                     */}
          {/* ============================================================ */}
          {(activeTab === 'both' || activeTab === 'en') && (
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 print:border-none print:shadow-none print:p-4 print:mb-8" dir="ltr">
              {/* Document Official Header */}
              <div className="border-b-2 border-purple-900 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-[11px] font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                    Official Curriculum Vitae
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    Dr. Mohammed A. Rifaat
                  </h1>
                  <p className="text-sm font-bold text-slate-700 mt-0.5">
                    M.D., FRCS (Glasg.), FEBOPRAS
                  </p>
                </div>
                <div className="text-left sm:text-right text-xs text-slate-600 space-y-1">
                  <p className="font-bold text-slate-900">National Cancer Institute</p>
                  <p>Cairo University, Egypt</p>
                  <p className="text-purple-700 font-bold">Arabia Surgicare Hospital</p>
                </div>
              </div>

              {/* Professional Title & Summary */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 className="text-xs uppercase font-black tracking-wider text-purple-900">
                  Current Appointments & Title
                </h4>
                <p className="text-sm font-bold text-slate-900">
                  Consultant Plastic & Reconstructive Surgeon | Professor of Surgery, Head and Neck Unit, Department of Surgical Oncology at the National Cancer Institute, Cairo University, Egypt.
                </p>
              </div>

              {/* Full Biography */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Stethoscope className="h-4 w-4 text-purple-700" />
                  <span>Professional Biography & Training</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-normal">
                  <p>
                    <strong>Dr. Mohammed A. Rifaat (M.D., FRCS (Glasg.), FEBOPRAS)</strong> is a consultant Plastic & Reconstructive surgeon and professor of surgery, Head and Neck unit, Department of surgical oncology at the National Cancer Institute, Cairo University, Egypt.
                  </p>
                  <p>
                    Dr. Rifaat graduated from the <strong>Faculty of Medicine, Cairo University, Egypt in 1989</strong>. He then completed his residency training in <strong>general surgery and surgical oncology in 1994</strong>. He was driven by his passion for plastic surgery to visit a large renowned center in the <strong>United States for six months</strong> where he participated in ongoing research activities in the field of head and neck and craniofacial plastic surgery in addition to his clinical activities.
                  </p>
                  <p>
                    He then decided to pursue further clinical training and travelled to the <strong>United Kingdom</strong>. He completed basic training in plastic surgery for two years and then worked for an extra one year in several larger units in the UK. He obtained his prestigious <strong>Fellowship of the Royal College of Physicians and Surgeons of Glasgow (FRCS Glasg.)</strong> in surgery in the UK.
                  </p>
                  <p>
                    He then joined the National Cancer Institute in Cairo, Egypt as an assistant lecturer and continued his clinical work and research in cancer-related reconstructive plastic surgery, obtaining the <strong>Doctorate Degree (M.D.) in Cancer Surgery</strong>. He has published numerous scientific papers in prominent international peer-reviewed journals in this field.
                  </p>
                  <p>
                    After years of specialized practice, he obtained the <strong>European Board of Plastic, Reconstructive and Aesthetic Surgery (FEBOPRAS)</strong>. In addition to reconstructive surgery, Dr. Rifaat has over <strong>10 years in aesthetic surgery private practice</strong>.
                  </p>
                  <p>
                    He has also served as a consultant for more than <strong>3 years in Ministry of Health hospitals in the Kingdom of Saudi Arabia</strong>, and for <strong>2 years in exclusive aesthetic plastic surgery practice in a private hospital in Kuwait</strong>.
                  </p>
                </div>
              </div>

              {/* Qualifications & Degrees */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Award className="h-4 w-4 text-purple-700" />
                  <span>Degrees & International Board Certifications</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {cv.degrees.en.map((deg, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold">{deg}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Areas of Interest */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Building className="h-4 w-4 text-purple-700" />
                  <span>Areas of Special Clinical Interest</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                  {cv.areasOfInterest.en.map((item, idx) => (
                    <div key={idx} className="bg-purple-50/60 p-2.5 rounded-lg border border-purple-100 font-bold flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-purple-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Memberships */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Award className="h-4 w-4 text-purple-700" />
                  <span>Professional Memberships & Fellowships</span>
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {cv.memberships.en.map((mem, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-600 shrink-0" />
                      <span>{mem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* PAGE 2: ARABIC OFFICIAL CURRICULUM VITAE                     */}
          {/* ============================================================ */}
          {(activeTab === 'both' || activeTab === 'ar') && (
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 print:border-none print:shadow-none print:p-4" dir="rtl">
              {/* Document Official Arabic Header */}
              <div className="border-b-2 border-purple-900 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-[11px] font-black tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                    السيرة الذاتية الرسمية والمؤهلات
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                    د. محمد أحمد رفعت
                  </h1>
                  <p className="text-sm font-bold text-slate-700 mt-0.5">
                    زميل كلية الجراحين الملكية البريطانية (FRCS Glasg.) والبورد الأوروبي (FEBOPRAS)
                  </p>
                </div>
                <div className="text-right text-xs text-slate-600 space-y-1">
                  <p className="font-bold text-slate-900">المعهد القومي للأورام – جامعة القاهرة</p>
                  <p>استشاري جراحة التجميل والترميم</p>
                  <p className="text-purple-700 font-bold">المستشفى العربية للجراحة</p>
                </div>
              </div>

              {/* Current Title Banner */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1.5">
                <h4 className="text-xs font-black text-purple-900">
                  الدرجة العلمية والمنصب الحالي:
                </h4>
                <p className="text-sm font-bold text-slate-900 leading-relaxed">
                  استشاري الجراحة التجميلية والترميمية وأستاذ الجراحة، وحدة الرأس والرقبة، قسم جراحة الأورام في المعهد القومي للأورام، جامعة القاهرة – جمهورية مصر العربية.
                </p>
              </div>

              {/* Full Arabic Biography */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Stethoscope className="h-4 w-4 text-purple-700" />
                  <span>السيرة الذاتية والمسيرة الأكاديمية والإكلينيكية</span>
                </h3>
                <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3 font-normal">
                  <p>
                    تخرج الدكتور <strong>محمد أحمد رفعت</strong> من كلية الطب، جامعة القاهرة، مصر عام 1989. ثم أكمل تدريبه كطبيب مقيم في <strong>الجراحة العامة وجراحة الأورام في عام 1994</strong>.
                  </p>
                  <p>
                    كان مدفوعاً بشغفه بالجراحة التجميلية لزيارة مركز طبي عالمي كبير في <strong>الولايات المتحدة الأمريكية لمدة ستة أشهر</strong> حيث شارك في أنشطة بحثية وإكلينيكية متقدمة في مجال جراحة الرأس والرقبة والجراحة التجميلية وقاع الجمجمة.
                  </p>
                  <p>
                    ثم قرر مواصلة التدريب وسافر إلى <strong>المملكة المتحدة (UK)</strong>، حيث أكمل التدريب الأساسي في الجراحة التجميلية لمدة عامين ثم عمل لمدة سنة إضافية في عدة وحدات جراحية كبرى بالمملكة المتحدة، وحصل على <strong>درجة الزمالة في الجراحة من بريطانيا (FRCS Glasg.)</strong>.
                  </p>
                  <p>
                    ثم عاد والتحق بالمعهد القومي للأورام بالقاهرة حيث تم تعيينه مدرساً مساعداً واستمر في عمله وأبحاثه المتقدمة في الجراحة التجميلية والترميمية المتعلقة بالأورام، ثم حصل على <strong>درجة الدكتوراه في جراحة الأورام والترميم</strong> وتمت ترقيته إلى درجة أستاذ الجراحة. وقد نشر العديد من الأبحاث العلمية المرموقة في المجلات والدوريات الطبية العالمية المحكمة.
                  </p>
                  <p>
                    حصل على <strong>شهادة البورد الأوروبي للجراحة التجميلية والترميمية والتجميلية (FEBOPRAS)</strong>. وإلى جانب اهتمامه بالجراحات الترميمية الدقيقة، واصل الدكتور رفعت ممارسة الجراحة التجميلية في ممارسته الخاصة لأكثر من <strong>10 سنوات</strong>.
                  </p>
                  <p>
                    كما عمل <strong>استشارياً لأكثر من ثلاث سنوات في مستشفيات وزارة الصحة بالمملكة العربية السعودية</strong>، وخلال العامين الأخيرين عمل حصرياً <strong>اختصاصي في الجراحة التجميلية في مستشفى خاص بدولة الكويت</strong>.
                  </p>
                </div>
              </div>

              {/* Degrees and Qualifications */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Award className="h-4 w-4 text-purple-700" />
                  <span>الشهادات العلمية والاعتمادات الدولية</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {cv.degrees.ar.map((deg, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-bold">{deg}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specializations & Areas of Interest */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Building className="h-4 w-4 text-purple-700" />
                  <span>مجالات التخصص الدقيق والاهتمام الإكلينيكي</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                  {cv.areasOfInterest.ar.map((item, idx) => (
                    <div key={idx} className="bg-purple-50/60 p-2.5 rounded-lg border border-purple-100 font-bold flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-purple-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Memberships Arabic */}
              <div className="space-y-3">
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-2">
                  <Award className="h-4 w-4 text-purple-700" />
                  <span>العضويات والجمعيات الطبية الدولية والمحلية</span>
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {cv.memberships.ar.map((mem, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-600 shrink-0" />
                      <span className="font-medium">{mem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-100 px-6 py-3.5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 print:hidden">
          <p className="text-xs text-slate-500 font-medium text-center sm:text-start">
            {language === 'ar'
              ? 'مستند السيرة الذاتية معتمد رسميًا من المعهد القومي للأورام والمستشفى العربية للجراحة.'
              : 'Official CV certified by the National Cancer Institute and Arabia Surgicare Hospital.'}
          </p>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-initial bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer border-0"
            >
              <Printer className="h-4 w-4" />
              <span>{t('printCvBtn')}</span>
            </button>
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition cursor-pointer border-0"
            >
              {t('closeBtn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
