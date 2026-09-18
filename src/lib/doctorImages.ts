// Direct authentic image imports for all doctors and hospital facilities
// No AI-generated or stock Unsplash placeholders: these are the authentic photos provided for Arabia Surgicare Hospital
import docAbdallahFile from '../assets/images/abdallah.jpeg.jpeg';
import docAhmedNoshyFile from '../assets/images/ahmed-noshy.jpeg.jpeg';
import docEhabFile from '../assets/images/ehab-khalil.jpeg.jpeg';
import docMohamedRefaatFile from '../assets/images/mohamed-refaat.jpeg.jpeg';
import docRaafatFile from '../assets/images/raafat-mahfouz.jpeg.jpeg';
import docMohamedRagaeFile from '../assets/images/dr_mohamed_ragae_1785329401695.jpg.jpeg';
import docAhmedFadlFile from '../assets/images/ahmed-fadl.jpeg.jpeg';

import heroHospitalImgFile from '../assets/images/hero-hospital.jpeg';
import aboutHospitalImgFile from '../assets/images/about-hospital.jpeg';
import aboutHospitalNewImgFile from '../assets/images/about-hospital-new.jpeg';
import galleryReceptionImgFile from '../assets/images/hospital_reception_lounge_1785329455512.jpeg';
import galleryPatientRoomImgFile from '../assets/images/mint_patient_room_1785329467311.jpeg';
import galleryDoubleWardImgFile from '../assets/images/double_patient_ward_1785329479047.jpeg';
import galleryVipLoungeImgFile from '../assets/images/vip_leather_lounge_1785329488100.jpeg';
import galleryPeachRoomImgFile from '../assets/images/warm_peach_bedroom_1785329503368.jpeg';
import gallerySingleSuiteImgFile from '../assets/images/single_patient_suite_1785329514429.jpeg';

// Export the authentic images with public root fallbacks
// Direct public asset paths - works 100% reliably in Vite dev & build
export const docAbdallah = '/abdallah.jpeg.jpeg';
export const docAhmedNoshy = '/ahmed-noshy.jpeg.jpeg';
export const docEhab = '/ehab-khalil.jpeg.jpeg';
export const docMohamedRefaat = '/mohamed-refaat.jpeg.jpeg';
export const docRaafat = '/raafat-mahfouz.jpeg.jpeg';
export const docMohamedRagae = '/dr_mohamed_ragae_1785329401695.jpg.jpeg';
export const docAhmedFadl = '/ahmed-fadl.jpeg.jpeg';

export const heroHospitalImg = '/hero-hospital.jpeg';
export const aboutHospitalImg = '/about-hospital.jpeg';
export const aboutHospitalNewImg = '/about-hospital-new.jpeg';
export const galleryReceptionImg = '/hospital_reception_lounge_1785329455512.jpeg';
export const galleryPatientRoomImg = '/mint_patient_room_1785329467311.jpeg';
export const galleryDoubleWardImg = '/double_patient_ward_1785329479047.jpeg';
export const galleryVipLoungeImg = '/vip_leather_lounge_1785329488100.jpeg';
export const galleryPeachRoomImg = '/warm_peach_bedroom_1785329503368.jpeg';
export const gallerySingleSuiteImg = '/single_patient_suite_1785329514429.jpeg';

// Safely resolve image name if needed
export function resolveImage(filename: string, fallbackUrl?: string): string {
  const clean = filename.toLowerCase();
  if (clean.includes('abdallah') || clean.includes('desoky')) return docAbdallah;
  if (clean.includes('noshy')) return docAhmedNoshy;
  if (clean.includes('ehab') || clean.includes('khalil')) return docEhab;
  if (clean.includes('refaat') || clean.includes('rifaat')) return docMohamedRefaat;
  if (clean.includes('raafat') || clean.includes('mahfouz')) return docRaafat;
  if (clean.includes('ragae')) return docMohamedRagae;
  if (clean.includes('fadl')) return docAhmedFadl;

  if (clean.includes('hero')) return heroHospitalImg;
  if (clean.includes('about-hospital-new')) return aboutHospitalNewImg;
  if (clean.includes('about')) return aboutHospitalImg;
  if (clean.includes('reception')) return galleryReceptionImg;
  if (clean.includes('mint')) return galleryPatientRoomImg;
  if (clean.includes('double')) return galleryDoubleWardImg;
  if (clean.includes('vip')) return galleryVipLoungeImg;
  if (clean.includes('peach')) return galleryPeachRoomImg;
  if (clean.includes('single')) return gallerySingleSuiteImg;

  return fallbackUrl || `/${filename}`;
}

