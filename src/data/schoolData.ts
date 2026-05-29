// Data structure for the Conceptual School System website
// Based on the 17-page Complete Institutional Profile

export interface AcademicSection {
  title: string;
  classes: string;
  subjects: string[];
  methodology?: string[];
  assessments?: string[];
  additionalPrograms?: string[];
  studentDevelopment?: string[];
  boards?: string[];
  prepPrograms?: string[];
  counseling?: string[];
  streams?: { name: string; subjects: string[] }[];
  features?: string[];
}

export interface FeeItem {
  classOrProgram: string;
  admissionFee: number;
  monthlyFee: number;
}

export interface AgeCriterion {
  grade: string;
  age: string;
}

export const SCHOOL_INFO = {
  name: "Conceptual School System",
  tagline: "Unlocking Potential through Concept-Based Learning & Islamic Values",
  location: "Near Fish Farm Stayana Road, Makkah City, Faisalabad",
  about: "Conceptual School System is a modern private educational institution located in Faisalabad. The school is designed to provide high-quality academic education combined with Islamic values, personality development, leadership training, digital literacy, and international educational exposure. We follow a blended educational framework inspired by modern concept-based learning systems and international academic methodologies.",
  
  vision: "To nurture intellectually capable, morally strong, technologically skilled, and globally competitive students who contribute positively to society.",
  
  mission: [
    "Deliver quality education using modern teaching methodologies",
    "Develop critical thinking and analytical skills",
    "Promote Islamic ethics and social responsibility",
    "Prepare students for national and international educational opportunities",
    "Build leadership, communication, and innovation capabilities in students"
  ],

  academicOfferings: [
    "Primary School (Classes 1–5)",
    "Middle School (Classes 6–8)",
    "Secondary School / Matric (Classes 9–10)",
    "Higher Secondary School / Intermediate (Classes 11–12)",
    "O-Level Program",
    "A-Level Program"
  ]
};

export const CAMPUS_FACILITIES = {
  academic: [
    { name: "Smart Classrooms", desc: "Equipped with state-of-the-art multimedia projectors" },
    { name: "Fully Air-Conditioned Computer Labs", desc: "Modern computer configurations for advanced computing education" },
    { name: "State-of-the-Art Science Labs", desc: "Dedicated physical spaces for Physics, Chemistry, and Biology" },
    { name: "Robotics and AI Learning Lab", desc: "Hands-on learning of intelligent control and robotic systems" },
    { name: "Digital Library & Reading Hall", desc: "Enriched access to thousands of e-books and cozy revision space" },
    { name: "Language Lab", desc: "Specialized lab dedicated to spoken English development" },
    { name: "Mathematics Activity Room", desc: "Visualizing complex formulas and active geometry boards" }
  ],
  sports: [
    { name: "Cricket Ground", desc: "Dedicated practice pitch with boundary netting" },
    { name: "Football Field", desc: "Lush green natural grass playground" },
    { name: "Basketball Court", desc: "Hardcourt facility designed for inter-school tournaments" },
    { name: "Indoor Badminton Hall", desc: "Standard courts secured against drafts" },
    { name: "Table Tennis Area", desc: "Equipped with high-grade recreational tables" },
    { name: "Physical Fitness Gymnasium", desc: "Fully equipped gym to boost stamina and health" }
  ],
  student: [
    { name: "Hygienic Cafeteria", desc: "Serving quality fresh food and nutritious snacks for students" },
    { name: "Medical Room", desc: "First-aid response with a certified qualified nurse available" },
    { name: "School Transport System", desc: "Secure fleet of GPS-tracked school buses with professional staff" },
    { name: "Mosque / Prayer Area", desc: "Facilitating daily Zuhr prayers and reinforcing Islamic ethics" },
    { name: "Parent Waiting Lounge", desc: "Comfortable, climate-controlled reception room" },
    { name: "CCTV Monitored Security", desc: "24/7 high-definition surveillance across all school corners" },
    { name: "Biometric Attendance System", desc: "Instant entry and departure digital registers for student safety" }
  ],
  technology: [
    { name: "High-Speed Internet", desc: "Campus-wide fiber optic network routing" },
    { name: "Student Learning Management System (LMS)", desc: "Providing dynamic content and tracking resources instantly" },
    { name: "Mobile Application for Parents", desc: "Real-time performance details, fee alerts, and attendance push updates" },
    { name: "Online Homework Portal", desc: "Enables seamless electronic assignment submission and grading" },
    { name: "AI-Based Student Analytics", desc: "Analyzing weak concepts and generating feedback patterns" }
  ]
};

