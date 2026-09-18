import { Doctor, Specialty, Department } from '../types';
import {
  docAbdallah,
  docAhmedNoshy,
  docEhab,
  docMohamedRefaat,
  docRaafat,
  docMohamedRagae,
  docAhmedFadl,
} from '../lib/doctorImages';

export const INITIAL_SPECIALTIES: Specialty[] = [
  {
    id: 'plastic-surgery',
    icon: 'Sparkles',
    name: {
      ar: 'جراحة التجميل والترميم',
      en: 'Plastic & Reconstructive Surgery'
    },
    description: {
      ar: 'إصلاح تشوهات الحوادث والحروق، إعادة بناء الثدي، وعمليات التجميل وشد القوام وشفط الدهون.',
      en: 'Accident and burn deformity correction, breast reconstruction, cosmetic lifts, and abdominoplasty.'
    }
  },
  {
    id: 'radiation-oncology',
    icon: 'Radio',
    name: {
      ar: 'علاج الأورام والإشعاع',
      en: 'Radiation Oncology & Nuclear Medicine'
    },
    description: {
      ar: 'أحدث تقنيات العلاج الإشعاعي المتقدم IMRT، الجراحة الإشعاعية التجسيمية، وأورام الأطفال والبالغين.',
      en: 'Advanced IMRT radiotherapy, stereotactic radiosurgery, pediatric and adult oncology care.'
    }
  },
  {
    id: 'therapy-psychiatry',
    icon: 'Brain',
    name: {
      ar: 'الصحة النفسية والعصبية',
      en: 'Therapy & Mental Health Clinic'
    },
    description: {
      ar: 'عيادة متكاملة لعلاج التوحد، تعديل السلوك، صعوبات التعلم، فرط الحركة ADHD، والاكتئاب والقلق.',
      en: 'Comprehensive clinic for Autism Spectrum, behavior modification, ADHD, learning disorders, anxiety & depression.'
    }
  },
  {
    id: 'pain-management',
    icon: 'Activity',
    name: {
      ar: 'علاج الألم والعمود الفقري',
      en: 'Pain Management & Interventions'
    },
    description: {
      ar: 'تشخيص وعلاج الآلام الحادة والمزمنة وآلام الأورام والمفاصل بدون جراحة بتقنيات التدخل الحديثة FIPP.',
      en: 'Interventional non-surgical care for acute & chronic pain, cancer pain, joint and spine conditions.'
    }
  },
  {
    id: 'neurosurgery',
    icon: 'Brain',
    name: {
      ar: 'جراحة المخ والأعصاب والعمود الفقري',
      en: 'Neurosurgery & Spine Surgery'
    },
    description: {
      ar: 'جراحات العمود الفقري بالميكروسكوب والمنظار، استئصال الأورام، وتثبيت الفقرات التدخلي للكبار والأطفال.',
      en: 'Microscopic & endoscopic spine surgery, brain and spinal cord tumor resection, and spine fixation.'
    }
  },
  {
    id: 'dentistry',
    icon: 'Smile',
    name: {
      ar: 'طب وجراحة الأسنان',
      en: 'Dentistry & Oral Surgery'
    },
    description: {
      ar: 'رعاية أسنان متكاملة تشمل أسنان الأطفال، التجميل، الجذور، اللثة، التقويم، والتركيبات وزراعة الأسنان.',
      en: 'Full dental practice including pediatric care, cosmetic dentistry, endodontics, orthodontics, and implants.'
    }
  },
  {
    id: 'iq-kids',
    icon: 'Baby',
    name: {
      ar: 'IQ Kids - مركز تعديل السلوك والتخاطب وتنمية المهارات',
      en: 'IQ Kids - Speech, Behavior & Skill Center'
    },
    description: {
      ar: 'مركز تعديل السلوك والتخاطب وتنمية المهارات والذكاء للأطفال في المستشفى العربية.',
      en: 'Specialized Center for Behavior Modification, Speech Therapy & Child Skill Development.'
    }
  }
];

