import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, ZoomIn } from 'lucide-react';
import {
  galleryReceptionImg,
  heroHospitalImg,
  galleryPatientRoomImg,
  galleryDoubleWardImg,
  galleryVipLoungeImg,
  galleryPeachRoomImg,
  gallerySingleSuiteImg,
  aboutHospitalNewImg,
  aboutHospitalImg,
} from '../lib/doctorImages';

export const GallerySection: React.FC = () => {
  const { t, language } = useApp();
  const [activePhoto, setActivePhoto] = useState<{ img: string; caption: string } | null>(null);

  const galleryItems = [
    {
      img: galleryReceptionImg,
      caption: language === 'ar' ? 'صالة الاستقبال الرئيسية ومكاتب إدارة الدخول (Arabia Surgicare)' : 'Main Hospital Reception & Admission Desk (Arabia Surgicare)'
    },
    {
      img: heroHospitalImg,
      caption: language === 'ar' ? 'صالة انتظار واستراحة المراجعين والعيادات' : 'Patient Waiting & Consultation Lounge'
    },
    {
      img: galleryPatientRoomImg,
      caption: language === 'ar' ? 'غرفة إقامة المريض الفردية المجهزة بالكامل' : 'Equipped Private Patient Care Room'
    },
    {
      img: galleryDoubleWardImg,
      caption: language === 'ar' ? 'جناح الملاحظة والإقامة المزود بستائر الخصوصية الطبية' : 'Patient Double Care Ward with Privacy Dividers'
    },
    {
      img: galleryVipLoungeImg,
      caption: language === 'ar' ? 'صالة استراحة كبار الزوار والانتظار' : 'VIP Executive Visitors Waiting Lounge'
    },
    {
      img: galleryPeachRoomImg,
      caption: language === 'ar' ? 'غرف الإقامة الهادئة ومتابعة التعافي بعد العمليات' : 'Quiet Post-Operative Patient Recovery Suite'
    },
    {
      img: gallerySingleSuiteImg,
      caption: language === 'ar' ? 'أجنحة المرضى المنفردة المصممة لأقصى درجات الراحة والأمان' : 'Single Patient Care Suite Designed for Comfort & Safety'
    },
    {
      img: aboutHospitalNewImg,
      caption: language === 'ar' ? 'عيادة الاستشارات الطبية وأروقة الكشف المتخصصة' : 'Specialized Medical Examination & Consultation Suite'
    },
    {
      img: aboutHospitalImg,
      caption: language === 'ar' ? 'عيادة طب وجراحة وتجميل الأسنان بأحدث الأجهزة' : 'State-of-the-Art Dental & Cosmetic Clinic'
    }
  ];

  return (
    <section id="gallery-section" className="bg-slate-100/80 border-t border-b border-slate-200/60 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">{t('galleryTitle')}</h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">{t('galleryDesc')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(item)}
              className="group cursor-pointer bg-white p-3 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-slate-100 flex-shrink-0">
                <img
                  src={item.img}
                  alt={item.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5" />
                    {language === 'ar' ? 'عرض الصورة بالحجم الأصلي' : 'View Full Original'}
                  </span>
                </div>
              </div>
              <p className="text-center font-bold text-xs text-slate-800 py-3 px-2 flex-grow flex items-center justify-center leading-relaxed">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Full Original Photo Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-3 bg-slate-900 text-white flex items-center justify-between">
              <p className="text-xs sm:text-sm font-bold text-slate-200 truncate pr-4">
                {activePhoto.caption}
              </p>
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer"
                title={language === 'ar' ? 'إغلاق' : 'Close'}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-slate-950 flex items-center justify-center max-h-[80vh] p-2">
              <img
                src={activePhoto.img}
                alt={activePhoto.caption}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

