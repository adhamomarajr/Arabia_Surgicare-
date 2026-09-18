import React from 'react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { t, language } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto text-center space-y-4">
        <p className="font-extrabold text-white text-base">
          Arabia Surgicare Hospital - {t('hospitalName')}
        </p>

        <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
          {t('footerDesc')}
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 pt-2 font-medium">
          <a href="#about-section" className="hover:text-white transition-colors">
            {t('navAbout')}
          </a>
          <a href="#departments-section" className="hover:text-white transition-colors">
            {t('navSpecializations')}
          </a>
          <a href="#doctors-sidebar-section" className="hover:text-white transition-colors">
            {t('navDoctors')}
          </a>
          <a href="#contact-section" className="hover:text-white transition-colors">
            {t('navContact')}
          </a>
        </div>

        <p className="text-xs text-slate-500 pt-6 border-t border-slate-800/60">
          {language === 'ar' ? 'جميع الحقوق محفوظة © 2026 المستشفى العربية للجراحة' : 'All Rights Reserved © 2026 Arabia Surgicare Hospital'}
        </p>
      </div>
    </footer>
  );
};