export const ADMISSION_SYSTEM = {
  procedure: [
    {
      step: 1,
      title: "Admission Inquiry",
      desc: "Parents visit the admission office in Stayana Road or apply online through the school web portal."
    },
    {
      step: 2,
      title: "Registration",
      desc: "Apply with the following required documents:",
      list: [
        "Birth Certificate",
        "B-Form",
        "Parent CNIC copies",
        "Previous school result card",
        "Passport size photographs"
      ]
    },
    {
      step: 3,
      title: "Entry Test",
      desc: "Students are assessed through examinations covering:",
      list: [
        "English",
        "Mathematics",
        "Science",
        "IQ Assessment"
      ]
    },
    {
      step: 4,
      title: "Interview",
      desc: "Interactive discussion sessions are arranged with:",
      list: [
        "The prospective Student",
        "Parents",
        "Academic Coordinator"
      ]
    },
    {
      step: 5,
      title: "Final Selection",
      desc: "Selected candidates receive their official package structure containing:",
      list: [
        "Admission letter",
        "First month fee voucher",
        "Official uniform specifications",
        "Academic calendar guide"
      ]
    }
  ],
  ageCriteria: [
    { grade: "Grade 1", age: "5+ Years" },
    { grade: "Grade 2", age: "6+ Years" },
    { grade: "Grade 3", age: "7+ Years" },
    { grade: "Grade 4", age: "8+ Years" },
    { grade: "Grade 5", age: "9+ Years" },
    { grade: "Grade 6", age: "10+ Years" },
    { grade: "Grade 7", age: "11+ Years" },
    { grade: "Grade 8", age: "12+ Years" },
    { grade: "Grade 9", age: "13+ Years" },
    { grade: "Grade 10", age: "14+ Years" },
    { grade: "Grade 11", age: "15+ Years" },
    { grade: "Grade 12", age: "16+ Years" }
  ],
  scholarships: [
    { type: "Merit Scholarships", desc: "Awarded to academically outstanding students with exceptional test or board results." },
    { type: "Hafiz-e-Quran Scholarships", desc: "Dedicated financial concessions supporting students who have memorized the Holy Quran." },
    { type: "Sibling Discounts", desc: "Fee relief for families enrolling multiple siblings concurrently (e.g., 20% off tuition)." },
    { type: "Need-Based Scholarships", desc: "Designed for talented students facing financial constraints, ensuring access to quality schooling." },
    { type: "Sports Scholarships", desc: "Exclusive grants honoring accomplishments in regional or national athletic contests." }
  ]
};

