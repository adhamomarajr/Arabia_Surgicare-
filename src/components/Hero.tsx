import React from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, Award, ShieldCheck, Sparkles, ChevronRight, ChevronLeft, MessageCircle } from 'lucide-react';
import { heroHospitalImg } from '../lib/doctorImages';
export const Hero: React.FC = () => {
  const { t, language } = useApp();

  return (
    <section className="relative bg-slate-950 text-white py-16 lg:py-20 px-4 overflow-hidden bg-grid-dark border-b border-slate-800">
      {/* Geometric Decorative Accent Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full filter blur-3xl pointer-events-none" />

      {/* Structural Accent Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-7 space-y-6">
          <span className="inline-flex items-center gap-2 bg-purple-900/60 text-purple-200 text-xs font-bold px-4 py-1.5 rounded-full border border-purple-500/30 shadow-xs backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
            <span>{t('heroBadge')}</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
            <span>{t('heroTitle')}</span>
            <br />
            <span className="bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-400 bg-clip-text text-transparent">{t('heroTitleHighlight')}</span>
          </h2>

          <p className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed font-normal">
            {t('heroDesc')}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#doctors-sidebar-section"
              className="bg-purple-600 hover:bg-purple-500 text-white font-black text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg shadow-purple-900/40 flex items-center gap-2 border border-purple-500/30 active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              <span>{t('navBookBtn')}</span>
              {language === 'ar' ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </a>

            <a
              href="#departments-section"
              className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-bold text-sm px-5 py-3.5 rounded-2xl transition-all border border-slate-700/80 backdrop-blur-md active:scale-95"
            >
              {t('navSpecializations')}
            </a>
          </div>


          <div className="pt-8 flex items-center gap-6 justify-center lg:justify-start">
            <div className="p-3 bg-slate-900/50 rounded-2xl border border-slate-800/80 backdrop-blur-xs">
              <p className="text-2xl font-black text-amber-400">25+</p>
              <p className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                {language === 'ar' ? 'أستاذ واستشاري عالمي' : 'Consultants & Professors'}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 mt-8 lg:mt-0 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 max-w-sm mx-auto group bg-slate-900">
            <img
              src={heroHospitalImg}
              alt="Arabia Surgicare Hospital"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const fallback = '/hero-hospital.jpeg';
                if (e.currentTarget.src !== fallback) {
                  e.currentTarget.src = fallback;
                }
              }}
              className="w-full h-auto object-cover aspect-[4/5] transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 text-white space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                <p className="font-bold text-xs">
                  {language === 'ar' ? 'معتمد وفق أعلى معايير الجودة الطبية' : 'JCI Accredited Hospital Standards'}
                </p>
              </div>
              <p className="text-[11px] text-slate-300">
                {language === 'ar' ? 'غرف عمليات ذكية بنظام الفلترة الهوائية' : 'Smart surgical theaters with laminar airflow'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
