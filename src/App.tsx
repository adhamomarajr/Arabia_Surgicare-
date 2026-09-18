import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { DepartmentsGrid } from './components/DepartmentsGrid';
import { DoctorsSection } from './components/DoctorsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';
import { AdminPanel } from './components/AdminPanel';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public override state: ErrorBoundaryState = { hasError: false };

  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Arabia Surgicare App caught error:', error, errorInfo);
  }

  handleReload = () => {
    try {
      localStorage.removeItem('arabia_hospital_doctors_v9');
    } catch {}
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center font-['Cairo',sans-serif]">
          <div className="h-16 w-16 rounded-2xl bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center text-3xl font-black mb-4">
            🏥
          </div>
          <h1 className="text-xl font-black mb-2">Arabia Surgicare Hospital - مستشفى العربية للجراحة</h1>
          <p className="text-sm text-slate-300 max-w-md mb-6 leading-relaxed">
            تم رصد خطأ أثناء التحميل. اضغط على الزر أدناه لإعادة تشغيل الصفحة وحل المشكلة فوراً.
            <br />
            An unexpected issue occurred. Click below to reload and restore normal operation.
          </p>
          <button
            onClick={this.handleReload}
            className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-black px-6 py-3 rounded-xl transition shadow-lg cursor-pointer border-0"
          >
            إعادة تحميل الموقع / Reload App
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function MainLayout() {
  const { currentView, language } = useApp();

  if (currentView === 'admin') {
    return (
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <AdminPanel />
      </div>
    );
  }

  return (
    <div id="main-view" dir={language === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-purple-600 selection:text-white bg-grid-pattern">
      <div>
        <Header />
        <Hero />
        <AboutSection />
        <GallerySection />
        <DepartmentsGrid />
        <DoctorsSection />
        <AchievementsSection />
        <ContactSection />
      </div>

      <Footer />
      <WhatsAppBookingModal />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AppProvider>
        <MainLayout />
      </AppProvider>
    </ErrorBoundary>
  );
}
