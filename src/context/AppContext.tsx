import React, { createContext, useContext, useState, useEffect } from 'react';
import { Doctor, Specialty, Language } from '../types';
import { INITIAL_DOCTORS, INITIAL_SPECIALTIES, TRANSLATIONS } from '../data/initialData';
import { db, handleFirestoreError, OperationType, testFirestoreConnection } from '../lib/firebase';
import { collection, onSnapshot, doc, setDoc, deleteDoc } from 'firebase/firestore';
import { getDoctorImage } from '../lib/doctorImages';

function safeGetItem(key: string): string | null {
  try {
    return typeof window !== 'undefined' && window.localStorage ? window.localStorage.getItem(key) : null;
  } catch (e) {
    console.warn('localStorage read notice:', e);
    return null;
  }
}

function safeSetItem(key: string, value: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, value);
    }
  } catch (e) {
    console.warn('localStorage write notice:', e);
  }
}

export function sanitizeDoctor(raw: any, fallback?: Doctor): Doctor {
  const match = fallback || INITIAL_DOCTORS.find((i) => i.id === raw?.id) || INITIAL_DOCTORS[0];

  const getNameObj = (val: any, fallbackVal: { ar: string; en: string }) => {
    if (!val) return fallbackVal;
    if (typeof val === 'string') return { ar: val, en: val };
    return {
      ar: val.ar || val.en || fallbackVal.ar,
      en: val.en || val.ar || fallbackVal.en,
    };
  };

  const getArrayObj = (val: any, fallbackVal: { ar: string[]; en: string[] }) => {
    if (!val) return fallbackVal;
    return {
      ar: Array.isArray(val.ar) ? val.ar : (Array.isArray(val) ? val : fallbackVal.ar),
      en: Array.isArray(val.en) ? val.en : (Array.isArray(val) ? val : fallbackVal.en),
    };
  };

  const name = getNameObj(raw?.name, match.name);
  const title = getNameObj(raw?.title, match.title);
  const timing = getNameObj(raw?.timing, match.timing);
  const education = getNameObj(raw?.education, match.education);
  const bio = getNameObj(raw?.bio, match.bio);
  const achievements = getArrayObj(raw?.achievements, match.achievements);
  const specializations = getArrayObj(raw?.specializations, match.specializations);

  return {
    id: String(raw?.id || match.id),
    specialtyId: String(raw?.specialtyId || match.specialtyId),
    name,
    title,
    image: getDoctorImage(raw || match),
    experienceYears: typeof raw?.experienceYears === 'number' ? raw.experienceYears : (match.experienceYears || 10),
    available: raw?.available !== false,
    whatsapp: String(raw?.whatsapp || match.whatsapp || '201118573813'),
    timing,
    education,
    bio,
    achievements,
    specializations,
    cvDocument: raw?.cvDocument || match.cvDocument,
  };
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  activeSpecialtyId: string;
  setActiveSpecialtyId: (id: string) => void;
  doctors: Doctor[];
  specialties: Specialty[];
  currentView: 'main' | 'admin';
  setCurrentView: (view: 'main' | 'admin') => void;
  isAdminLoggedIn: boolean;
  loginAdmin: (password: string) => boolean;
  logoutAdmin: () => void;
  bookingModalDoctor: Doctor | null;
  setBookingModalDoctor: (doctor: Doctor | null) => void;
  addDoctor: (doctor: Doctor) => void;
  updateDoctor: (doctor: Doctor) => void;
  deleteDoctor: (doctorId: string) => void;
  t: (key: keyof typeof TRANSLATIONS['ar']) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [activeSpecialtyId, setActiveSpecialtyId] = useState<string>(() => {
    return INITIAL_SPECIALTIES[0]?.id || 'plastic-surgery';
  });
  const [currentView, setCurrentView] = useState<'main' | 'admin'>('main');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [bookingModalDoctor, setBookingModalDoctor] = useState<Doctor | null>(null);

  // Load doctors: initialize with INITIAL_DOCTORS and check cache safely
  const [doctors, setDoctors] = useState<Doctor[]>(() => {
    try {
      const saved = safeGetItem('arabia_hospital_doctors_v10');
      if (saved) {
        const parsed: any[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed
            .filter((d) => d.id !== 'doc-fadl')
            .map((d) => sanitizeDoctor(d));
        }
      }
    } catch (e) {
      console.error('Error parsing doctors from localStorage', e);
    }
    return INITIAL_DOCTORS.filter((d) => d.id !== 'doc-fadl').map((d) => sanitizeDoctor(d));
  });

  // Realtime Firestore synchronization for all visitors
  useEffect(() => {
    testFirestoreConnection();

    const doctorsCol = collection(db, 'doctors');
    const unsubscribe = onSnapshot(
      doctorsCol,
      (snapshot) => {
        if (!snapshot.empty) {
          const firestoreDocs: Doctor[] = [];
          snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            if (data && data.id) {
              // Ensure removed dentist is permanently scrubbed
              if (data.id === 'doc-fadl' || data.specialtyId === 'dentistry') {
                deleteDoc(doc(db, 'doctors', docSnap.id)).catch(() => null);
                return;
              }
              firestoreDocs.push(sanitizeDoctor(data));
            }
          });

          if (firestoreDocs.length > 0) {
            setDoctors(firestoreDocs);
            safeSetItem('arabia_hospital_doctors_v10', JSON.stringify(firestoreDocs));
          }
        } else {
          // Firestore is empty: auto-seed initial doctors to cloud database
          INITIAL_DOCTORS.filter((d) => d.id !== 'doc-fadl').forEach(async (docData) => {
            try {
              const toSave = sanitizeDoctor(docData);
              await setDoc(doc(db, 'doctors', toSave.id), toSave);
            } catch (err) {
              handleFirestoreError(err, OperationType.WRITE, `doctors/${docData.id}`);
            }
          });
        }
      },
      (error) => {
        handleFirestoreError(error, OperationType.GET, 'doctors');
      }
    );

    return () => unsubscribe();
  }, []);

  // Save doctors helper with localStorage fallback
  const syncDoctorsLocally = (newDoctorsList: Doctor[]) => {
    safeSetItem('arabia_hospital_doctors_v10', JSON.stringify(newDoctorsList));
  };

  // Sync document HTML dir attribute for RTL/LTR language support
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const loginAdmin = (password: string): boolean => {
    const cleanPwd = password.trim();
    if (cleanPwd === 'arabia@1980#') {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
  };

  const addDoctor = async (newDoc: Doctor) => {
    const sanitizedDoc = {
      ...newDoc,
      image: newDoc.image || getDoctorImage(newDoc),
    };
    const updated = [sanitizedDoc, ...doctors.filter((d) => d.id !== sanitizedDoc.id)];
    setDoctors(updated);
    syncDoctorsLocally(updated);
    try {
      await setDoc(doc(db, 'doctors', sanitizedDoc.id), sanitizedDoc);
    } catch (err) {
      handleFirestoreError(err, OperationType.CREATE, `doctors/${sanitizedDoc.id}`);
    }
  };

  const updateDoctor = async (updatedDoc: Doctor) => {
    const sanitizedDoc = {
      ...updatedDoc,
      image: updatedDoc.image || getDoctorImage(updatedDoc),
    };
    const updated = doctors.map((docItem) => (docItem.id === sanitizedDoc.id ? sanitizedDoc : docItem));
    setDoctors(updated);
    syncDoctorsLocally(updated);
    try {
      await setDoc(doc(db, 'doctors', sanitizedDoc.id), sanitizedDoc);
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `doctors/${sanitizedDoc.id}`);
    }
  };

  const deleteDoctor = async (doctorId: string) => {
    const targetDoc = doctors.find((d) => d.id === doctorId);
    const updated = doctors.filter((docItem) => docItem.id !== doctorId);
    setDoctors(updated);
    syncDoctorsLocally(updated);
    try {
      await deleteDoc(doc(db, 'doctors', doctorId));
    } catch (err) {
      handleFirestoreError(err, OperationType.DELETE, `doctors/${doctorId}`);
    }
  };

  const t = (key: keyof typeof TRANSLATIONS['ar']): string => {
    const langDict = TRANSLATIONS[language] || TRANSLATIONS.ar;
    return langDict[key] || TRANSLATIONS.ar[key] || key;
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        activeSpecialtyId,
        setActiveSpecialtyId,
        doctors,
        specialties: INITIAL_SPECIALTIES,
        currentView,
        setCurrentView,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        bookingModalDoctor,
        setBookingModalDoctor,
        addDoctor,
        updateDoctor,
        deleteDoctor,
        t,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

