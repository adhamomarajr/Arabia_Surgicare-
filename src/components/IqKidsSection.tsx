import React, { useState } from 'react';
import { Sparkles, Phone, MessageSquare, Youtube, MapPin, CheckCircle2, Heart, Brain, Smile, Star, ExternalLink, Play } from 'lucide-react';
import { Language } from '../types';

interface IqKidsSectionProps {
  language: Language;
}

export const IqKidsSection: React.FC<IqKidsSectionProps> = ({ language }) => {
  const iqPhone = '01042103044';
  const iqPhoneInternational = '201042103044';
  
  // Default youtube search/watch link for IQ Kids
  const [youtubeUrl, setYoutubeUrl] = useState('https://www.youtube.com/results?search_query=IQ+Kids+مركز+تنمية+الذكاء+والتخاطب+مستشفى+العربية');
  const [showVideoModal, setShowVideoModal] = useState(false);

  const whatsappMessage = encodeURIComponent(
    language === 'ar'
      ? 'مرحباً، أود الاستفسار والتسجيل في مركز IQ Kids لتعديل السلوك والتخاطب وتنمية المهارات بمستشفى العربية للجراحة.'
      : 'Hello, I would like to inquire about IQ Kids Center for Speech Therapy & Behavior Modification at Arabia Surgicare Hospital.'
  );

  return (
    <div className="space-y-8 animate-fade-in">
      {/* 1. FIRST PARAGRAPH (HIGHLIGHTED INSPIRATIONAL QUOTE CARD) */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-lg shadow-orange-500/10">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30 text-white shadow-inner">
            <Sparkles className="h-7 w-7 text-amber-200 animate-pulse" />
          </div>
          <div className="space-y-1.5 flex-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[11px] font-black uppercase tracking-wider text-amber-100 border border-white/25">
              <Star className="h-3 w-3 fill-amber-200 text-amber-200" />
              <span>{language === 'ar' ? 'رؤيتنا لأطفالنا' : 'Our Vision for Children'}</span>
            </span>
            <p className="text-lg sm:text-xl md:text-2xl font-black leading-snug tracking-tight text-white">
              {language === 'ar'
                ? 'معنا نصنع مستقبل أكثر إشراقا لأطفالنا كل طفل يملك بذره إبداع ونحن نساعده على تنميتها'
                : 'Together we create a brighter future for our children. Every child possesses a seed of creativity, and we help them nurture it.'}
            </p>
          </div>
        </div>
      </div>

      {/* 2. MAIN DETAILS CARD */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="border-b border-slate-100 pb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200 mb-3">
            <Smile className="h-4 w-4" />
            <span>{language === 'ar' ? 'قسم رعاية وتأهيل الأطفال' : 'Child Care & Development Division'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {language === 'ar'
              ? 'IQ Kids - مركز تعديل السلوك والتخاطب وتنمية المهارات'
              : 'IQ Kids - Behavior Modification, Speech Therapy & Skills Development Center'}
          </h3>
        </div>

        {/* Text Paragraphs */}
        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
          <p className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            {language === 'ar'
              ? 'نقدم بيئة آمنة ومميزة تساعد الأطفال على تطوير قدراتهم ومهاراتهم من خلال برامج متخصصة في التخاطب، تعديل السلوك، تنمية المهارات، وتنمية الذكاء والتواصل.'
              : 'We provide a safe and distinctive environment that empowers children to cultivate their abilities and potential through specialized programs in speech therapy, behavior modification, skill development, cognitive enhancement, and effective communication.'}
          </p>

          <p className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            {language === 'ar'
              ? 'نعمل على مساعدة الطفل في تحسين التواصل اللفظي وغير اللفظي، زيادة الانتباه والتركيز، تنمية المهارات الاجتماعية والإدراكية، وتعديل السلوكيات غير المناسبة، من خلال برامج فردية تناسب احتياجات كل طفل.'
              : 'We work closely to assist every child in improving verbal and non-verbal communication, boosting attention and focus, strengthening social and cognitive skills, and refining behavioral challenges through tailored individual programs.'}
          </p>

          <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 font-bold flex items-start gap-3">
            <div className="h-6 w-6 rounded-lg bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <div>
              <span className="font-black text-amber-900 ml-1">
                {language === 'ar' ? 'هدفنا:' : 'Our Goal:'}
              </span>{' '}
              {language === 'ar'
                ? 'اكتشاف قدرات كل طفل وتنميتها، ومساعدته على التواصل والتعلم والاندماج بثقة واستقلالية.'
                : 'Discover and develop every child\'s capabilities, empowering them to communicate, learn, and integrate with unwavering confidence and self-reliance.'}
            </div>
          </div>
        </div>

        {/* Special Program Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 text-xs text-purple-900 font-bold">
            <div className="h-8 w-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="h-4 w-4" />
            </div>
            <span>{language === 'ar' ? 'جلسات تخاطب وتطوير النطق والتواصل' : 'Speech Therapy & Language Communication'}</span>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 text-xs text-sky-900 font-bold">
            <div className="h-8 w-8 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0">
              <Brain className="h-4 w-4" />
            </div>
            <span>{language === 'ar' ? 'تنمية الذكاء وزيادة التركيز والذاكرة' : 'Cognitive Development & Focus Enhancement'}</span>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-900 font-bold">
            <div className="h-8 w-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
              <Heart className="h-4 w-4" />
            </div>
            <span>{language === 'ar' ? 'تعديل السلوك وبناء الثقة بالنفس' : 'Behavior Modification & Self-Confidence'}</span>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-100 text-xs text-amber-900 font-bold">
            <div className="h-8 w-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <span>{language === 'ar' ? 'برامج فردية وجماعية مع إشراف أسري' : 'Individual & Group Customized Programs'}</span>
          </div>
        </div>

        {/* 3. YOUTUBE VIDEO SECTION */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-7 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="h-12 w-12 rounded-2xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">
                <Youtube className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-black text-base text-white">
                  {language === 'ar' ? 'فيديو تعريفي لمركز IQ Kids' : 'IQ Kids Introductory Video'}
                </h4>
                <p className="text-xs text-slate-300">
                  {language === 'ar'
                    ? 'شاهد كيف نساعد أطفالنا على التعلم والتطور والنجاح'
                    : 'Watch how we help children learn, develop and succeed'}
                </p>
              </div>
            </div>

            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-6 py-3.5 rounded-2xl transition shadow-md shadow-red-600/30 cursor-pointer border-0 w-full sm:w-auto"
            >
              <Play className="h-4 w-4 fill-white" />
              <span>{language === 'ar' ? 'مشاهدة الفيديو على YouTube' : 'Watch Video on YouTube'}</span>
              <ExternalLink className="h-3.5 w-3.5 opacity-80" />
            </a>
          </div>

          <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>
              {language === 'ar'
                ? 'فيديو مسجل يوضح جلسات تنمية الذكاء والتخاطب وتعديل السلوك لأطفالنا'
                : 'Recorded video illustrating speech, cognitive, and behavior sessions for our children'}
            </span>
          </div>
        </div>

        {/* 4. DEDICATED CONTACT DETAILS (NUMBER: 01042103044) */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50/60 rounded-3xl border border-emerald-200/80 p-6 sm:p-7 space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                {language === 'ar' ? 'رقم التواصل الخاص بمركز IQ Kids' : 'Dedicated IQ Kids Contact Number'}
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span>{language === 'ar' ? 'للحجز والاستفسار المباشر:' : 'For Inquiries & Bookings:'}</span>
                <span className="text-emerald-700 font-mono text-2xl sm:text-3xl font-black ltr:font-mono" dir="ltr">
                  {iqPhone}
                </span>
              </h4>
              <p className="text-xs text-slate-600">
                {language === 'ar'
                  ? 'رقم مركز IQ Kids مستقل وخاص بتنسيق جلسات الأطفال (يختلف عن رقم الاستقبال الرئيسي للمستشفى)'
                  : 'IQ Kids Center operates with its own dedicated hotline distinct from the main hospital phone'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <a
                href={`tel:${iqPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-6 py-3.5 rounded-2xl transition shadow-md cursor-pointer border-0 text-decoration-none"
              >
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>{language === 'ar' ? `اتصال: ${iqPhone}` : `Call: ${iqPhone}`}</span>
              </a>

              <a
                href={`https://wa.me/${iqPhoneInternational}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3.5 rounded-2xl transition shadow-md shadow-emerald-600/20 cursor-pointer border-0 text-decoration-none"
              >
                <MessageSquare className="h-4 w-4" />
                <span>{language === 'ar' ? 'مراسلة واتساب IQ Kids' : 'Chat via IQ Kids WhatsApp'}</span>
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-emerald-200/60 flex items-center gap-2 text-xs text-emerald-900 font-medium">
            <MapPin className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>
              {language === 'ar'
                ? 'العنوان: 16 شارع 26 يوليو، ميدان لبنان - داخل المستشفى العربية للجراحة'
                : 'Address: 16 26th of July St., Lebanon Square - Inside Arabia Surgicare Hospital'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
