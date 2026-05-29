import { useState } from "react";
import { 
  Building2, 
  MapPin, 
  Bus, 
  ShieldCheck, 
  Users, 
  Laptop, 
  Bell, 
  Dribbble, 
  Plus, 
  Sparkles, 
  Calendar, 
  Clock, 
  BookOpen, 
  HelpCircle 
} from "lucide-react";
import { CAMPUS_FACILITIES, EXTRA_DETAILS } from "../data/schoolData";

type FacilityCat = "academic" | "sports" | "student" | "technology";

export default function CampusLife() {
  const [selectedCat, setSelectedCat] = useState<FacilityCat>("academic");
  const [activeRoute, setActiveRoute] = useState<string>("");

  const categoriesList = [
    { key: "academic", label: "Academic Blocks", count: CAMPUS_FACILITIES.academic.length },
    { key: "sports", label: "Sports Facilities", count: CAMPUS_FACILITIES.sports.length },
    { key: "student", label: "Student Services", count: CAMPUS_FACILITIES.student.length },
    { key: "technology", label: "Tech Infrastructure", count: CAMPUS_FACILITIES.technology.length }
  ];

  const getFacilityList = () => {
    switch(selectedCat) {
      case "academic": return CAMPUS_FACILITIES.academic;
      case "sports": return CAMPUS_FACILITIES.sports;
      case "student": return CAMPUS_FACILITIES.student;
      case "technology": return CAMPUS_FACILITIES.technology;
    }
  };

  return (
    <div id="campus-life-container" className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div id="campus-header" className="bg-teal-950 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-slate-900/60 mix-blend-multiply" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest block mb-2">Campus Infrastructure</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Campus Facilities &amp; Student Life</h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Discover our modern architectural campus, fully climate-controlled labs, and vibrant student community on Stayana Road, Faisalabad.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-20">

        {/* 1. INTERACTIVE FACILITIES VIEWER */}
        <section id="facilities-display-section" className="space-y-8 animate-fadeIn">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Explore Our World-Class Assets</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Our Stayana Road campus offers modern structures, separate boys and girls facilities, and spaces optimized for overall development.
            </p>
          </div>

          {/* Category Toggle Nav */}
          <div id="facility-cat-nav" className="flex flex-wrap gap-2 justify-center border-b border-gray-200 pb-4">
            {categoriesList.map((cat) => (
              <button
                key={cat.key}
                id={`facility-btn-${cat.key}`}
                onClick={() => setSelectedCat(cat.key as FacilityCat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all duration-200 cursor-pointer ${
                  selectedCat === cat.key
                    ? "bg-emerald-700 text-white border-emerald-600 shadow-sm"
                    : "bg-white text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/25 border-gray-200"
                }`}
              >
                {cat.label} <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] ${selectedCat === cat.key ? "bg-emerald-800 text-emerald-100" : "bg-slate-100 text-slate-500"}`}>{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div id="facilities-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFacilityList().map((fac, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-emerald-500 hover:shadow-md transition-all duration-200 group">
                <div className="flex items-start gap-4">
                  <span className="p-3 bg-slate-50 text-emerald-700 rounded-xl group-hover:bg-emerald-50 group-hover:text-emerald-800 transition-colors">
                    {selectedCat === "academic" && <BookOpen className="h-5 w-5" />}
                    {selectedCat === "sports" && <Dribbble className="h-5 w-5" />}
                    {selectedCat === "student" && <Users className="h-5 w-5" />}
                    {selectedCat === "technology" && <Laptop className="h-5 w-5" />}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm sm:text-base text-gray-950 tracking-tight">{fac.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-650 mt-1 leading-relaxed text-gray-500">{fac.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. SECURITY & HEALTH SYSTEMS */}
        <section id="safety-section" className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest block">Safe Guarding</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Advanced Campus Security Setup</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Campus safety is verified by structural, digital checkpoints and strict access monitoring. Parents stay notified immediately throughout school arrival/departure times.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 p-2 px-3 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>24/7 Armed Guard Duty</span>
                </div>
                <div className="flex items-center gap-2 p-2 px-3 bg-white/5 border border-white/10 rounded-lg text-xs font-semibold">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Biometric Entry Registries</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {EXTRA_DETAILS.security.map((secItem, idx) => (
                <div key={idx} className="p-5 bg-slate-800/80 border border-slate-700/60 rounded-xl flex gap-3 text-slate-200">
                  <span className="text-emerald-400 text-xs font-bold shrink-0 font-mono mt-0.5">✓</span>
                  <span className="text-xs sm:text-sm">{secItem}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. DRESS CODE DRESSING CHECKER */}
        <section id="uniform-details-section" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 text-left">
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest block mb-1">Dress Code</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Standard Uniform Specifications</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-4 leading-relaxed">
              To inspire discipline and academic togetherness, students must adhere to the official uniform codes on all general school sessions. Uniform checking is enforced daily at the gate checkpoint.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Boys Uniform Card */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-xs">
              <span className="px-2.5 py-1 bg-teal-50 text-teal-700 text-[10px] sm:text-xs font-bold rounded-lg uppercase tracking-wider">
                Boys Division (Gr. 1–12)
              </span>
              <ul className="space-y-2 mt-4 text-xs sm:text-sm text-gray-650">
                {EXTRA_DETAILS.uniform.boys.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Girls Uniform Card */}
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-xs">
              <span className="px-2.5 py-1 bg-pink-50 text-pink-700 text-[10px] sm:text-xs font-bold rounded-lg uppercase tracking-wider">
                Girls Division (Gr. 1–12)
              </span>
              <ul className="space-y-2 mt-4 text-xs sm:text-sm text-gray-650">
                {EXTRA_DETAILS.uniform.girls.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-pink-500 shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. CLUBS & SOCIETIES SHOWCASE */}
        <section id="clubs-societies" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-emerald-600 text-xs font-semibold uppercase block mb-1">Co-Curriculars</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Vibrant Student Clubs &amp; Societies</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Our active developmental clubs meet weekly to allow students to cultivate secondary logic and coordinate on creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXTRA_DETAILS.clubs.map((club, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs hover:border-emerald-500 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="h-2.5 w-2.5 bg-emerald-700 rounded-full" />
                  <h4 className="font-extrabold text-sm sm:text-base text-gray-950 tracking-tight">{club.name}</h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-620 leading-relaxed text-gray-500">{club.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. GPS-TRACKED SCHOOL TRANSPORTATION & DYNAMIC LOCATIONS LOOKUP */}
        <section id="transport-lookup-section" className="bg-emerald-50 rounded-3xl p-6 sm:p-10 border border-emerald-150 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider block">Transportation</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-emerald-950">Transport System &amp; Routes</h2>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
                We operate a premium, GPS-tracked fleet of school buses with female attendants on board for primary grades, ensuring complete security across Faisalabad bounds.
              </p>
              
              <div className="space-y-2.5 pt-2">
                {EXTRA_DETAILS.transport.features.map((feat, idx) => (
                  <div key={idx} className="flex gap-2.5 text-xs text-emerald-955 font-semibold text-emerald-950">
                    <span className="shrink-0 text-emerald-800 font-bold">•</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive routes picker */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-emerald-100 shadow-xs">
              <h4 className="text-xs sm:text-sm font-bold text-gray-950 mb-3 uppercase tracking-wide">
                Interactive Routes Covered:
              </h4>
              <p className="text-[11px] text-gray-500 mb-4 leading-normal">
                Select a routing sector to see the corresponding operational confirmation tags. Ensure children wait at collection hubs 5 mins before standard timing checks.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {EXTRA_DETAILS.transport.routes.map((route, idx) => (
                  <button
                    key={idx}
                    id={`route-btn-${idx}`}
                    onClick={() => setActiveRoute(route)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border cursor-pointer ${
                      activeRoute === route 
                        ? "bg-emerald-700 border-emerald-700 text-white" 
                        : "bg-slate-50 border-gray-200 text-gray-600 hover:bg-slate-100"
                    }`}
                  >
                    {route}
                  </button>
                ))}
              </div>

              {activeRoute ? (
                <div id="transport-route-result" className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-150 animate-fadeIn">
                  <h5 className="text-xs font-bold text-emerald-900 uppercase">Operational Route Confirmed</h5>
                  <p className="text-xs text-emerald-850 mt-1">
                    Direct GPS-Tracked shuttle connects <strong className="text-emerald-950">{activeRoute}</strong> directly with Stayana Road Campus Faisalabad blocks.
                  </p>
                  <span className="block text-[10px] text-emerald-755 font-bold mt-2 hover:underline cursor-pointer">
                    → Check exact stop details in Parent Application
                  </span>
                </div>
              ) : (
                <div className="text-center p-6 border-2 border-dashed border-gray-150 rounded-xl text-xs text-gray-400">
                  Select an operational routing sector above to trace security tracking.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 6. DISCIPINE & PARENT CHANNELS PORTALS */}
        <section id="discipline-parental-logs" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Discipline Policies */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-gray-950 mb-4 border-b border-gray-100 pb-2">
                Conduct &amp; Discipline Protocols
              </h3>
              <p className="text-xs text-gray-500 mb-4 leading-normal">
                To maintain standard safety, the campus enforces strict code structures. Attendance rates below 90% are reported automatically to corresponding coordinators.
              </p>
              <div className="space-y-2.5">
                {EXTRA_DETAILS.discipline.map((disc, idx) => (
                  <div key={idx} className="flex gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                    <span className="text-emerald-700 font-bold shrink-0">•</span>
                    <span>{disc}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 p-3.5 rounded-lg bg-orange-50 border border-orange-100 text-[11px] text-orange-900 leading-normal">
              <strong>Bullying Notice:</strong> Aggressive, disrespectful, or online bullying codes face direct student suspension rules.
            </div>
          </div>

          {/* Parent Communication System details */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
            <h3 className="text-base sm:text-lg font-bold text-gray-950 mb-4 border-b border-gray-100 pb-2">
              Parent Communication Channels
            </h3>
            <p className="text-xs text-gray-500 mb-4 leading-normal">
              We leverage an advanced mobile application and SMS gateway system to keep Faisalabad parents connected with classroom updates:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {EXTRA_DETAILS.parentCommunication.channels.map((ch, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-lg text-slate-800">
                  <h4 className="font-bold text-xs text-gray-950 tracking-tight">{ch.name}</h4>
                  <p className="text-[10px] text-gray-500 mt-0.5 leading-tight">{ch.desc}</p>
                </div>
              ))}
            </div>

            <h4 className="text-xs font-bold text-gray-950 uppercase tracking-widest mb-2">Parents Can Access:</h4>
            <div className="flex flex-wrap gap-2 text-xs text-gray-650">
              {EXTRA_DETAILS.parentCommunication.details.map((item, idx) => (
                <span key={idx} className="px-2.5 py-1 bg-teal-50/45 border border-teal-100 text-teal-850 rounded-md font-semibold text-[11px]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
