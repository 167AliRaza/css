import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Award, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Compass, 
  Cpu, 
  Flag, 
  Calendar, 
  Glasses, 
  Building2, 
  GraduationCap, 
  Heart, 
  Sparkles, 
  TrendingUp, 
  Users 
} from "lucide-react";
import { SCHOOL_INFO, SCHEDULES_DATA, EXTRA_DETAILS } from "../data/schoolData";

export default function Home() {
  return (
    <div id="home-page-container" className="bg-slate-50 min-h-screen">
      {/* Hero Block with elegant visual design */}
      <header id="home-hero" className="relative bg-teal-950 text-white overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-slate-900/90 mix-blend-multiply" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-600 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Campus location tag */}
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Stayana Road Campus • Faisalabad</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
              Conceptual <span className="text-emerald-400">School System</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Nurturing intellectually capable, morally strong, and technologically skilled students. Blending rigorous academic programs (Grades 1-12 &amp; O/A Levels) with pristine Islamic values and digital literacy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                id="hero-cta-admissions"
                to="/admissions"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-bold rounded-xl text-teal-950 bg-emerald-400 hover:bg-emerald-300 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md focus:outline-hidden"
              >
                Inquire &amp; Fee Structure
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                id="hero-cta-academics"
                to="/academics"
                className="inline-flex items-center justify-center px-6 py-3.5 border border-slate-500 bg-teal-900/40 text-sm font-semibold rounded-xl text-slate-200 hover:bg-teal-900/70 hover:text-white transition-all hover:scale-[1.02] focus:outline-hidden"
              >
                Explore Curriculums
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Brief Campus division details & core statement */}
      <section id="boys-girls-division-banner" className="relative -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-6">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Building2 className="text-emerald-600 h-5 w-5" /> Modern Architectural Campus Layout
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Optimized academic layout built on high standards with <strong className="text-emerald-800">separate academic blocks for boys and girls</strong>, ensuring a safe, centered learning environment.
              </p>
            </div>
            <div className="flex gap-4 justify-around md:justify-center">
              <div className="text-center p-3 rounded-xl bg-teal-50 border border-teal-100 w-28">
                <span className="block text-xl font-bold text-teal-700">Boys</span>
                <span className="text-[11px] text-teal-600 uppercase font-semibold">Division</span>
              </div>
              <div className="text-center p-3 rounded-xl bg-rose-50 border border-rose-100 w-28">
                <span className="block text-xl font-bold text-rose-700">Girls</span>
                <span className="text-[11px] text-rose-600 uppercase font-semibold">Division</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome & Campus Stats Section */}
      <section id="introduction-section" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest block mb-1">
              Introduction
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Concept-Based Learning Framework
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-5 leading-relaxed">
              {SCHOOL_INFO.about}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
              Located beautifully on <strong>{SCHOOL_INFO.location}</strong>, our campus boasts premier infrastructure to prep Faisalabad's future leaders. We empower pupils from primary blocks up to college preparation streams including O/A Levels.
            </p>
            
            <div className="mt-8">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Our Core Educational Stages:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                {SCHOOL_INFO.academicOfferings.map((offering, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-emerald-600 h-4 w-4 shrink-0" />
                    <span>{offering}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-emerald-800 to-teal-900 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-at-t from-emerald-500/20 to-transparent pointer-events-none" />
              <div className="relative">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-emerald-700 pb-3">
                  <Compass className="h-5 w-5 text-emerald-300" /> Key Pillars of Excellence
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="p-3 bg-white/10 rounded-xl h-12 w-12 flex items-center justify-center shrink-0">
                      <Cpu className="text-emerald-300 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Advanced Tech Literacy</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Robotics labs, coding curriculum, parent mobile app, and AI analytics.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-white/10 rounded-xl h-12 w-12 flex items-center justify-center shrink-0">
                      <Award className="text-emerald-300 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Moral Personality Development</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Integrating Islamic ethics, daily Quran classes, and social duty initiatives.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="p-3 bg-white/10 rounded-xl h-12 w-12 flex items-center justify-center shrink-0">
                      <Users className="text-emerald-300 h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">Elite University Counseling</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Specialized placement into LUMS, NUST, FAST, and international hubs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission segment with gorgeous display styling */}
      <section id="vision-mission-section" className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-400 font-semibold text-xs tracking-wider uppercase mb-4">
              <Flag className="h-3.5 w-3.5" /> Institution Vision
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Cultivating Today's Talents for Tomorrow
            </h2>
            
            <div className="mt-8 transition-transform hover:scale-[1.01]">
              <div className="p-6 bg-slate-800/80 rounded-2xl border-l-4 border-emerald-400 shadow-inner">
                <p className="text-lg italic text-slate-200 leading-relaxed font-serif">
                  “{SCHOOL_INFO.vision}”
                </p>
                <span className="block text-xs font-semibold uppercase tracking-widest mt-4 text-emerald-400">— Official Vision Statement</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-slate-800 pb-3">
              <CheckCircle className="text-emerald-400 h-5 w-5" /> Our Mission Action Targets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SCHOOL_INFO.mission.map((item, index) => (
                <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 flex gap-3">
                  <span className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm text-slate-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* School Timings & Detailed Weekly Schedule (Classes, Activities, Debates, Sports) */}
      <section id="timings-schedules-section" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest block mb-1">
            Schedules
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Timings &amp; Weekly Themes
          </h2>
          <p className="text-sm sm:text-base text-gray-500 mt-3">
            Accurate daily timing registers and theme layouts optimized for each grade group.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Timing table block */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
                <Clock className="text-emerald-700 h-5 w-5" /> Official School Timings
              </h3>
              <p className="text-xs text-gray-500 mb-6">
                Students must arrive 10 minutes prior to the designated start times for assembly and attendance logs.
              </p>
              
              <div className="space-y-4">
                {SCHEDULES_DATA.timings.map((time, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 rounded-lg bg-slate-50 border border-slate-100/50 transition-colors hover:bg-slate-100">
                    <span className="text-xs sm:text-sm font-semibold text-gray-800">{time.section}</span>
                    <span className="text-xs sm:text-sm font-bold text-emerald-700">{time.timing}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-emerald-50 rounded-xl p-4 border border-emerald-150">
              <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-widest mb-1">Friday Early Release</h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Friday session ends shortened for standard student counseling and parents' weekend convenience structures. Check dynamic timers in LMS.
              </p>
            </div>
          </div>

          {/* Weekly timetable highlight */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 flex items-center gap-2">
              <Calendar className="text-emerald-700 h-5 w-5" /> Weekly Activity Structure
            </h3>
            
            <div className="space-y-4">
              {SCHEDULES_DATA.weeklyActivities.map((dayData, idx) => (
                <div key={idx} className="border-b border-slate-50 last:border-b-0 pb-4 last:pb-0">
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white text-[11px] font-semibold tracking-wider">
                      {dayData.day}
                    </span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600 list-disc list-inside pl-1">
                    {dayData.activities.map((act, actIdx) => (
                      <li key={actIdx} className="leading-relaxed">
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Co-Curricular highlights */}
      <section id="co-curricular-highlight" className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest block mb-1">Extracurricular</span>
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Co-Curricular &amp; Life Skills</h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">Active student life program centered on building competitive confidence and innovative spirits.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {EXTRA_DETAILS.coCurricular.slice(0, 8).map((activity, index) => (
              <div key={index} className="bg-white p-5 rounded-xl border border-gray-200/60 shadow-xs hover:shadow-md transition-shadow flex items-start gap-3">
                <span className="p-1.5 bg-emerald-50 text-emerald-700 rounded-lg shrink-0">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span className="text-xs sm:text-sm font-medium text-gray-800 leading-snug">{activity}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              id="cta-view-clubs"
              to="/campus-life"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              See all student clubs and societies count
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Future Expansion Details Segment */}
      <section id="future-expansion" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-left">
              <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest block mb-1">
                Next Horizons
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Our Strategic Vision Expansion Plans
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
                Conceptual School System continuously upgrades administrative standards. Our strategic planning highlights advanced setups aiming to introduce specialized credentials to Faisalabad.
              </p>
              
              <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-gray-500">
                <span className="font-bold text-gray-800 block mb-1">Upcoming Project Phases</span>
                These expansions form our 5-year pipeline to strengthen campus facilities near Stayana Road.
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXTRA_DETAILS.futureExpansion.map((plan, idx) => (
                <div key={idx} className="p-5 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-gray-200 hover:border-emerald-500 hover:bg-white transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold font-mono">
                      0{idx + 1}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900 uppercase tracking-tight">Project Node</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                    {plan}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Admissions CTA Banner */}
      <section id="home-cta-banner" className="bg-emerald-800 text-white py-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-at-t from-emerald-600 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 text-white">
            Admission Gates Open for Next Session
          </h2>
          <p className="text-sm text-emerald-100 max-w-xl mx-auto mb-6">
            Review detailed grade eligibility and scholarship slots online. Secure your seat via Stayana Road admissions block now.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              id="cta-bottom"
              to="/admissions"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-800 font-bold rounded-xl text-sm shadow-sm hover:bg-slate-550 transition-colors cursor-pointer hover:bg-teal-50"
            >
              Check Tuition Fees &amp; Apply
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