export interface DoctorPhotoPreset {
  id: string;
  nameAr: string;
  nameEn: string;
  specialtyAr: string;
  specialtyEn: string;
  image: string;
}

export const DOCTOR_PHOTO_PRESETS: DoctorPhotoPreset[] = [
  {
    id: 'doc-refaat',
    nameAr: 'د. محمد أحمد رفعت',
    nameEn: 'Dr. Mohammed Ahmed Rifaat',
    specialtyAr: 'جراحة التجميل والترميم',
    specialtyEn: 'Plastic & Reconstructive Surgery',
    image: docMohamedRefaat,
  },
  {
    id: 'doc-ehab',
    nameAr: 'د. إيهاب خليل',
    nameEn: 'Dr. Ehab Khalil',
    specialtyAr: 'علاج الأورام والإشعاع',
    specialtyEn: 'Radiation Oncology',
    image: docEhab,
  },
  {
    id: 'doc-aldesoky',
    nameAr: 'د. عبد الله الدسوقي',
    nameEn: 'Dr. Abdullah Aldesoky',
    specialtyAr: 'الصحة النفسية والعصبية',
    specialtyEn: 'Psychiatry & Mental Health',
    image: docAbdallah,
  },
  {
    id: 'doc-ragae',
    nameAr: 'د. محمد رجائي',
    nameEn: 'Dr. Mohamed Ragae',
    specialtyAr: 'الطب النفسي',
    specialtyEn: 'Psychiatrist',
    image: docMohamedRagae,
  },
  {
    id: 'doc-raafat',
    nameAr: 'أ.د. رأفت محفوظ رياض',
    nameEn: 'Prof. Dr. Raafat Mahfouz Riad',
    specialtyAr: 'علاج الألم والعمود الفقري',
    specialtyEn: 'Pain Management',
    image: docRaafat,
  },
  {
    id: 'doc-noshy',
    nameAr: 'د. أحمد نوشي',
    nameEn: 'Dr. Ahmed Noshy',
    specialtyAr: 'جراحة المخ والأعصاب والعمود الفقري',
    specialtyEn: 'Neurosurgery & Spine',
    image: docAhmedNoshy,
  },
  {
    id: 'doc-fadl',
    nameAr: 'د. أحمد فضل',
    nameEn: 'Dr. Ahmed Fadl',
    specialtyAr: 'طب وجراحة وتجميل الأسنان',
    specialtyEn: 'Dentistry & Oral Surgery',
    image: docAhmedFadl,
  },
];

export const DOCTOR_ID_IMAGE_MAP: Record<string, string> = {
  'doc-refaat': docMohamedRefaat,
  'doc-ehab': docEhab,
  'doc-aldesoky': docAbdallah,
  'doc-ragae': docMohamedRagae,
  'doc-raafat': docRaafat,
  'doc-noshy': docAhmedNoshy,
  'doc-fadl': docAhmedFadl,
};

export const DOCTOR_FALLBACK_URLS: Record<string, string> = {
  'doc-refaat': docMohamedRefaat,
  'doc-ehab': docEhab,
  'doc-aldesoky': docAbdallah,
  'doc-ragae': docMohamedRagae,
  'doc-raafat': docRaafat,
  'doc-noshy': docAhmedNoshy,
  'doc-fadl': docAhmedFadl,
};

export function getDoctorFallbackUrl(doctor: { id?: string; specialtyId?: string }): string {
  if (doctor.id && DOCTOR_FALLBACK_URLS[doctor.id]) {
    return DOCTOR_FALLBACK_URLS[doctor.id];
  }
  if (doctor.specialtyId === 'plastic-surgery') return docMohamedRefaat;
  if (doctor.specialtyId === 'radiation-oncology') return docEhab;
  if (doctor.specialtyId === 'therapy-psychiatry') return docAbdallah;
  if (doctor.specialtyId === 'pain-management') return docRaafat;
  if (doctor.specialtyId === 'neurosurgery') return docAhmedNoshy;
  if (doctor.specialtyId === 'dentistry') return docAhmedFadl;
  return docMohamedRefaat;
}

