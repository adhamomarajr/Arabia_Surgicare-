import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, ShieldCheck, Heart, Sparkles, Star, Users, Stethoscope, Clock } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const { language } = useApp();

  const achievements = [
    {
      icon: <Award className="h-7 w-7 text-purple-300" />,
      title: language === 'ar' ? '+15,000 جراحة ناجحة' : '15,000+ Surgeries',
      desc: language === 'ar' ? 'سجل حافل بأعلى معدلات الشفاء ونسب الأمان الجراحي' : 'Proven track record of high recovery rates and surgical safety',
    },
    {
      icon: <Users className="h-7 w-7 text-purple-300" />,
      title: language === 'ar' ? 'نخبة كبار الاستشاريين' : 'Elite Senior Consultants',
      desc: language === 'ar' ? 'أساتذة من كبرى كليات الطب والمستشفيات الجامعية' : 'Professors from top university medical schools & teaching hospitals',
    },
    {
      icon: <Sparkles className="h-7 w-7 text-purple-300" />,
      title: language === 'ar' ? 'كبسولات عمليات مجهزة' : 'Surgical Capsule Suites',
      desc: language === 'ar' ? 'أنظمة عزل هوائي دقيق وتجهيزات جراحية ميكروسكوبية متقدمة' : 'Precision air filtration & advanced microscopic operating tech',
    },
    {
      icon: <Clock className="h-7 w-7 text-purple-300" />,
      title: language === 'ar' ? 'جاهزية طوارئ 24/7' : '24/7 Emergency Readiness',
      desc: language === 'ar' ? 'طواقم طبية وتمريضية متخصصة ومجهزة على مدار الساعة' : 'Round-the-clock specialized medical & nursing care teams',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-950 to-slate-950 text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-3">
          <span className="bg-purple-800/60 text-purple-200 border border-purple-700/50 text-xs font-black px-4 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
            🏆 {language === 'ar' ? 'معايير الجودة والتميز' : 'Quality & Excellence Standards'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            {language === 'ar' ? 'لماذا يثق المرضى بمستشفى العربية للجراحة؟' : 'Why Patients Trust Arabia Surgicare Hospital'}
          </h2>
          <p className="text-purple-200/80 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            {language === 'ar'
              ? 'نجمع بين الخبرات الجراحية الأكاديمية الرفيعة وأحدث التقنيات الطبية لضمان سلامتك وراحتك.'
              : 'Combining high academic surgical expertise with the latest medical technology for your safety and comfort.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((ach, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 backdrop-blur-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-xl bg-purple-900/60 border border-purple-700/60 flex items-center justify-center">
                  {ach.icon}
                </div>
                <h3 className="font-black text-base sm:text-lg text-white">{ach.title}</h3>
                <p className="text-xs text-purple-200/70 leading-relaxed">{ach.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