export const ACADEMICS_DATA = {
  primary: {
    title: "Primary Section",
    classes: "Classes 1–5",
    subjects: [
      "English",
      "Urdu",
      "Mathematics",
      "General Science",
      "Islamiat",
      "Social Studies",
      "Computer Science",
      "Art & Craft",
      "Spoken English",
      "Quran & Nazra"
    ],
    methodology: [
      "Activity-based learning models",
      "Smart board and multimedia interactive classes",
      "Story-based lesson formatting",
      "Weekly presentations to boost confidence",
      "Collaborative project groups",
      "Short playful interactive quizzes"
    ],
    assessments: [
      "Regular Monthly Tests",
      "Active Class Participation reviews",
      "Homework and Exercise Evaluation",
      "Mid-Term Exams",
      "Comprehensive Final-Term Exams"
    ]
  },
  middle: {
    title: "Middle Section",
    classes: "Classes 6–8",
    subjects: [
      "English Grammar & Literature",
      "Urdu",
      "Mathematics",
      "Physics Basics",
      "Chemistry Basics",
      "Biology Basics",
      "Computer Science",
      "Pakistan Studies",
      "Islamiat",
      "General Knowledge"
    ],
    additionalPrograms: [
      "Coding for beginners and game design foundations",
      "Public speaking & Toastmasters-inspired modules",
      "Active Science exhibitions and experiment fairs",
      "Debate competitions for analytical reasoning",
      "Islamic ethics and socialization workshops"
    ],
    studentDevelopment: [
      "Communication Skills",
      "Leadership Abilities",
      "Creative Problem-Solving",
      "Collaborative Teamwork",
      "Dynamic Presentation Skills"
    ]
  },
  secondary: {
    title: "Secondary Section / Matric",
    classes: "Classes 9–10 (Science Group)",
    subjects: [
      "English",
      "Urdu",
      "Islamiat",
      "Pakistan Studies",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology / Computer Science"
    ],
    boards: [
      "Federal Board of Intermediate and Secondary Education (FBISE)",
      "Board of Intermediate & Secondary Education, Faisalabad (BISE Faisalabad)"
    ],
    prepPrograms: [
      "Rigorous Board Paper Practice and past papers breakdown",
      "Extensive MCQ speed training sessions",
      "Weekly diagnostic testing cycles",
      "Concept Revision Camps in seasonal breaks",
      "Practical Laboratory training and checklist validation"
    ],
    counseling: [
      "Medical Field prep guidelines (MDCAT streams)",
      "Engineering Careers counseling",
      "Computer Science development paths",
      "Commerce training frameworks",
      "Civil Services guidance seminars",
      "Entrepreneurship & startup incubators"
    ]
  },
  intermediate: {
    title: "Intermediate Section",
    classes: "Classes 11–12",
    programs: [
      {
        name: "Pre-Medical",
        subjects: ["Biology", "Chemistry", "Physics"]
      },
      {
        name: "Pre-Engineering",
        subjects: ["Mathematics", "Chemistry", "Physics"]
      },
      {
        name: "ICS (Intermediate in Computer Science)",
        subjects: ["Computer Science", "Mathematics", "Physics"]
      },
      {
        name: "I.Com (Intermediate in Commerce)",
        subjects: ["Accounting", "Economics", "Commerce"]
      },
      {
        name: "FA (Faculty of Arts)",
        subjects: ["Humanities", "Psychology", "Sociology", "Education"]
      }
    ]
  },
  oLevel: {
    title: "O-Level Program",
    desc: "The O-Level section follows the standard Cambridge assessment curriculum, preparing students for recognized general certificates.",
    subjects: [
      "English Language",
      "Mathematics",
      "Physics",
      "Chemistry",
      "Biology",
      "Computer Science",
      "Business Studies",
      "Economics",
      "Sociology",
      "Islamiat",
      "Pakistan Studies"
    ],
    features: [
      "Elite Cambridge-trained faculty members",
      "Specialized international examination preparation plans",
      "Research-based assignments to build autonomous learning",
      "Analytical learning methods replacing traditional rote-learning",
      "Extensive practical laboratory experiments"
    ]
  },
  aLevel: {
    title: "A-Level Program",
    desc: "A premium program crafted for elite entry into top-tier national and international universities.",
    streams: [
      {
        name: "Pre-Medical",
        subjects: ["Biology", "Chemistry", "Physics"]
      },
      {
        name: "Engineering",
        subjects: ["Mathematics", "Physics", "Chemistry"]
      },
      {
        name: "Business Studies",
        subjects: ["Economics", "Accounting", "Business"]
      },
      {
        name: "Computer Science",
        subjects: ["Computer Science", "Mathematics", "Physics"]
      }
    ],
    universityCounseling: [
      "LUMS (Lahore University of Management Sciences)",
      "NUST (National University of Sciences & Technology)",
      "FAST (National University of Computer and Emerging Sciences)",
      "COMSATS University",
      "UET (University of Engineering and Technology)",
      "Leading Prestigious International Universities across the UK, USA, and Europe"
    ]
  }
};

export const STAFF_DATA = {
  facultyStructure: [
    { title: "Subject Specialists", desc: "Expert subject matter teachers for secondary, matric, and intermediate levels." },
    { title: "Certified Cambridge Teachers", desc: "Specialists trained by Cambridge assessment board for O&A levels." },
    { title: "Experienced Board Teachers", desc: "Instructors with years of experience marking and setting FBISE/BISE Faisalabad papers." },
    { title: "Mental & Career Counselors", desc: "Helping students choose correct streams and master stress management." },
    { title: "IT & Digital Trainers", desc: "Coordinating LMS portals, programming courses, and robotics workshops." },
    { title: "Professional Sports Instructors", desc: "Trained athletes running health routines and team practices." }
  ],
  qualifications: [
    "Bachelor's Degree (minimum standard standard for primary sections)",
    "Master's Degree (required for general subject instructions)",
    "MPhil Degree (held by senior faculty and academics)",
    "Official Cambridge Professional Development Certifications for O/A Levels"
  ],
  training: [
    "Monthly pedagogy workshops focusing on interaction",
    "Digital teaching certifications and LMS usage reviews",
    "Modern classroom management and control seminars",
    "Child psychology training to handle diverse cognitive paces"
  ]
};