export const INITIAL_DOCTORS: Doctor[] = [
  // 1. Plastic Surgery - Dr. Mohammed Ahmed Rifaat
  {
    id: 'doc-refaat',
    specialtyId: 'plastic-surgery',
    name: {
      ar: 'د. محمد أحمد رفعت',
      en: 'Dr. Mohammed Ahmed Rifaat'
    },
    title: {
      ar: 'استشاري الجراحة التجميلية والترميمية وأستاذ الجراحة – زميل كلية الجراحين الملكية البريطانية (FRCS Glasg.) والبورد الأوروبي (FEBOPRAS)',
      en: 'Consultant Plastic & Reconstructive Surgeon | Professor of Surgery at NCI, Cairo University | FRCS (Glasg.), FEBOPRAS'
    },
    image: docMohamedRefaat,
    experienceYears: 35,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'السبت والأربعاء: 5:00 م - 9:00 م',
      en: 'Sat & Wed: 5:00 PM - 9:00 PM'
    },
    education: {
      ar: 'استشاري الجراحة التجميلية والترميمية وأستاذ الجراحة، وحدة الرأس والرقبة، قسم جراحة الأورام بالمعهد القومي للأورام – جامعة القاهرة، دكتوراه جراحة الأورام 1994، زميل كلية الجراحين الملكية ببريطانيا (FRCS Glasg.)، والبورد الأوروبي للجراحة التجميلية والترميمية (FEBOPRAS).',
      en: 'Professor of Surgery, Head & Neck Unit, Surgical Oncology Dept, National Cancer Institute, Cairo University (1989). FRCS (Glasg.) Fellowship in Surgery, UK; European Board of Plastic, Reconstructive and Aesthetic Surgery (FEBOPRAS).'
    },
    bio: {
      ar: 'د. محمد أحمد رفعت (M.D., FRCS (Glasg.), FEBOPRAS) هو استشاري الجراحة التجميلية والترميمية وأستاذ الجراحة بوحدة الرأس والرقبة بقسم جراحة الأورام في المعهد القومي للأورام، جامعة القاهرة. يمتلك مسيرة أكاديمية وإكلينيكية دولية بارزة تشمل التدريب والبحث بالولايات المتحدة الأمريكية والمملكة المتحدة، وخبرة تتجاوز 10 سنوات في الجراحة التجميلية الخاصة والعمل كاستشاري بمستشفيات وزارة الصحة بالسعودية والكويت.',
      en: 'Dr. Mohammed A. Rifaat (M.D., FRCS (Glasg.), FEBOPRAS) is a Consultant Plastic & Reconstructive Surgeon and Professor of Surgery, Head and Neck Unit, Department of Surgical Oncology at the National Cancer Institute, Cairo University, Egypt. Renowned internationally with training in the USA & UK and extensive consultant practice in Egypt, Saudi Arabia, and Kuwait.'
    },
    achievements: {
      ar: [
        'زميل كلية الجراحين الملكية البريطانية (FRCS Glasg.) بالجراحة التجميلية بالمملكة المتحدة',
        'الحصول على شهادة البورد الأوروبي للجراحة التجميلية والترميمية والتجميلية (FEBOPRAS)',
        'أستاذ الجراحة بوحدة الرأس والرقبة وقسم جراحة الأورام بالمعهد القومي للأورام – جامعة القاهرة',
        'تدريب سريري وبحثي متقدم لمدة 6 أشهر بأكبر المراكز المتخصصة بالولايات المتحدة الأمريكية في جراحة الرأس والرقبة والوجه والفكين',
        'تدريب إكلينيكي لمدة 3 سنوات في كبرى وحدات الجراحة التجميلية بالمملكة المتحدة',
        'استشاري لأكثر من 3 سنوات بمستشفيات وزارة الصحة بالمملكة العربية السعودية واختصاصي لمدة سنتين بمستشفى خاص بالكويت',
        'عضو الجمعية المصرية لجراحي التجميل والترميم (ESPRS)',
        'عضو الجمعية المصرية لأورام الرأس والرقبة (ESHNO)',
        'عضو الجمعية الدولية لجراحة التجميل (ISAPS - The International Society of Aesthetic Plastic Surgery)'
      ],
      en: [
        'Fellow of the Royal College of Physicians and Surgeons of Glasgow (FRCS Glasg.), UK',
        'Fellow of the European Board of Plastic, Reconstructive and Aesthetic Surgery (FEBOPRAS)',
        'Professor of Surgery, Head and Neck Unit, Surgical Oncology Dept, National Cancer Institute - Cairo University',
        'Completed 6-month clinical & research fellowship in head, neck & craniofacial plastic surgery in the United States',
        'Completed 3 years of clinical plastic surgery training in major NHS units in the United Kingdom',
        'Over 3 years as Consultant in Ministry of Health hospitals (KSA) & 2 years in private hospital (Kuwait)',
        'Active Member of the Egyptian Society of Plastic & Reconstructive Surgeons (ESPRS)',
        'Member of the Egyptian Society of Head and Neck Oncology (ESHNO)',
        'Member of the International Society of Aesthetic Plastic Surgery (ISAPS)'
      ]
    },
    specializations: {
      ar: [
        'الجراحة التكميلية والتجميلية للوجه والرأس والرقبة',
        'تجميل الأنف وإعادة بناء الرأس والرقبة (Rhinoplasty & Reconstruction)',
        'الجراحة التكميلية وإعادة بناء الثدي بعد استئصال الأورام',
        'جراحة علاج التثدي عند الرجال (Gynecomastia Surgery)',
        'إصلاح تشوهات الحروق والحوادث المعقدة والتشوهات الخلقية',
        'جراحات شد وتنسيق القوام وشفط الدهون وشد البطن (Abdominoplasty)',
        'حقن البوتوكس والفيلر وشد الوجه والرقبة'
      ],
      en: [
        'Facial Plastic Surgery & Facial Aesthetics',
        'Rhinoplasty & Head and Neck Reconstruction',
        'Post-Mastectomy Breast Reconstruction',
        'Surgery for Male Gynecomastia',
        'Burn, Trauma & Congenital Deformity Reconstruction',
        'Body Contouring, Liposuction & Abdominoplasty (Tummy Tuck)',
        'Botox, Fillers, Face & Neck Rejuvenation'
      ]
    },
    cvDocument: {
      title: {
        ar: 'السيرة الذاتية الرسمية والشهادات والاعتمادات الدولية – د. محمد أحمد رفعت',
        en: 'Official Curriculum Vitae & International Credentials – Dr. Mohammed A. Rifaat'
      },
      degrees: {
        ar: [
          'بكالوريوس الطب والجراحة – كلية الطب، جامعة القاهرة (1989)',
          'طبيب مقيم جراحة عامة وجراحة الأورام (1994)',
          'دكتوراه في جراحة الأورام والترميم – المعهد القومي للأورام، جامعة القاهرة',
          'زمالة كلية الجراحين الملكية البريطانية (FRCS Glasg.) – المملكة المتحدة',
          'البورد الأوروبي للجراحة التجميلية والترميمية والتجميلية (FEBOPRAS)'
        ],
        en: [
          'M.B.B.Ch. Faculty of Medicine, Cairo University, Egypt (1989)',
          'Residency in General Surgery and Surgical Oncology (1994)',
          'M.D. Doctorate Degree in Cancer Surgery & Reconstruction, NCI, Cairo University',
          'Fellowship of the Royal College of Physicians and Surgeons of Glasgow (FRCS Glasg.), UK',
          'Fellow of the European Board of Plastic, Reconstructive and Aesthetic Surgery (FEBOPRAS)'
        ]
      },
      positions: {
        ar: [
          'استشاري الجراحة التجميلية والترميمية',
          'أستاذ الجراحة، وحدة الرأس والرقبة، قسم جراحة الأورام بالمعهد القومي للأورام – جامعة القاهرة',
          'استشاري جراحة التجميل والترميم بمستشفيات وزارة الصحة بالمملكة العربية السعودية (3+ سنوات)',
          'اختصاصي الجراحة التجميلية بمستشفى خاص بدولة الكويت (سنتان)',
          'أكثر من 10 سنوات في الممارسة الخاصة للجراحة التجميلية'
        ],
        en: [
          'Consultant Plastic & Reconstructive Surgeon',
          'Professor of Surgery, Head and Neck Unit, Dept of Surgical Oncology, National Cancer Institute - Cairo University',
          'Consultant Plastic Surgeon, Ministry of Health Hospitals, Kingdom of Saudi Arabia (3+ Years)',
          'Specialist Plastic Surgeon, Private Hospital, Kuwait (2 Years)',
          'Over 10 years in Aesthetic Surgery Private Practice'
        ]
      },
      fullBiography: {
        ar: `د. محمد أحمد رفعت , زميل كلية الجراحين الملكية البريطانية والبورد الأوروبي للجراحة التجميلية والترميمية والتجميلية.

هو استشاري الجراحة التجميلية والترميمية وأستاذ الجراحة ، وحدة الرأس والرقبة ، قسم جراحة الأورام في المعهد القومي للأورام، جامعة القاهرة ، مصر.

تخرج الدكتور رفعت من كلية الطب ، جامعة القاهرة ، مصر عام 1989. ثم أكمل تدريبه كطبيب مقيم في الجراحة العامة وجراحة الأورام في عام 1994. كان مدفوعاً بشغفه بالجراحة التجميلية لزيارة مركز كبير في الولايات المتحدة لمدة ستة أشهر حيث شارك في أنشطة بحثية مستمرة في ذلك الوقت في مجال جراحة الرأس والرقبة والجراحة التجميلية إلى جانب مشاركته في الأنشطة الإكلينيكية.

ثم قرر مواصلة التدريب وسافر إلى المملكة المتحدة. أكمل التدريب الأساسي في الجراحة التجميلية لمدة عامين ثم عمل لمدة سنة إضافية في عدة وحدات أكبر في المملكة المتحدة. حصل على درجة الزمالة في الجراحة من بريطانيا (FRCS).

ثم عاد والتحق بالمعهد القومي للأورام مرة أخرى في القاهرة ، مصر حيث تم تعيينه في البداية كمدرس مساعد واستمر في عمله وأبحاثه في الجراحة التجميلية الترميمية المتعلقة بالسرطان ثم حصل على درجة الدكتوراه في جراحة السرطان وتم ترقيته. نشر العديد من الأبحاث العلمية في المجلات والدوريات الطبية العالمية في هذا المجال.

بعد سنوات من الممارسة ، حصل على درجة البورد الأوروبي للجراحة التجميلية والترميمية والتجميلية (FEBOPRAS). بالإضافة إلى اهتمامه بالجراحة التجميلية الترميمية ، واصل الدكتور رفعت ممارسة الجراحة التجميلية في ممارسته الخاصة، وله أكثر من 10 سنوات في ممارسة الجراحة التجميلية.

وعمل كاستشاري لأكثر من ثلاث سنوات في مستشفيات وزارة الصحة بالمملكة العربية السعودية ، وخلال العامين الأخيرين ، عمل حصرياً اختصاصي في الجراحة التجميلية في مستشفى خاص في الكويت.`,
        en: `Dr Mohammed A. Rifaat (M.D., FRCS (Glasg.), FEBOPRAS) is a consultant Plastic & Reconstructive surgeon and professor of surgery, Head and Neck unit, Department of surgical oncology at the National Cancer Institute, Cairo University, Egypt.

Dr. Rifaat graduated from the Faculty of Medicine, Cairo University, Egypt in 1989. He then completed his residency training in general surgery and surgical oncology in 1994. He was driven by his passion to plastic surgery to visit a large center in the United States for six months where he participated in ongoing research activities at that time in the field of head and neck and craniofacial plastic surgery in addition to his participation in clinical activities.

He then decided to pursue further clinical training and travelled to the UK. He completed basic training in plastic surgery for two years and then worked for an extra one year in several larger units in the UK. He obtained his fellowship degree in surgery (FRCS) in the UK.

He then joined the National Cancer Institute again in Cairo, Egypt where he was initially appointed as an assistant lecturer and continued his work and research in cancer-related reconstructive plastic surgery and then obtained the doctorate degree in Cancer surgery and got promoted. He published many scientific papers in peer-reviewed journals in this field.

After years of practice, he obtained the European Board of Plastic, Reconstructive and Aesthetic Surgery (FEBOPRAS). In addition to his interest in reconstructive plastic surgery, Dr. Rifaat continued practicing aesthetic surgery in his private practice. He has been now for more than 10 years in aesthetic surgery practice.

He has worked as a consultant for more than three years in the ministry of health hospitals in the Kingdom of Saudi Arabia and for the last two years, he was exclusively in aesthetic plastic surgery practice in a private hospital in Kuwait.`
      },
      areasOfInterest: {
        ar: [
          'الجراحة التكميلية والتجميلية للوجه والرأس والرقبة (Facial Plastic Surgery & Reconstruction)',
          'تجميل الأنف وإعادة بناء الرأس والرقبة (Rhinoplasty & Head & Neck Reconstruction)',
          'الجراحة التكميلية وإعادة بناء الثدي (Breast Reconstruction)',
          'جراحة علاج التثدي عند الرجال (Surgery for Gynecomastia)'
        ],
        en: [
          'Facial plastic surgery',
          'Rhinoplasty and head and neck reconstruction',
          'Breast reconstruction',
          'Surgery for gynecomastia'
        ]
      },
      memberships: {
        ar: [
          'عضو الجمعية المصرية لجراحي التجميل والترميم (ESPRS)',
          'عضو الجمعية المصرية لأورام الرأس والرقبة (ESHNO)',
          'عضو الجمعية الدولية لجراحة التجميل (ISAPS - The International Society of Aesthetic Plastic Surgery)',
          'زميل كلية الجراحين الملكية البريطانية بجلاسكو (FRCS Glasg.)',
          'زميل البورد الأوروبي للجراحة التجميلية والترميمية (FEBOPRAS)'
        ],
        en: [
          'Active member of the Egyptian Society of Plastic & Reconstructive Surgeons (ESPRS)',
          'Member of the Egyptian Society of Head and Neck Oncology (ESHNO)',
          'Member of the ISAPS (The International Society of Aesthetic Plastic Surgery)',
          'Fellow of the Royal College of Physicians and Surgeons of Glasgow (FRCS Glasg.)',
          'Fellow of the European Board of Plastic, Reconstructive and Aesthetic Surgery (FEBOPRAS)'
        ]
      }
    }
  },

  // 2. Radiation Oncology
  {
    id: 'doc-ehab',
    specialtyId: 'radiation-oncology',
    name: {
      ar: 'د. إيهاب خليل',
      en: 'Dr. Ehab Khalil'
    },
    title: {
      ar: 'أستاذ واستشاري علاج الأورام بالإشعاع ورئيس قسم الأورام والطب النووي بالمعهد القومي للأورام',
      en: 'Professor & Consultant of Radiation Oncology | Chair of Radiation Oncology & Nuclear Medicine at NCI'
    },
    image: docEhab,
    experienceYears: 27,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'الأحد والثلاثاء والخميس: 4:00 م - 8:00 م',
      en: 'Sun, Tue & Thu: 4:00 PM - 8:00 PM'
    },
    education: {
      ar: 'أستاذ علاج الأورام بالإشعاع والطب النووي بالمعهد القومي للأورام – جامعة القاهرة',
      en: 'Professor of Radiation Oncology & Nuclear Medicine at NCI - Cairo University'
    },
    bio: {
      ar: 'د. إيهاب خليل هو أستاذ علاج الأورام بالإشعاع، ويتمتع بخبرة طبية وأكاديمية وبحثية تمتد لأكثر من 27 عاماً في مجال الأورام والعلاج الإشعاعي. يشغل منصب رئيس قسم علاج الأورام بالإشعاع والطب النووي بالمعهد القومي للأورام – جامعة القاهرة.',
      en: 'Dr. Ehab Khalil is a Professor of Radiation Oncology and an experienced oncology specialist with more than 27 years of clinical, academic, and research experience. Chair of Radiation Oncology & Nuclear Medicine at NCI Cairo University.'
    },
    achievements: {
      ar: [
        'رئيس قسم علاج الأورام بالإشعاع والطب النووي بالمعهد القومي للأورام',
        'خبرة تزيد عن 27 عاماً في أحدث تقنيات العلاج الإشعاعي والأورام',
        'نشر العديد من الأبحاث العلمية في المجلات والدوريات الطبية العالمية'
      ],
      en: [
        'Chair of Radiation Oncology & Nuclear Medicine at NCI Cairo University',
        'Over 27 years of clinical & academic radiation oncology leadership',
        'Author of numerous published international studies in oncology & radiotherapy'
      ]
    },
    specializations: {
      ar: [
        'العلاج الإشعاعي المتقدم (IMRT)',
        'الجراحة الإشعاعية التجسيمية (Stereotactic Radiosurgery)',
        'علاج أورام الأطفال والليمفوما',
        'علاج أورام المثانة وأورام الرأس والرقبة',
        'رعاية مرضى الأورام والطب النووي'
      ],
      en: [
        'Intensity-Modulated Radiation Therapy (IMRT)',
        'Stereotactic Radiosurgery (SRS)',
        'Pediatric Oncology & Lymphoma Care',
        'Bladder Cancer & Head and Neck Oncology',
        'Nuclear Medicine & Radiotherapy Research'
      ]
    }
  },

  // 3. Therapy & Mental Health (Two Doctors)
  {
    id: 'doc-aldesoky',
    specialtyId: 'therapy-psychiatry',
    name: {
      ar: 'د. عبد الله الدسوقي',
      en: 'Dr. Abdullah Aldesoky'
    },
    title: {
      ar: 'أخصائي الصحة النفسية والعصبية للأطفال والكبار',
      en: 'Specialist of Psychiatry & Mental Health for Children & Adults'
    },
    image: docAbdallah,
    experienceYears: 12,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'السبت والإثنين والأربعاء: 3:00 ع - 7:00 م',
      en: 'Sat, Mon & Wed: 3:00 PM - 7:00 PM'
    },
    education: {
      ar: 'أخصائي الصحة النفسية والعصبية، عيادة العربية للصحة النفسية والعصبية',
      en: 'Specialist of Psychiatry & Mental Health, Arabia Mental Health Clinic'
    },
    bio: {
      ar: 'د. عبد الله الدسوقي هو أخصائي صحة نفسية وعصبية للأطفال والكبار، خبير في علاج اضطراب طيف التوحد وتعديل السلوك وتنمية المهارات وإعداد برامج فردية لمساعدة الأطفال، مع ضمان خصوصية تامة في بيئة آمنة.',
      en: 'Dr. Abdullah Aldesoky is a Psychiatry & Mental Health Specialist for children and adults, expert in Autism Spectrum Disorder, behavior modification, skill development, and individualized treatment programs.'
    },
    achievements: {
      ar: [
        'تصميم برامج فردية متخصصة لعلاج التوحد وتعديل السلوك',
        'تقييم دقيق وخطط علاجية مخصصة ومتابعة أسرية مستمرة',
        'إجراء كافة الاختبارات النفسية واللغوية واختبارات الذكاء المعتمدة'
      ],
      en: [
        'Specialized individualized autism & behavior modification programs',
        'Detailed diagnostic assessment & customized family support plans',
        'Comprehensive standardized IQ, language, and behavioral testing'
      ]
    },
    specializations: {
      ar: [
        'علاج اضطراب طيف التوحد (Autism Spectrum Disorder)',
        'تعديل السلوك وتنمية المهارات الفردية',
        'علاج صعوبات التعلم وتأخر النطق',
        'علاج فرط الحركة وتشتت الانتباه (ADHD)',
        'تحسين الانتباه والتركيز والذاكرة',
        'اختبارات الذكاء، التوحد، اللغات، والقلق والدعم النفسي'
      ],
      en: [
        'Autism Spectrum Disorder Therapy',
        'Behavior Modification & Skill Development',
        'Learning Difficulties & Speech Correction',
        'ADHD & Hyperactivity Management',
        'Attention, Memory & Focus Enhancement',
        'IQ, Autism, Speech, Anxiety & Depression Testing'
      ]
    }
  },
  {
    id: 'doc-ragae',
    specialtyId: 'therapy-psychiatry',
    name: {
      ar: 'د. محمد رجائي',
      en: 'Dr. Mohamed Ragae'
    },
    title: {
      ar: 'استشاري الطب النفسي والعلاج النفسي للأطفال والكبار',
      en: 'Consultant Psychiatrist & Mental Health Specialist'
    },
    image: docMohamedRagae,
    experienceYears: 18,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'الأحد والثلاثاء والخميس: 4:00 م - 8:00 م',
      en: 'Sun, Tue & Thu: 4:00 PM - 8:00 PM'
    },
    education: {
      ar: 'استشاري العلاج النفسي والاضطرابات العصبية والنفسية',
      en: 'Consultant Psychiatrist & Clinical Mental Health Specialist'
    },
    bio: {
      ar: 'د. محمد رجائي استشاري نفسي متخصص في تشخيص وعلاج الاضطرابات النفسية والسلوكية لدى الكبار والأطفال، وإجراء التقييم الدقيق ووضع الخطط العلاجية المتكاملة مع الحفاظ على الخصوصية التامة.',
      en: 'Dr. Mohamed Ragae is a Consultant Psychiatrist specializing in child and adult psychiatric evaluation, mood & anxiety disorders, and comprehensive treatment planning.'
    },
    achievements: {
      ar: [
        'خبرة طويلة في الاستشارات والعلاج النفسي السلوكي والمعرفي',
        'تقييم شامل واختبارات القلق، الاكتئاب، العند، والثقة بالنفس',
        'متابعة مستمرة وتأهيل أُسري متكامل في بيئة آمنة'
      ],
      en: [
        'Extensive background in Cognitive Behavioral Therapy (CBT)',
        'Comprehensive testing for Anxiety, Depression, & Self-Confidence',
        'Continuous family support in a confidential setting'
      ]
    },
    specializations: {
      ar: [
        'علاج الاكتئاب واضطرابات المزاج والقلق',
        'الاستشارات النفسية والسلوكية للأطفال والكبار',
        'اختبارات العند والمعارضة والتحدي',
        'اختبارات الثقة بالنفس والتقييم النفسي الشامل'
      ],
      en: [
        'Depression & Anxiety Disorders Therapy',
        'Adult & Child Psychiatric Consultation',
        'Opposition & Behavioral Challenge Testing',
        'Self-Confidence & Comprehensive Psychiatric Evaluation'
      ]
    }
  },

  // 4. Pain Management
  {
    id: 'doc-raafat',
    specialtyId: 'pain-management',
    name: {
      ar: 'أ.د. رأفت محفوظ رياض',
      en: 'Prof. Dr. Raafat Mahfouz Riad'
    },
    title: {
      ar: 'أستاذ علاج الألم بالقصر العيني والمعهد القومي للأورام والحاصل على زمالة FIPP العالمية',
      en: 'Professor of Pain Management | FIPP Fellow (World Institute of Pain)'
    },
    image: docRaafat,
    experienceYears: 25,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'السبت والإثنين والخميس: 5:00 م - 9:00 م',
      en: 'Sat, Mon & Thu: 5:00 PM - 9:00 PM'
    },
    education: {
      ar: 'أستاذ علاج الألم بجامعة القاهرة والمعهد القومي للأورام، حاصل على زمالة FIPP للتدخل العلاجي للألم من المعهد العالمي للألم',
      en: 'Professor of Pain Management at Cairo Univ & NCI, FIPP Fellow from World Institute of Pain'
    },
    bio: {
      ar: 'أ.د. رأفت محفوظ رياض هو أستاذ علاج الألم، ومتخصص في تشخيص وعلاج الآلام الحادة والمزمنة لدى البالغين والأطفال. أستاذ بجامعة القاهرة والمعهد القومي للأورام وحاصل على زمالة ممارسة التدخل العلاجي للألم (FIPP) من المعهد العالمي للألم.',
      en: 'Prof. Dr. Raafat Mahfouz Riad is a Professor of Pain Management with experience in diagnosing and treating acute and chronic pain conditions in adults and children. Affiliated with Cairo University, NCI, and holds FIPP fellowship from the World Institute of Pain.'
    },
    achievements: {
      ar: [
        'حاصل على زمالة FIPP العالمية للتدخل العلاجي للألم من المعهد العالمي للألم',
        'أستاذ علاج الألم بجامعة القاهرة والمعهد القومي للأورام',
        'رائد تقنيات الحقن والتردد الحراري لعلاج آلام العمود الفقري والمفاصل بدون جراحة'
      ],
      en: [
        'Fellow of Interventional Pain Practice (FIPP) - World Institute of Pain',
        'Professor of Pain Management at Cairo University & National Cancer Institute',
        'Pioneer in non-surgical radiofrequency & interventional pain therapy'
      ]
    },
    specializations: {
      ar: [
        'تشخيص وعلاج الآلام الحادة والمزمنة لدى البالغين والأطفال',
        'علاج آلام الأورام السرطانية',
        'التدخلات العلاجية الحديثة للألم بدون جراحة (حقن وتردد حراري)',
        'علاج آلام المفاصل والعمود الفقري والانزلاق الغضروفي',
        'متابعة حالات الألم التي تحتاج خطط علاج طويلة المدى'
      ],
      en: [
        'Acute and chronic pain management (Adults & Children)',
        'Cancer-related pain management',
        'Interventional pain therapy (Injections & Radiofrequency)',
        'Joint and spine pain management',
        'Long-term pain treatment planning'
      ]
    }
  },

  // 5. Neurosurgery & Spine Surgery
  {
    id: 'doc-noshy',
    specialtyId: 'neurosurgery',
    name: {
      ar: 'د. أحمد نوشي',
      en: 'Dr. Ahmed Noshy'
    },
    title: {
      ar: 'استشاري جراحة المخ والأعصاب والعمود الفقري - دكتوراه جامعة عين شمس وعضو الجمعية الأوروبية EANS',
      en: 'Consultant of Neurosurgery & Spine Surgery | M.D. Ain Shams Univ, Member of EANS'
    },
    image: docAhmedNoshy,
    experienceYears: 18,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'الأحد والثلاثاء والأربعاء: 6:00 م - 10:00 م',
      en: 'Sun, Tue & Wed: 6:00 PM - 10:00 PM'
    },
    education: {
      ar: 'دكتوراه جراحة المخ والأعصاب والعمود الفقري من كلية الطب جامعة عين شمس، عضو الجمعية الأوروبية لجراحة المخ والأعصاب',
      en: 'M.D. in Neurosurgery & Spine Surgery from Ain Shams University, Member of EANS'
    },
    bio: {
      ar: 'د. أحمد نوشي هو استشاري جراحة المخ والأعصاب والعمود الفقري، متخصص في جراحات المخ والأعصاب للكبار والأطفال، وجراحات العمود الفقري للبالغين والأطفال، واستئصال أورام المخ والفقرات، وعلاج مشاكل الأعصاب الطرفية.',
      en: 'Dr. Ahmed Noshy is a Consultant of Neurosurgery and Spine Surgery. Specialized in adult & pediatric neurosurgery, adult & pediatric spine surgery, and brain & spinal tumor resection. M.D. from Ain Shams University, Member of EANS.'
    },
    achievements: {
      ar: [
        'دكتوراه جراحة المخ والأعصاب من كلية الطب - جامعة عين شمس',
        'عضو الجمعية الأوروبية لجراحة المخ والأعصاب (EANS)',
        'عضو الجمعية المصرية لجراحة المخ والأعصاب والعمود الفقري'
      ],
      en: [
        'M.D. in Neurosurgery from Faculty of Medicine, Ain Shams University',
        'Member of the European Association of Neurosurgical Societies (EANS)',
        'Member of the Egyptian Society of Neurosurgery and Spine Surgery'
      ]
    },
    specializations: {
      ar: [
        'جراحات المخ والأعصاب للكبار والأطفال',
        'جراحات العمود الفقري للكبار والأطفال',
        'جراحات العمود الفقري محدودة التدخل لعلاج الانزلاق الغضروفي وضيق القناة القطنية',
        'تثبيت الفقرات محدودة التدخل للفقرات العنقية والظهرية والقطنية',
        'جراحات تحرير الأعصاب الطرفية',
        'استئصال أورام المخ والحبل الشوكي'
      ],
      en: [
        'Adult & Pediatric Neurosurgery',
        'Adult & Pediatric Spine Surgery',
        'Minimally invasive spine surgery for disc prolapse & lumbar canal stenosis',
        'Minimally invasive spine fixation for cervical, dorsal & lumbar spine',
        'Peripheral nerve release surgeries',
        'Brain and spinal cord tumor surgery'
      ]
    }
  },

  // 6. Dentistry - Dr. Ahmed Fadl
  {
    id: 'doc-fadl',
    specialtyId: 'dentistry',
    name: {
      ar: 'د. أحمد فضل',
      en: 'Dr. Ahmed Fadl'
    },
    title: {
      ar: 'استشاري طب وجراحة الفم والأسنان وتجميل الأسنان وزراعة الأسنان',
      en: 'Consultant Dental Surgeon, Cosmetic Dentistry & Implantology'
    },
    image: docAhmedFadl,
    experienceYears: 18,
    available: true,
    whatsapp: '201118573813',
    timing: {
      ar: 'الأحد والثلاثاء والخميس: 4:00 م - 9:00 م',
      en: 'Sun, Tue & Thu: 4:00 PM - 9:00 PM'
    },
    education: {
      ar: 'ماجستير واستشاري طب وجراحة الفم والأسنان، عضو الجمعية المصرية لزراعة وتجميل الأسنان.',
      en: 'Master’s Degree and Consultant in Oral & Dental Surgery, Member of the Egyptian Society of Oral Implantology.'
    },
    bio: {
      ar: 'د. أحمد فضل استشاري متميز في زراعة وتجميل الأسنان وهوليوود سمايل وعلاج الجذور وأحدث تقنيات تجميل الأسنان بالمستشفى.',
      en: 'Dr. Ahmed Fadl is a Consultant Dental Surgeon specializing in cosmetic smile design, dental implants, and microscopic endodontics.'
    },
    achievements: {
      ar: [
        'استشاري جراحة وزراعة وتجميل الأسنان',
        'عضو الجمعية المصرية لزراعة وتجميل الأسنان',
        'خبرة أكثر من 18 عاماً في التركيبات الثابتة والمتحركة وتجميل الابتسامة',
        'تجهيز عيادة أسنان متكاملة بأحدث وحدة علاجية بالمستشفى'
      ],
      en: [
        'Consultant of Dental Surgery, Implantology & Aesthetics',
        'Member of the Egyptian Society of Oral Implantology',
        'Over 18 years of clinical dental surgery experience',
        'Equipped with state-of-the-art dental unit and diagnostic tools'
      ]
    },
    specializations: {
      ar: [
        'زراعة وتجميل الأسنان وهوليوود سمايل',
        'علاج الجذور والأعصاب بأحدث الأجهزة',
        'التركيبات الثابتة والزركون واللومينير',
        'طب أسنان الأطفال وجراحة الفم واللثة'
      ],
      en: [
        'Dental Implants & Hollywood Smile Design',
        'Microscopic Endodontics & Root Canal Treatment',
        'Zirconia Crowns, Veneers & Fixed Prosthodontics',
        'Pediatric Dentistry & Oral Surgery'
      ]
    }
  }
];