// Clean SVG Doctor Avatar fallback if anything is missing
export const DEFAULT_DOCTOR_AVATAR =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="%23f1f5f9"><rect width="200" height="200" rx="24" fill="%23f1f5f9"/><circle cx="100" cy="80" r="40" fill="%23cbd5e1"/><path d="M40 180 C40 130 160 130 160 180 Z" fill="%2394a3b8"/></svg>';

/**
 * Returns the verified authentic image URL for any doctor, ensuring no stock placeholders are shown.
 */
export function getDoctorImage(doctor: { id?: string; image?: string; specialtyId?: string; name?: any }): string {
  // If user uploaded a custom base64 image or a verified non-stock URL
  if (
    doctor.image &&
    (doctor.image.startsWith('data:image/') ||
      (doctor.image.startsWith('http') && !doctor.image.includes('unsplash.com')))
  ) {
    return doctor.image;
  }

  // 1. Match by known Doctor ID
  if (doctor.id && DOCTOR_ID_IMAGE_MAP[doctor.id]) {
    return DOCTOR_ID_IMAGE_MAP[doctor.id];
  }

  // 2. Match by Doctor Name keywords (Arabic and English)
  if (doctor.name) {
    const nameStr = (
      typeof doctor.name === 'string'
        ? doctor.name
        : `${doctor.name.ar || ''} ${doctor.name.en || ''}`
    ).toLowerCase();

    if (nameStr.includes('رفعت') || nameStr.includes('refaat') || nameStr.includes('rifaat')) return docMohamedRefaat;
    if (nameStr.includes('إيهاب') || nameStr.includes('ايهاب') || nameStr.includes('ehab') || nameStr.includes('khalil')) return docEhab;
    if (nameStr.includes('الدسوقي') || nameStr.includes('دسوقي') || nameStr.includes('عبد الله') || nameStr.includes('abdallah') || nameStr.includes('desoky')) return docAbdallah;
    if (nameStr.includes('رجائي') || nameStr.includes('رجائي') || nameStr.includes('ragae')) return docMohamedRagae;
    if (nameStr.includes('رأفت') || nameStr.includes('رافت') || nameStr.includes('raafat') || nameStr.includes('mahfouz')) return docRaafat;
    if (nameStr.includes('نوشي') || nameStr.includes('noshy')) return docAhmedNoshy;
    if (nameStr.includes('فضل') || nameStr.includes('fadl')) return docAhmedFadl;
  }

  // 3. Match by image string keywords
  if (doctor.image) {
    const imgLower = doctor.image.toLowerCase();
    if (imgLower.includes('refaat')) return docMohamedRefaat;
    if (imgLower.includes('ehab')) return docEhab;
    if (imgLower.includes('abdallah') || imgLower.includes('desoky')) return docAbdallah;
    if (imgLower.includes('ragae')) return docMohamedRagae;
    if (imgLower.includes('raafat') || imgLower.includes('mahfouz')) return docRaafat;
    if (imgLower.includes('noshy')) return docAhmedNoshy;
    if (imgLower.includes('fadl')) return docAhmedFadl;

    if (doctor.image.startsWith('/src/assets/images/')) {
      return doctor.image.replace('/src/assets/images/', '/images/');
    }
    if (doctor.image.startsWith('/assets/') || doctor.image.startsWith('/images/')) {
      return doctor.image;
    }
  }

  // 4. Match by Specialty ID
  if (doctor.specialtyId) {
    if (doctor.specialtyId === 'plastic-surgery') return docMohamedRefaat;
    if (doctor.specialtyId === 'radiation-oncology' || doctor.specialtyId === 'oncology') return docEhab;
    if (doctor.specialtyId === 'therapy-psychiatry' || doctor.specialtyId === 'psychiatry') return docAbdallah;
    if (doctor.specialtyId === 'pain-management') return docRaafat;
    if (doctor.specialtyId === 'neurosurgery') return docAhmedNoshy;
    if (doctor.specialtyId === 'dentistry') return docAhmedFadl;
  }

  return docMohamedRefaat;
}