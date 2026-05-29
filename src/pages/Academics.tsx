import { useState } from "react";
import { 
  BookOpen, 
  Settings, 
  Award, 
  Compass, 
  Cpu, 
  Search, 
  Target, 
  Brain, 
  Globe, 
  CheckCircle, 
  ChevronRight, 
  HeartHandshake, 
  GraduationCap, 
  Network
} from "lucide-react";
import { ACADEMICS_DATA, STAFF_DATA } from "../data/schoolData";

type SectionType = "primary" | "middle" | "secondary" | "intermediate" | "oLevel" | "aLevel";

export default function Academics() {
  const [activeTab, setActiveTab] = useState<SectionType>("primary");
  const [searchQuery, setSearchQuery] = useState("");

  const tabConfigs = [
    { key: "primary", label: "Primary Section", range: "Grade 1 - 5" },
    { key: "middle", label: "Middle Section", range: "Grade 6 - 8" },
    { key: "secondary", label: "Secondary / Matric", range: "Grade 9 - 10" },
    { key: "intermediate", label: "Intermediate College", range: "Grade 11 - 12" },
    { key: "oLevel", label: "Cambridge O-Level", range: "O1 - O3" },
    { key: "aLevel", label: "Cambridge A-Level", range: "A1 - A2" },
  ];

  // Helper to highlight search terms for users
  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, "gi"));
    return parts.map((part, i) => 
      part.toLowerCase() === searchQuery.toLowerCase() 
        ? <mark key={i} className="bg-yellow-200 text-gray-900 rounded-xs px-0.5">{part}</mark> 
        : part
    );
  };

  return (
    <div id="academics-page-container" className="bg-slate-50 min-h-screen">
      {/* Header Block */}
      <div id="academics-header" className="bg-teal-950 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-slate-900/60 mix-blend-multiply" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest block mb-2">Curriculum Structures</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Academic Pathways</h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Explore our blended academic frameworks designed to challenge intellect, nourish logical concepts, and prepare competitive students.
          </p>

          {/* Quick subject filter lookup */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              id="academic-search-input"
              type="text"
              placeholder="Search subjects, boards, or programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 border border-slate-700 bg-teal-900/30 text-white placeholder-slate-400 text-xs sm:text-sm rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:bg-teal-900/60 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-xs text-emerald-400 hover:text-emerald-300"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Academics Content Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Navigation Tabs Grid */}
        <div id="academics-tab-nav" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-12">
          {tabConfigs.map((tab) => (
            <button
              key={tab.key}
              id={`tab-btn-${tab.key}`}
              onClick={() => {
                setActiveTab(tab.key as SectionType);
                setSearchQuery(""); // Reset search on tab switch to avoid confusion
              }}
              className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-250 cursor-pointer ${
                activeTab === tab.key
                  ? "bg-emerald-750 text-white border-emerald-700 shadow-md bg-emerald-700 scale-[1.02]"
                  : "bg-white text-gray-700 hover:text-emerald-800 hover:bg-emerald-50/20 border-gray-150"
              }`}
            >
              <span className="block text-xs sm:text-sm font-bold tracking-tight">
                {tab.label}
              </span>
              <span className={`block text-[10px] mt-0.5 ${activeTab === tab.key ? "text-emerald-200" : "text-gray-400"}`}>
                {tab.range}
              </span>
            </button>
          ))}
        </div>

        {/* Dynamic Display Area of Academic Details */}
        <div id="dynamic-academic-panel" className="bg-white rounded-3xl shadow-sm border border-gray-200/80 p-6 sm:p-8 lg:p-12">
          
          {/* TAB 1: PRIMARY SECTION */}
          {activeTab === "primary" && (
            <div id="academic-panel-primary" className="space-y-10 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-6 items-start gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {ACADEMICS_DATA.primary.title}
                  </h2>
                  <span className="inline-block mt-1 bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold tracking-normal">
                    {ACADEMICS_DATA.primary.classes}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 max-w-md">
                  A foundational stage structured to nurture creative capabilities, build vocabulary, master arithmetic fundamentals, and coordinate with basic spoken English classes.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Subjects Column */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <BookOpen className="text-emerald-700 h-4 w-4" /> Core Subjects Offered
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 text-xs sm:text-sm text-gray-700">
                    {ACADEMICS_DATA.primary.subjects.map((sub, index) => (
                      <div key={index} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-200/50 transition-colors">
                        <ChevronRight className="text-emerald-600 h-4 w-4" />
                        <span>{highlightText(sub)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Methodology Column */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Settings className="text-emerald-700 h-4 w-4" /> Teaching Methodology
                  </h3>
                  <div className="space-y-3">
                    {ACADEMICS_DATA.primary.methodology.map((meth, idx) => (
                      <div key={idx} className="flex gap-3 text-xs sm:text-sm text-gray-600">
                        <CheckCircle className="text-teal-600 h-4 w-4 shrink-0 mt-0.5" />
                        <span>{highlightText(meth)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assessment Column */}
                <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-150/40">
                  <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Target className="text-emerald-700 h-4 w-4" /> Assessment Systems
                  </h3>
                  <div className="space-y-4">
                    {ACADEMICS_DATA.primary.assessments.map((ass, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-emerald-100/50 hover:border-emerald-500 transition-colors flex gap-3 text-xs sm:text-sm text-gray-700">
                        <span className="font-bold text-emerald-700">0{idx + 1}</span>
                        <span>{highlightText(ass)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MIDDLE SECTION */}
          {activeTab === "middle" && (
            <div id="academic-panel-middle" className="space-y-10 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-6 items-start gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {ACADEMICS_DATA.middle.title}
                  </h2>
                  <span className="inline-block mt-1 bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold">
                    {ACADEMICS_DATA.middle.classes}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 max-w-md">
                  Transitioning to deep analytical reasoning, coding basics, scientific inquiry models, and group-level debate workshops to nurture peer leadership.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Subjects Column */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <BookOpen className="text-emerald-700 h-4 w-4" /> Core Subjects Offered
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 text-xs sm:text-sm text-gray-700">
                    {ACADEMICS_DATA.middle.subjects.map((sub, index) => (
                      <div key={index} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-200/50 transition-colors">
                        <ChevronRight className="text-emerald-600 h-4 w-4" />
                        <span>{highlightText(sub)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Programs */}
                <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-150/40">
                  <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Cpu className="text-emerald-700 h-4 w-4" /> Additional Tech &amp; Ethics Programs
                  </h3>
                  <div className="space-y-3.5">
                    {ACADEMICS_DATA.middle.additionalPrograms.map((prog, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-emerald-100 flex gap-3 text-xs sm:text-sm text-gray-700">
                        <span className="h-5 w-5 bg-emerald-100 text-emerald-800 rounded-md flex items-center justify-center font-bold text-[10px] shrink-0">
                          +
                        </span>
                        <span>{highlightText(prog)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Student Development Training */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <UserLabelIcon className="text-emerald-700 h-4 w-4" /> Students are Trained In:
                  </h3>
                  <div className="space-y-3">
                    {ACADEMICS_DATA.middle.studentDevelopment.map((dev, idx) => (
                      <div key={idx} className="flex gap-3 text-xs sm:text-sm text-gray-600 items-center p-2 rounded-lg bg-teal-50/30 border border-teal-50">
                        <CheckCircle className="text-teal-600 h-4 w-4 shrink-0" />
                        <span className="font-semibold text-teal-950">{highlightText(dev)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SECONDARY / MATRIC */}
          {activeTab === "secondary" && (
            <div id="academic-panel-secondary" className="space-y-10 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-6 items-start gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {ACADEMICS_DATA.secondary.title}
                  </h2>
                  <span className="inline-block mt-1 bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold">
                    {ACADEMICS_DATA.secondary.classes}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">Examination Boards Connected</span>
                  <div className="flex flex-wrap gap-2">
                    {ACADEMICS_DATA.secondary.boards.map((board, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-teal-50 border border-teal-150 text-[10px] sm:text-xs font-bold text-teal-800 rounded-md">
                        {board}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Science Subjects List */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <BookOpen className="text-emerald-700 h-4 w-4" /> Science Group subjects
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 text-xs sm:text-sm text-gray-700">
                    {ACADEMICS_DATA.secondary.subjects.map((sub, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-200/50 transition-colors">
                        <ChevronRight className="text-emerald-600 h-4 w-4" />
                        <span>{highlightText(sub)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Prep Programs */}
                <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-150/40">
                  <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Target className="text-emerald-700 h-4 w-4" /> Board Exam Speed Prep
                  </h3>
                  <div className="space-y-3.5">
                    {ACADEMICS_DATA.secondary.prepPrograms.map((prep, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-xl border border-emerald-100 flex gap-3 text-xs sm:text-sm text-gray-700">
                        <span className="font-bold text-emerald-700 font-mono">#{idx + 1}</span>
                        <span>{highlightText(prep)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Counseling Guidance */}
                <div className="bg-white rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Compass className="text-emerald-700 h-4 w-4" /> Specialized Career Counseling
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    Preparing students to align with corresponding future higher education tracks based on merit and passion:
                  </p>
                  <div className="space-y-2.5">
                    {ACADEMICS_DATA.secondary.counseling.map((counsel, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-teal-50/20 border border-teal-50 text-xs sm:text-sm text-gray-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-600" />
                        <span className="font-medium text-gray-800">{highlightText(counsel)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: INTERMEDIATE SECTION */}
          {activeTab === "intermediate" && (
            <div id="academic-panel-intermediate" className="space-y-10 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-6 items-start gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {ACADEMICS_DATA.intermediate.title}
                  </h2>
                  <span className="inline-block mt-1 bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold">
                    {ACADEMICS_DATA.intermediate.classes}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 max-w-md">
                  College level programs targeted to unlock admissions into prominent local and national professional universities. Separate science blocks and practical setups.
                </p>
              </div>

              {/* Grid showcasing streams */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ACADEMICS_DATA.intermediate.programs.map((prog, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-150 p-6 rounded-2xl hover:bg-emerald-50/30 hover:border-emerald-500 transition-all duration-300">
                    <div className="p-2.5 bg-emerald-600 inline-block rounded-xl text-white mb-4">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                      {highlightText(prog.name)}
                    </h3>
                    <div className="space-y-1.5 mt-4">
                      <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100/40 px-2 py-0.5 rounded-sm">Elective Subjects</span>
                      <ul className="text-xs sm:text-sm text-gray-650 space-y-1 pl-1 list-disc list-inside mt-2 text-gray-600">
                        {prog.subjects.map((sub, sIdx) => (
                          <li key={sIdx}>{highlightText(sub)}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: CAMBRIDGE O-LEVEL */}
          {activeTab === "oLevel" && (
            <div id="academic-panel-olevel" className="space-y-10 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-6 items-start gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {ACADEMICS_DATA.oLevel.title}
                  </h2>
                  <span className="inline-block mt-1 bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold">
                    Cambridge Assessment Curriculum
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 max-w-sm font-medium">
                  {ACADEMICS_DATA.oLevel.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Subjects Grid inside O Level */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <BookOpen className="text-emerald-700 h-4 w-4" /> Cambridge Core &amp; Electives Subjects
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
                    {ACADEMICS_DATA.oLevel.subjects.map((sub, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-1.5 rounded-md hover:bg-slate-200/50">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                        <span>{highlightText(sub)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Program Features */}
                <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-150/40">
                  <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Award className="text-emerald-700 h-4 w-4" /> O-Level Distinctive Features
                  </h3>
                  <div className="space-y-3">
                    {ACADEMICS_DATA.oLevel.features.map((feat, idx) => (
                      <div key={idx} className="flex gap-3 text-xs sm:text-sm text-gray-750">
                        <CheckCircle className="text-teal-700 h-5 w-5 shrink-0" />
                        <span className="text-gray-700">{highlightText(feat)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: CAMBRIDGE A-LEVEL */}
          {activeTab === "aLevel" && (
            <div id="academic-panel-alevel" className="space-y-10 animate-fadeIn">
              <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-100 pb-6 items-start gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {ACADEMICS_DATA.aLevel.title}
                  </h2>
                  <span className="inline-block mt-1 bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold">
                    Elite College Streams
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 max-w-sm">
                  {ACADEMICS_DATA.aLevel.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Advanced Streams offered in A Level */}
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Network className="text-emerald-700 h-4 w-4" /> Core Academic Streams Offered
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ACADEMICS_DATA.aLevel.streams.map((stream, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-150 rounded-xl p-5 hover:bg-white hover:border-emerald-500 hover:shadow-sm transition-all">
                        <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-sm">Track Streams</span>
                        <h4 className="font-bold text-sm text-gray-900 mt-2 mb-1">{highlightText(stream.name)}</h4>
                        <div className="text-xs text-gray-500 mt-3 pl-1 space-y-1 list-disc list-inside">
                          {stream.subjects.map((sub, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-1.5 text-gray-600 decoration-dotted">
                              <span className="h-1 w-1 rounded-full bg-slate-400" />
                              <span>{highlightText(sub)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* University Placements Support */}
                <div className="lg:col-span-5 bg-teal-950 text-white rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-slate-900/60 mix-blend-multiply" />
                  <div className="relative">
                    <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <GraduationCap className="h-5 w-5" /> University Placement Guidance
                    </h3>
                    <p className="text-xs text-slate-300 mb-6 font-medium leading-relaxed">
                      Our institutional counseling cell provides guidance and streamlined reference files to ensure direct paths into elite colleges:
                    </p>
                    
                    <div className="space-y-2 text-xs sm:text-sm text-slate-200">
                      {ACADEMICS_DATA.aLevel.universityCounseling.map((uni, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-lg">
                          <CheckCircle className="text-emerald-400 h-3.5 w-3.5 shrink-0" />
                          <span>{highlightText(uni)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Faculty Qualifications & Training highlight section */}
        <section id="faculty-overview" className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-gray-200">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest block mb-1">Our Educators</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">Expert Faculty &amp; Teacher Training</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Certified pedagogy specialists committed to delivering standard concept-based learnings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Faculty List */}
            <div className="p-6 bg-slate-50 border border-slate-150 rounded-2xl">
              <h3 className="text-base font-bold text-gray-950 uppercase tracking-tight mb-4 flex items-center gap-2">
                <UsersIcon className="text-emerald-700 h-5 w-5" /> Academic Faculty Composition
              </h3>
              <div className="space-y-3">
                {STAFF_DATA.facultyStructure.map((group, idx) => (
                  <div key={idx} className="pb-3 border-b border-gray-200/50 last:border-b-0 last:pb-0">
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900">{group.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{group.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualifications & Regular Teacher training */}
            <div className="space-y-6">
              <div className="p-6 bg-slate-50 border border-slate-150 rounded-2xl">
                <h3 className="text-base font-bold text-gray-950 uppercase tracking-tight mb-4 flex items-center gap-2">
                  <Award className="text-emerald-700 h-5 w-5" /> Minimum Teacher Standards
                </h3>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-2 list-none">
                  {STAFF_DATA.qualifications.map((q, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-teal-50 border border-teal-150 rounded-2xl">
                <h3 className="text-base font-bold text-teal-950 uppercase tracking-tight mb-4 flex items-center gap-2">
                  <Brain className="text-teal-700 h-5 w-5" /> Pedagogy &amp; Psychology Training
                </h3>
                <p className="text-xs text-teal-900 mb-4 font-medium leading-relaxed">
                  Our teachers attend structural monthly training workshops to update lesson dynamics:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-teal-950 font-bold">
                  {STAFF_DATA.training.map((t, idx) => (
                    <div key={idx} className="p-2 bg-white rounded-lg border border-teal-100 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-600 shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

// Inline fallback UI Icons to bypass potential import errors
function UserLabelIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.005 9.005 0 00-6.72-6.72h-.56A9.005 9.005 0 004 18.72M12 11h.01M12 7h.01M12 3h.01M16 11h.01M16 7h.01M16 3h.01M20 11h.01M20 7h.01M20 3h.01M8 11h.01M8 7h.01M8 3h.01M4 11h.01M4 7h.01M4 3h.01" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A3.318 3.318 0 0111.417 21a3.318 3.318 0 01-3.583-1.763v-.109m0 .11a9.38 9.38 0 01-2.625.372 9.337 9.337 0 01-4.121-.952 4.125 4.125 0 017.533-2.493M11.417 21c-1.11 0-2.153-.285-3.07-.786M15 7.5a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}