export const SCHEDULES_DATA = {
  timings: [
    { section: "Grade 1–5 (Primary)", timing: "8:00 AM – 1:30 PM" },
    { section: "Grade 6–8 (Middle)", timing: "7:45 AM – 2:00 PM" },
    { section: "Grade 9–10 (Secondary)", timing: "7:30 AM – 2:30 PM" },
    { section: "Grade 11–12 (Intermediate)", timing: "7:30 AM – 3:00 PM" },
    { section: "O/A Levels (Cambridge)", timing: "8:00 AM – 3:30 PM" }
  ],
  weeklyActivities: [
    {
      day: "Monday",
      activities: [
        "Morning prayers, national anthem, and general assembly directions",
        "Regulated academic classes focusing on key subject files",
        "Spoken English interactive training sessions"
      ]
    },
    {
      day: "Tuesday",
      activities: [
        "Core subject instruction periods",
        "Science practical lab demonstrations and experiment reports"
      ]
    },
    {
      day: "Wednesday",
      activities: [
        "Weekly student club activities (Robotics, Science, IT...)",
        "Interscholastic and classes debates",
        "Outdoor sports practice and athletic coordination"
      ]
    },
    {
      day: "Thursday",
      activities: [
        "Concept checking & Assessment testing quizzes",
        "Spiritual Quran recitation & moral development sessions"
      ]
    },
    {
      day: "Friday",
      activities: [
        "Islamic lecture series reinforcing moral uprightness",
        "Shortened academic day cycle for parents' convenience",
        "One-on-one student counseling and scheduling reviews"
      ]
    }
  ]
};

export const FEE_STRUCTURE = {
  primary: [
    { grade: "Grade 1", admissionFee: 25000, monthlyFee: 8000 },
    { grade: "Grade 2", admissionFee: 25000, monthlyFee: 8500 },
    { grade: "Grade 3", admissionFee: 28000, monthlyFee: 9000 },
    { grade: "Grade 4", admissionFee: 30000, monthlyFee: 9500 },
    { grade: "Grade 5", admissionFee: 32000, monthlyFee: 10000 }
  ],
  middle: [
    { grade: "Grade 6", admissionFee: 35000, monthlyFee: 11000 },
    { grade: "Grade 7", admissionFee: 35000, monthlyFee: 11500 },
    { grade: "Grade 8", admissionFee: 38000, monthlyFee: 12000 }
  ],
  matric: [
    { grade: "Grade 9", admissionFee: 40000, monthlyFee: 13500 },
    { grade: "Grade 10", admissionFee: 42000, monthlyFee: 14000 }
  ],
  intermediate: [
    { grade: "FSc Pre-Medical (Grade 11-12)", admissionFee: 50000, monthlyFee: 16000 },
    { grade: "FSc Pre-Engineering (Grade 11-12)", admissionFee: 50000, monthlyFee: 16000 },
    { grade: "ICS (Grade 11-12)", admissionFee: 48000, monthlyFee: 15000 },
    { grade: "I.Com (Grade 11-12)", admissionFee: 45000, monthlyFee: 14000 }
  ],
  oLevel: [
    { grade: "O1", admissionFee: 65000, monthlyFee: 22000 },
    { grade: "O2", admissionFee: 65000, monthlyFee: 23000 },
    { grade: "O3", admissionFee: 70000, monthlyFee: 25000 }
  ],
  aLevel: [
    { grade: "Science Group", admissionFee: 80000, monthlyFee: 30000 },
    { grade: "Business Group", admissionFee: 75000, monthlyFee: 28000 }
  ]
};

