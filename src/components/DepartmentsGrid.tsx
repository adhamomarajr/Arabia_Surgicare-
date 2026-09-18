import React from 'react';
import { useApp } from '../context/AppContext';
import { HOSPITAL_DEPARTMENTS } from '../data/initialData';
import { Stethoscope, Bone, Baby, HeartPulse, UserRound, Brain, Sparkles, Radio, Activity, Smile, ArrowLeft, ArrowRight } from 'lucide-react';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Stethoscope,
  Bone,
  Baby,
  HeartPulse,
  UserRound,
  Brain,
  Sparkles,
  Radio,
  Activity,
  Smile,
};

export const DepartmentsGrid: React.FC = () => {
  const { t, language, setActiveSpecialtyId, doctors } = useApp();

  const handleDepartmentClick = (specialtyId: string) => {
    setActiveSpecialtyId(specialtyId);
    const docSection = document.getElementById('doctors-sidebar-section');
    if (docSection) {
      docSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="departments-section" className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12 space-y-3">
        <span className="bg-purple-100 text-purple-900 border border-purple-200 text-xs font-black px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-2xs">
          {t('specBadge')}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{t('specTitle')}</h2>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">{t('specDesc')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HOSPITAL_DEPARTMENTS.map((dep) => {
          const IconComp = ICON_MAP[dep.icon] || Stethoscope;
          const specialtyDoctors = doctors.filter((doc) => doc.specialtyId === dep.specialtyId);

          return (
            <div
              key={dep.id}
              onClick={() => handleDepartmentClick(dep.specialtyId)}
              className="geometric-card p-6 rounded-3xl flex flex-col justify-between group cursor-pointer relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 rounded-2xl bg-purple-50 text-purple-700 border border-purple-100 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                    <IconComp className="h-6 w-6" />
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                    specialtyDoctors.length > 0
                      ? 'bg-slate-100 text-slate-700 border-slate-200'
                      : dep.specialtyId === 'iq-kids'
                      ? 'bg-amber-50 text-amber-900 border-amber-200'
                      : dep.specialtyId === 'dentistry'
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                      : 'bg-purple-50 text-purple-800 border-purple-200'
                  }`}>
                    {specialtyDoctors.length > 0
                      ? `${specialtyDoctors.length} ${t('doctorsCountSuffix')}`
                      : dep.specialtyId === 'iq-kids'
                      ? (language === 'ar' ? '✨ مركز متخصص: 01042103044' : '✨ Dedicated Center: 01042103044')
                      : dep.specialtyId === 'dentistry'
                      ? (language === 'ar' ? '📞 اتصل للاستعلام عن الطبيب' : '📞 Call to check doctor')
                      : (language === 'ar' ? '📞 تواصل للمواعيد' : '📞 Inquire for schedules')}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-purple-700 transition-colors">
                    {dep.title[language]}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                    {dep.desc[language]}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-100">
                  {dep.features[language].map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-purple-700 group-hover:text-purple-900">
                <span>
                  {dep.specialtyId === 'iq-kids'
                    ? (language === 'ar' ? 'عرض تفاصيل المركز وفيديو اليوتيوب' : 'View Center Details & YouTube Video')
                    : (language === 'ar' ? 'عرض الأطباء والتوقيت' : 'View Doctors & Schedule')}
                </span>
                {language === 'ar' ? (
                  <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
