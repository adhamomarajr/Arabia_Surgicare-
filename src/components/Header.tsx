import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Globe, Shield, Menu, X, PhoneCall, MapPin, Building2 } from 'lucide-react';

export const Header: React.FC = () => {
  const { language, toggleLanguage, currentView, setCurrentView, t } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAdminClick = () => {
    setCurrentView(currentView === 'main' ? 'admin' : 'main');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all duration-200">
      {/* Top Notification Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="flex items-center gap-1.5 font-medium text-slate-300">
            <MapPin className="h-3.5 w-3.5 text-purple-400 shrink-0" />
            <span>{t('topAddress')}</span>
          </span>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/201118573813"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-bold hover:text-white transition-colors text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60"
            >
              <PhoneCall className="h-3.5 w-3.5 shrink-0" />
              <span>{t('topHotline')}</span>
            </a>

            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage}
              className="bg-slate-800 hover:bg-slate-700 text-slate-100 px-3 py-1 rounded-lg text-[11px] font-bold transition-all border border-slate-700 flex items-center gap-1.5 cursor-pointer active:scale-95"
              title="Toggle Language"
            >
              <Globe className="h-3.5 w-3.5 text-purple-400" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Admin Panel Button */}
            <button
              onClick={handleAdminClick}
              className="bg-purple-950 hover:bg-purple-900 text-purple-100 px-3 py-1 rounded-lg text-[11px] font-bold transition-all border border-purple-800/80 flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Shield className="h-3.5 w-3.5 text-amber-400" />
              <span>{currentView === 'admin' ? (language === 'ar' ? 'الموقع الرئيسي' : 'Main Site') : t('adminBtn')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3.5 flex justify-between items-center">
        <a href="#main-view" className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-xl bg-purple-700 flex items-center justify-center text-white font-bold text-xl shadow-md shadow-purple-900/20 group-hover:scale-105 transition-transform">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="font-black text-base sm:text-lg text-slate-900 leading-tight">
              Arabia Surgicare Hospital
            </h1>
            <p className="text-xs text-purple-600 font-bold">{t('hospitalName')}</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 font-bold text-sm text-slate-600">
          <a href="#about-section" className="hover:text-purple-600 transition-colors">
            {t('navAbout')}
          </a>
          <a href="#gallery-section" className="hover:text-purple-600 transition-colors">
            {t('navGallery')}
          </a>
          <a href="#departments-section" className="hover:text-purple-600 transition-colors">
            {t('navSpecializations')}
          </a>
          <a href="#doctors-sidebar-section" className="hover:text-purple-600 transition-colors">
            {t('navDoctors')}
          </a>
          <a href="#contact-section" className="hover:text-purple-600 transition-colors">
            {t('navContact')}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#doctors-sidebar-section"
            className="bg-purple-600 hover:bg-purple-700 text-white font-black text-xs md:text-sm px-4 md:px-5 py-2.5 rounded-xl transition-all shadow-md shadow-purple-600/20"
          >
            {t('navBookBtn')}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg cursor-pointer"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 py-3 space-y-2 text-sm font-bold text-slate-700 animate-fade-in">
          <a
            href="#about-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-50 hover:text-purple-600"
          >
            {t('navAbout')}
          </a>
          <a
            href="#gallery-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-50 hover:text-purple-600"
          >
            {t('navGallery')}
          </a>
          <a
            href="#departments-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-50 hover:text-purple-600"
          >
            {t('navSpecializations')}
          </a>
          <a
            href="#doctors-sidebar-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-slate-50 hover:text-purple-600 text-purple-700"
          >
            {t('navDoctors')}
          </a>
          <a
            href="#contact-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-purple-600"
          >
            {t('navContact')}
          </a>
        </div>
      )}
    </header>
  );
};