export const EXTRA_DETAILS = {
  coCurricular: [
    "Robotics competitions & AI design presentations",
    "Science fairs with functional hardware models",
    "Speech contests in English & Urdu to cultivate confidence",
    "Sports tournaments (Inter-school Cricket, Football, and Basketball matches)",
    "Creative art exhibitions of painting and design portfolio",
    "Coding competitions for beginner computer science groups",
    "Quran recitation and Calligraphy matches",
    "Essay writing contests based on creative logic"
  ],
  clubs: [
    { name: "Science Club", desc: "Hands-on projects making physical models, rockets, and electricity cells." },
    { name: "IT & Robotics Club", desc: "Programming, robotic assembling, Lego mindstorms, and logic building." },
    { name: "Debate Society", desc: "Formulating strong cases for national public debates in English & Urdu." },
    { name: "Literature Society", desc: "Reviewing books, drafting school bulletins, and organizing poetry evenings." },
    { name: "Sports Club", desc: "Promoting physical wellness, running matches, and building physical fitness." },
    { name: "Environmental Awareness", desc: "Recycling drives, tree planting across Faisalabad, and carbon awareness campaigns." }
  ],
  discipline: [
    "Strict attendance protocol (90%+ mandatory block)",
    "Respectful behavior code for students, teachers, and campus caretakers",
    "Daily uniform checking upon campus entry gate",
    "Rigorous anti-bullying policy with zero-tolerance zones",
    "Digital ethics guidelines for using the LMS platform safely"
  ],
  parentCommunication: {
    channels: [
      { name: "LMS Parent Portal", desc: "Checking grades, interactive homework sheets, teacher feedback, and fee invoices." },
      { name: "Comprehensive Mobile App", desc: "Receive immediate biometric student entrance notifications and alerts." },
      { name: "Immediate SMS Alerts", desc: "Direct updates for urgent weather, events, or transport updates." },
      { name: "Parent Teacher Meetings (PTM)", desc: "Scheduled face-to-face sessions to align development plans." }
    ],
    details: [
      "Access student attendance reports instantly in three taps",
      "Immediate evaluation of exam results with comparative grade bands",
      "Daily dynamic homework updates and reading checklists",
      "Constructive, confidential teacher feedback loops",
      "Bi-weekly digital automated fee reminders"
    ]
  },
  transport: {
    features: [
      "Modern, CCTV-equipped, GPS-tracked buses with real-time tracking for parents",
      "Responsible female attendants accompanying junior students",
      "CCTV video logging of entire route trips for student protection",
      "Immediate 24/7 route controller and emergency support line access"
    ],
    routes: [
      "Makkah City (Main Blocks)",
      "Satyana Road (Fish Farm, stayana main lanes)",
      "Jaranwala Road (East Faisalabad zones)",
      "Canal Road (Villas and central sector)",
      "Madina Town (Urban blocks)",
      "Peoples Colony (Blocks 1 & 2)",
      "D Ground (Central market circle)"
    ]
  },
  uniform: {
    boys: [
      "White half/full-sleeve crisp shirt",
      "Tailored Navy Blue pants",
      "Official school theme tie",
      "Polished Black leather school shoes",
      "Smart Navy Blue Winter Blazer (compulsory for winter season)"
    ],
    girls: [
      "White cotton uniform shirt/kurti",
      "Navy Blue trousers or traditional salwar",
      "Complimentary white premium headscarf/scarf",
      "Vibrant embroidered official School Badge",
      "Comfortable flat Black shoes"
    ]
  },
  digitalLearning: [
    "Smart interactive classrooms with projectors",
    "AI-powered dynamic quizzes and concept analyzers",
    "Online school learning portal (LMS)",
    "Pre-recorded catalog of lectures for lesson backup",
    "Virtual hybrid classroom configurations during holidays",
    "Digital video parent meetings for distant families"
  ],
  security: [
    "24/7 armed private guards stationed at all main checkpoints",
    "Biometric student entry scanning with real-time logs",
    "Complete CCTV high-definition surveillance covering all corners",
    "Standardized emergency rapid response and evacuation drills",
    "Fitted fire safety equipment with quarterly inspections"
  ],
  events: [
    "Annual General Function & Theatre",
    "Annual Sports Gala & Track Competitions",
    "Science & Engineering Expo with external judges",
    "Quran Recitation Competition",
    "14th August Pakistan Independence Day celebrations",
    "Teacher's Day appreciation seminars",
    "Grand Graduation Ceremony for matric, intermediate, O and A Level graduating batches"
  ],
  futureExpansion: [
    "International Student Exchange programs",
    "AI & Data Science advanced coding streams",
    "Technical and professional diploma programs",
    "International examination and testing center setups",
    "Full-scale campus boarding & dormitory facilities",
    "Advanced STEM student innovation laboratory center"
  ]
};