export const HOSPITAL_DEPARTMENTS: Department[] = [
  {
    id: 'dep-1',
    specialtyId: 'plastic-surgery',
    title: {
      ar: 'قسم جراحة التجميل والترميم',
      en: 'Department of Plastic & Reconstructive Surgery'
    },
    desc: {
      ar: 'جراحات ترميمية متقدمة لإصلاح تشوهات الحوادث والحروق، جراحات الثدي التخصصة، والتجميل القوامي.',
      en: 'Advanced reconstructive surgery for burn and trauma deformities, specialized breast procedures, and cosmetic reshaping.'
    },
    icon: 'Sparkles',
    features: {
      ar: ['إصلاح تشوهات الحروق والحوادث', 'إعادة بناء الثدي بعد استئصال الأورام', 'شفط الدهون وشد القوام'],
      en: ['Burn & Trauma Reconstruction', 'Post-Mastectomy Breast Reconstruction', 'Body Contouring & Liposuction']
    }
  },
  {
    id: 'dep-2',
    specialtyId: 'radiation-oncology',
    title: {
      ar: 'قسم علاج الأورام والإشعاع والطب النووي',
      en: 'Department of Radiation Oncology & Nuclear Medicine'
    },
    desc: {
      ar: 'أحدث أجهزة العلاج الإشعاعي الموجه ودقة استهداف الأورام بالجرعات الآمنة تحت إشراف نخبة أساتذة الأورام.',
      en: 'State-of-the-art targeted radiotherapy and precision tumor management directed by leading professors.'
    },
    icon: 'Radio',
    features: {
      ar: ['العلاج الإشعاعي المتقدم IMRT', 'الجراحة الإشعاعية التجسيمية SRS', 'أورام الأطفال والبالغين والطب النووي'],
      en: ['Advanced IMRT Radiotherapy', 'Stereotactic Radiosurgery SRS', 'Pediatric & Adult Oncology']
    }
  },
  {
    id: 'dep-3',
    specialtyId: 'therapy-psychiatry',
    title: {
      ar: 'قسم الصحة النفسية وتعديل السلوك',
      en: 'Department of Therapy & Mental Health'
    },
    desc: {
      ar: 'عيادة تخصصية متكاملة للتوحد، تعديل السلوك، وتنمية المهارات واختبارات الذكاء مع الحفاظ على الخصوصية التامة.',
      en: 'Integrated clinic for Autism, behavioral modification, child skill development, and psychiatric care.'
    },
    icon: 'Brain',
    features: {
      ar: ['علاج اضطراب طيف التوحد', 'تعديل السلوك وتنمية المهارات', 'اختبارات الذكاء، اللغات، وفرط الحركة ADHD'],
      en: ['Autism Spectrum Therapy', 'Behavior Modification Programs', 'Standardized IQ, ADHD & Speech Tests']
    }
  },
  {
    id: 'dep-4',
    specialtyId: 'pain-management',
    title: {
      ar: 'مركز علاج الألم والعمود الفقري',
      en: 'Pain Management & Intervention Center'
    },
    desc: {
      ar: 'تقنيات علاج الألم بدون جراحة باستخدام التردد الحراري والحقن الموجه لآلام المفاصل والعمود الفقري والأورام.',
      en: 'Non-surgical pain relief using radiofrequency and targeted injections for joints, spine, and cancer pain.'
    },
    icon: 'Activity',
    features: {
      ar: ['حقن وتردد حراري بدون جراحة FIPP', 'علاج آلام الأورام والعمود الفقري', 'علاج آلام المفاصل المزمنة'],
      en: ['FIPP Non-Surgical Interventions', 'Spine & Cancer Pain Care', 'Chronic Joint Pain Management']
    }
  },
  {
    id: 'dep-5',
    specialtyId: 'neurosurgery',
    title: {
      ar: 'مركز جراحة المخ والأعصاب والعمود الفقري',
      en: 'Neurosurgery & Spine Surgery Center'
    },
    desc: {
      ar: 'ميكروسكوبات جراحية عالية الدقة لجراحات الانزلاق الغضروفي، استئصال الأورام، وتثبيت الفقرات التدخلي.',
      en: 'High-precision surgical microscopes for disc surgery, tumor resection, and minimally invasive spine fixation.'
    },
    icon: 'Brain',
    features: {
      ar: ['جراحات الميكروسكوب والمنظار للفقرات', 'استئصال أورام المخ والحبل الشوكي', 'جراحات الأعصاب للكبار والأطفال'],
      en: ['Microscopic Spine Surgeries', 'Brain & Spinal Cord Tumor Removal', 'Adult & Pediatric Neurosurgery']
    }
  },
  {
    id: 'dep-6',
    specialtyId: 'dentistry',
    title: {
      ar: 'قسم طب وجراحة الأسنان المتكامل',
      en: 'Department of Comprehensive Dentistry'
    },
    desc: {
      ar: 'رعاية أسنان شاملة بدون ألم تشمل أسنان الأطفال، التجميل، الجذور، اللثة، التقويم، والتركيبات وزراعة الأسنان.',
      en: 'Comprehensive pain-free dental care including pediatric, cosmetic, endodontic, orthodontic, and implant procedures.'
    },
    icon: 'Smile',
    features: {
      ar: ['أسنان الأطفال والتجميل والجذور', 'جراحة الفم والفكين وتقويم الأسنان', 'زراعة الأسنان والتركيبات الثابتة'],
      en: ['Pediatric & Cosmetic Dentistry', 'Oral & Maxillofacial Surgery', 'Dental Implants & Prosthodontics']
    }
  },
  {
    id: 'dep-7',
    specialtyId: 'iq-kids',
    title: {
      ar: 'مركز IQ Kids - تعديل السلوك والتخاطب وتنمية المهارات',
      en: 'IQ Kids Center - Speech, Behavior & Skill Development'
    },
    desc: {
      ar: 'بيئة آمنة ومميزة تساعد الأطفال على تطوير قدراتهم ومهاراتهم من خلال برامج متخصصة في التخاطب وتعديل السلوك وتنمية الذكاء.',
      en: 'A safe and distinctive environment helping children develop their abilities through specialized speech therapy and behavioral programs.'
    },
    icon: 'Baby',
    features: {
      ar: ['جلسات تخاطب وتطوير النطق والتواصل', 'تعديل السلوك وتنمية المهارات الحركية والاجتماعية', 'برامج فردية واستقلالية الطفل'],
      en: ['Speech Therapy & Language Skills', 'Behavior Modification & Social Skills', 'Individualized Developmental Programs']
    }
  }
];

