import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export const ContactSection: React.FC = () => {
  const { t, language } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Save inquiry to Firestore
    try {
      const inqId = `inq-${Date.now()}`;
      await setDoc(doc(db, 'inquiries', inqId), {
        id: inqId,
        name,
        phone,
        message: msg || '',
        createdAt: new Date().toISOString()
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, 'inquiries');
    }

    // Open WhatsApp directly with inquiry message!
    const waText = encodeURIComponent(
      `مرحباً المستشفى العربية للجراحة (Arabia Surgicare Hospital)\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالاستفسار: ${msg || 'استفسار عام'}`
    );
    window.open(`https://wa.me/201118573813?text=${waText}`, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setMsg('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact-section" className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Contact Form Card */}
      <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-6">
        <div>
          <span className="text-purple-600 font-bold text-xs">{t('contactBadge')}</span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">{t('contactTitle')}</h3>
        </div>

        <div className="space-y-3 text-sm">
          <div className="p-3.5 bg-purple-50 border border-purple-100 rounded-2xl space-y-1">
            <span className="block text-xs text-purple-700 font-bold flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {t('mapLocationTag')}
            </span>
            <p className="text-slate-800 font-bold text-xs">{t('topAddress')}</p>
          </div>

          <div className="p-3.5 bg-green-50 border border-green-100 rounded-2xl space-y-1">
            <span className="block text-xs text-green-800 font-bold flex items-center gap-1.5">
              <Phone className="h-4 w-4" /> {t('contactCardHotline')}
            </span>
            <a
              href="https://wa.me/201118573813"
              target="_blank"
              rel="noreferrer"
              className="block text-slate-900 font-black text-xs hover:underline text-green-700"
            >
              01118573813 ({language === 'ar' ? 'اضغط للتحدث عبر الواتساب' : 'Click to chat via WhatsApp'})
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">{t('formName')}</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('formName')}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">{t('formPhone')}</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t('formPhone')}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">{t('formMsg')}</label>
            <textarea
              rows={3}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder={t('formMsg')}
              className="w-full text-xs bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black text-xs py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border-0"
          >
            <Send className="h-4 w-4" />
            <span>{t('formSubmit')}</span>
          </button>
        </form>

        {submitted && (
          <div className="p-3 bg-green-100 border border-green-200 text-green-900 text-xs font-bold rounded-xl flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-700 shrink-0" />
            <span>{t('contactSuccess')}</span>
          </div>
        )}
      </div>

      {/* Map Card */}
      <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[400px]">
        <div className="mb-3 space-y-1">
          <h4 className="font-extrabold text-slate-900 text-base">{t('mapTitle')}</h4>
          <p className="text-slate-500 text-xs">{t('mapInfo')}</p>
        </div>

        <div className="w-full flex-1 rounded-2xl overflow-hidden border border-slate-200 min-h-[340px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.9644957750534!2d31.189029475010997!3d30.05985341784154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841472568173f%3A0x4f3bd4aacc458c22!2sArabia%20dental%20clinic!5e1!3m2!1sen!2seg!4v1783948926466!5m2!1sen!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hospital Map Location"
            className="w-full h-full min-h-[340px]"
          />
        </div>
      </div>
    </section>
  );
};