export const TRANSLATIONS = {
  ar: {
    hospitalTitle: 'Arabia Surgicare Hospital | المستشفى العربية للجراحة',
    hospitalName: 'المستشفى العربية للجراحة',
    topAddress: '📍 المهندسين، العجوزة، الجيزة، مصر',
    topHotline: '🟢 واتساب الاستقبال: 01118573813',
    adminBtn: '🔑 لوحة التحكم',
    navAbout: 'عن المستشفى',
    navGallery: 'ألبوم الصور',
    navSpecializations: 'الأقسام والمراكز',
    navDoctors: 'الأطباء والمراكز',
    navContact: 'اتصل بنا',
    navBookBtn: 'اختر طبيبك واحجز الآن',
    heroBadge: '| التجهيزات الجراحية الشاملة والعيادات التخصصية الفائقة',
    heroTitle: 'رعاية طبية وجراحية متكاملة',
    heroTitleHighlight: 'تقوم على الثقة والخبرة المستمرة',
    heroDesc: 'صرح طبي جراحي متكامل يقدم رعاية صحية تخصصية فائقة تحت إشراف كبار أساتذة الجامعات والاستشاريين الحاصلين على الزمالات العالمية.',
    historyBadge: 'عراقة طبية متميزة',
    historySectionTitle: 'Arabia Surgicare Hospital وتجهيزاتها الفائقة',
    histText: 'تأسست المستشفى لتقدم رعاية طبية وجراحية متخصصة تقوم على الثقة، الخبرة، والاهتمام البالغ بصحة وسلامة المرضى في منطقة المهندسين والجيزة.',
    aboutExtraDesc: 'نحن نسعى دوماً لتبني أعلى المعايير القياسية العالمية للخدمات الطبية والجراحية. المستشفى مجهزة بأفضل التقنيات التشخيصية وغرف العمليات الميكروسكوبية ذات التعقيم الفائق بنظام تدفق الهواء اللامركزي.',
    galleryTitle: 'جولة مصورة داخل أروقة المشفى',
    galleryDesc: 'نستعرض معكم أحدث التجهيزات والعيادات والأجنحة الفندقية بالمستشفى العربية للجراحة',
    specBadge: 'أقسامنا الطبية ومراكزنا التخصصية',
    specTitle: 'تخصصات ومراكز المستشفى العربية',
    specDesc: 'نقدم خدمات تشخيصية وعلاجية فائقة الدقة عبر أقسامنا الطبية ومراكزنا المتخصصة التي يقود كلاً منها نخبة من كبار الأطباء والاستشاريين.',
    docSecBadge: 'نخبة كبار الأطباء والاستشاريين والمراكز التخصصية',
    docSecTitle: 'دليل التخصصات والأطباء والمراكز',
    docSecDesc: 'اختر التخصص أو المركز من الشريط الجانبي للاطلاع على التفاصيل والسير الذاتية ومواعيد الحجز والتواصل.',
    sidebarTitle: 'التخصصات والمراكز التخصصية',
    doctorCount: 'طبيب',
    doctorsCountSuffix: 'أطباء متوفرون',
    bookWaBtn: 'احجز موعد عبر الواتساب',
    experienceYears: 'سنوات خبرة',
    availableNow: 'متاح للكلينك والحجز',
    busyNow: 'غير متاح حالياً',
    achievementsLabel: 'أبرز الإنجازات والاعتمادات:',
    specializationsLabel: 'مجالات التخصص الدقيق:',
    timingsLabel: 'مواعيد العيادة:',
    educationLabel: 'المؤهلات العلمية:',
    contactBadge: 'متاحون لخدمتكم 24 ساعة',
    contactTitle: 'اتصل بنا أو أرسل استفسارك',
    mapLocationTag: '📍 العنوان الجغرافي:',
    contactCardHotline: '📞 الخط الساخن المباشر والاستقبال:',
    formName: 'الاسم الكامل',
    formPhone: 'رقم الهاتف',
    formMsg: 'تفاصيل رسالتك أو استفسارك الطبي...',
    formSubmit: 'إرسال الاستفسار الآن',
    contactSuccess: 'تم إرسال استفسارك بنجاح! سيتواصل معك أحد أطبائنا الاستشاريين قريباً.',
    mapTitle: '📍 الخريطة والموقع الجغرافي الدقيق للمستشفى',
    mapInfo: 'تقع المستشفى بموقع استراتيجي لتسهيل وصول المرضى.',
    footerDesc: 'نقدم رعاية جراحية متخصصة فائقة تقوم على أسس الثقة، والخبرة الطبية الشاملة لخدمة الوطن العربي بكافة الإمكانيات.',
    waModalTitle: 'حجز موعد عيادة عبر الواتساب',
    bookingFormPatientName: 'اسم المريض بالكامل',
    bookingFormPatientPhone: 'رقم هاتف المريض',
    bookingFormDate: 'التاريخ أو اليوم المفضل',
    waSubmitBtn: 'الانتقال للواتساب وتأكيد الحجز',
    adminTitle: 'لوحة التحكم وإدارة الأطباء والتخصصات',
    adminLoginRequired: 'تسجيل الدخول للمدير والموظفين المصرح لهم',
    adminPasswordLabel: 'رمز المرور السري للمدير',
    adminLoginBtn: 'دخول لوحة التحكم',
    adminLogout: 'تسجيل الخروج',
    adminSaveBtn: 'حفظ وتحديث بيانات الطبيب فوراً على الموقع مباشرة',
    adminAddDoctor: '➕ إضافة طبيب جديد',
    adminDeleteDoctor: '🗑️ حذف الطبيب',
    adminDoctorSelectLabel: 'اختر الطبيب للتعديل أو أضف طبيباً جديداً',
    adminSuccessMsg: 'تم حفظ التغييرات وتحديث بيانات الطبيب والتخصص بنجاح!',
    noDoctorsNotice: 'يرجى التواصل مع إدارة الاستقبال للاستعلام عن مواعيد وتوافر الأطباء.',
    noDoctorsDentistNoticeTitle: 'قسم طب وجراحة وتجميل الأسنان',
    noDoctorsDentistNoticeDesc: 'يرجى الاتصال بالمستشفى لمعرفة ما إذا كان هناك طبيب متاح أم لا. يمكنك الاتصال المباشر بالرقم أو مراسلتنا عبر الواتساب للاستعلام الفوري.',
    contactReceptionForUpcoming: 'اتصل بالمستشفى أو راسلنا عبر الواتساب لمعرفة توافر الطبيب والمواعيد',
    callHospitalBtn: '📞 الاتصال المباشر بالمستشفى: 01118573813',
    dentistTabAvailabilityPrompt: '📞 اتصل بالمستشفى لمعرفة توافر الطبيب',
    viewOfficialCvBtn: '📄 السيرة الذاتية الرسمية والشهادات (PDF)',
    cvModalTitle: 'السيرة الذاتية الرسمية والاعتمادات الدولية',
    closeBtn: 'إغلاق',
    printCvBtn: 'طباعة / حفظ المستند (Print / PDF)',
    page1Tab: 'السيرة الذاتية باللغة الإنجليزية (English)',
    page2Tab: 'السيرة الذاتية باللغة العربية (Arabic)',
    liveSyncBadge: 'مزامنة حية ومباشرة لجميع الزوار'
  },
  en: {
    hospitalTitle: 'Arabia Surgicare Hospital',
    hospitalName: 'Arabia Surgicare Hospital',
    topAddress: '📍 Mohandessin, Agouza, Giza, Egypt',
    topHotline: '🟢 Reception WhatsApp: 01118573813',
    adminBtn: '🔑 Admin Panel',
    navAbout: 'About Hospital',
    navGallery: 'Photo Gallery',
    navSpecializations: 'Medical Specialties',
    navDoctors: 'Doctors & Consultants',
    navContact: 'Contact Us',
    navBookBtn: 'Choose Doctor & Book Now',
    heroBadge: '| Advanced Surgical & Specialized Medical Care',
    heroTitle: 'Comprehensive Surgical Care',
    heroTitleHighlight: 'Built on Trust & Deep Expertise',
    heroDesc: 'A premier surgical center providing world-class medical care under the supervision of senior professors and international fellows.',
    historyBadge: 'Medical Excellence',
    historySectionTitle: 'Arabia Surgicare Hospital Facilities',
    histText: 'Established to deliver dedicated medical and surgical care rooted in safety, quality, and patient-centered excellence in Giza and Cairo.',
    aboutExtraDesc: 'We strictly adopt top international healthcare standards. Equipped with German laparoscopic suites, ultra-clean laminar airflow operating rooms, and 24/7 emergency response.',
    galleryTitle: 'Virtual Tour Inside Our Hospital',
    galleryDesc: 'Explore our state-of-the-art clinics, surgical suites, and patient care suites.',
    specBadge: 'Specialized Departments & Centers',
    specTitle: 'Arabia Surgicare Specialties & Centers',
    specDesc: 'Delivering precision diagnostics and surgical interventions across our core departments and specialized centers led by top consultants.',
    docSecBadge: 'Senior Consultants & Specialized Centers',
    docSecTitle: 'Specialties, Doctors & Centers Directory',
    docSecDesc: 'Select a department or center from the sidebar tabs to view all details, consultant profiles, and direct contact options.',
    sidebarTitle: 'Specialties & Centers',
    doctorCount: 'Doctor',
    doctorsCountSuffix: 'Doctors Available',
    bookWaBtn: 'Book Appointment via WhatsApp',
    experienceYears: 'Years Experience',
    availableNow: 'Available for Appointments',
    busyNow: 'Currently Unavailable',
    achievementsLabel: 'Key Achievements & Fellowships:',
    specializationsLabel: 'Sub-Specialties & Focus Areas:',
    timingsLabel: 'Clinic Hours & Days:',
    educationLabel: 'Education & Qualifications:',
    contactBadge: '24/7 Patient Assistance',
    contactTitle: 'Contact Us or Send Inquiry',
    mapLocationTag: '📍 Physical Address:',
    contactCardHotline: '📞 Reception Hotline & WhatsApp:',
    formName: 'Full Name',
    formPhone: 'Phone Number',
    formMsg: 'Your message or medical inquiry...',
    formSubmit: 'Send Inquiry Now',
    contactSuccess: 'Inquiry sent successfully! One of our medical advisors will reach out to you shortly.',
    mapTitle: '📍 Interactive Hospital Map & Location',
    mapInfo: 'Strategically located in Mohandessin for convenient patient access.',
    footerDesc: 'Providing specialized surgical and medical excellence built on safety, expertise, and compassionate care.',
    waModalTitle: 'Book WhatsApp Clinic Appointment',
    bookingFormPatientName: 'Patient Full Name',
    bookingFormPatientPhone: 'Patient Phone Number',
    bookingFormDate: 'Preferred Day / Date',
    waSubmitBtn: 'Proceed to WhatsApp to Confirm Booking',
    adminTitle: 'Admin Dashboard & Doctor Management',
    adminLoginRequired: 'Authorized Personnel Login',
    adminPasswordLabel: 'Admin Password',
    adminLoginBtn: 'Login to Dashboard',
    adminLogout: 'Logout Admin',
    adminSaveBtn: 'Save & Update Doctor Info Live on Website',
    adminAddDoctor: '➕ Add New Doctor',
    adminDeleteDoctor: '🗑️ Delete Doctor',
    adminDoctorSelectLabel: 'Select Doctor to Edit or Add New',
    adminSuccessMsg: 'Doctor information saved and updated live successfully!',
    noDoctorsNotice: 'Please contact reception to inquire about doctor availability and schedules.',
    noDoctorsDentistNoticeTitle: 'Dentistry & Oral Surgery Department',
    noDoctorsDentistNoticeDesc: 'Please call the hospital to know if there is a doctor available or not. You can call directly or contact our reception via WhatsApp for instant inquiry.',
    contactReceptionForUpcoming: 'Call the hospital or WhatsApp reception to know if a doctor is available',
    callHospitalBtn: '📞 Call Hospital to Check Availability: +201118573813',
    dentistTabAvailabilityPrompt: '📞 Call the hospital to check doctor availability',
    viewOfficialCvBtn: '📄 Official Curriculum Vitae & Credentials (PDF)',
    cvModalTitle: 'Official Curriculum Vitae & International Credentials',
    closeBtn: 'Close',
    printCvBtn: 'Print / Save Document (PDF)',
    page1Tab: 'English Resume (Page 1)',
    page2Tab: 'Arabic Resume (Page 2)',
    liveSyncBadge: 'Live Real-time Sync for All Visitors'
  }
};
