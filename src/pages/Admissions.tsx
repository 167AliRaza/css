import { useState } from "react";
import { 
  CheckCircle, 
  FileText, 
  HelpCircle, 
  Compass, 
  Award, 
  Calculator, 
  ListTodo, 
  ChevronRight, 
  Sparkles, 
  Info, 
  UserPlus2, 
  Coins 
} from "lucide-react";
import { ADMISSION_SYSTEM, FEE_STRUCTURE } from "../data/schoolData";

export default function Admissions() {
  // Calculator States
  const [selectedGrade, setSelectedGrade] = useState<string>("Grade 1");
  const [childAge, setChildAge] = useState<number>(6);
  const [isHafiz, setIsHafiz] = useState<boolean>(false);
  const [hasSibling, setHasSibling] = useState<boolean>(false);
  const [selectedScholarship, setSelectedScholarship] = useState<string>("none");

  // Flat mapping fee structure values for lookup
  const getFeeForGrade = (gradeName: string) => {
    // Check Primary
    const prim = FEE_STRUCTURE.primary.find(g => g.grade === gradeName);
    if (prim) return { admission: prim.admissionFee, monthly: prim.monthlyFee };

    // Check Middle
    const mid = FEE_STRUCTURE.middle.find(g => g.grade === gradeName);
    if (mid) return { admission: mid.admissionFee, monthly: mid.monthlyFee };

    // Check Matric
    const mat = FEE_STRUCTURE.matric.find(g => g.grade === gradeName);
    if (mat) return { admission: mat.admissionFee, monthly: mat.monthlyFee };

    // Check Intermediate
    if (gradeName === "Pre-Medical (FA/FSc)" || gradeName === "FSc Pre-Medical (Grade 11-12)") {
      return { admission: 50000, monthly: 16000 };
    }
    if (gradeName === "Pre-Engineering (FA/FSc)" || gradeName === "FSc Pre-Engineering (Grade 11-12)") {
      return { admission: 50000, monthly: 16050 };
    }
    if (gradeName === "ICS (Grade 11-12)") {
      return { admission: 48000, monthly: 15000 };
    }
    if (gradeName === "I.Com (Grade 11-12)") {
      return { admission: 45000, monthly: 14000 };
    }

    // Check O-Level
    const o = FEE_STRUCTURE.oLevel.find(g => g.grade === gradeName);
    if (o) return { admission: o.admissionFee, monthly: o.monthlyFee };

    // Check A-Level
    if (gradeName === "A-Level Science") {
      return { admission: 80000, monthly: 30000 };
    }
    if (gradeName === "A-Level Business") {
      return { admission: 75000, monthly: 28000 };
    }

    // Default Fallback
    return { admission: 25000, monthly: 8005 };
  };

  // List of all grades possible for calculation selector
  const gradesList = [
    { name: "Grade 1", section: "Primary" },
    { name: "Grade 2", section: "Primary" },
    { name: "Grade 3", section: "Primary" },
    { name: "Grade 4", section: "Primary" },
    { name: "Grade 5", section: "Primary" },
    { name: "Grade 6", section: "Middle" },
    { name: "Grade 7", section: "Middle" },
    { name: "Grade 8", section: "Middle" },
    { name: "Grade 9", section: "Matric" },
    { name: "Grade 10", section: "Matric" },
    { name: "FSc Pre-Medical (Grade 11-12)", section: "Intermediate" },
    { name: "FSc Pre-Engineering (Grade 11-12)", section: "Intermediate" },
    { name: "ICS (Grade 11-12)", section: "Intermediate" },
    { name: "I.Com (Grade 11-12)", section: "Intermediate" },
    { name: "O1", section: "O-Level" },
    { name: "O2", section: "O-Level" },
    { name: "O3", section: "O-Level" },
    { name: "A-Level Science", section: "A-Level" },
    { name: "A-Level Business", section: "A-Level" },
  ];

  // Logic to cross check if current entered age is sufficient according to official age criteria
  const isEligibleAge = (gradeName: string, enteredAge: number) => {
    // Official requirement map
    const ageMapping: Record<string, number> = {
      "Grade 1": 5, "Grade 2": 6, "Grade 3": 7, "Grade 4": 8, "Grade 5": 9,
      "Grade 6": 10, "Grade 7": 11, "Grade 8": 12, "Grade 9": 13, "Grade 10": 14,
      "FSc Pre-Medical (Grade 11-12)": 15, "FSc Pre-Engineering (Grade 11-12)": 15,
      "ICS (Grade 11-12)": 15, "I.Com (Grade 11-12)": 15,
      "O1": 14, "O2": 15, "O3": 16,
      "A-Level Science": 16, "A-Level Business": 16
    };

    const minRequired = ageMapping[gradeName] || 5;
    return { eligible: enteredAge >= minRequired, required: minRequired };
  };

  const calculatedResult = () => {
    const rawFee = getFeeForGrade(selectedGrade);
    let discountedMonthly = rawFee.monthly;
    let explanation = "Standard general fee applied.";

    // Apply sibling discount (approx 20% off)
    if (hasSibling) {
      discountedMonthly = discountedMonthly * 0.8;
      explanation = "Concessional Sibling discount (20%) applied.";
    }

    // Apply Hafiz e Quran (approx 30% off)
    if (isHafiz) {
      discountedMonthly = discountedMonthly * 0.7;
      explanation = "Honorary Hafiz-e-Quran scholarship (30%) applied.";
    }

    // Apply Merit / Need Selected Category
    if (selectedScholarship === "merit") {
      discountedMonthly = discountedMonthly * 0.5; // (approx 50% discount)
      explanation = "Academic high-merit discount (50%) adjusted.";
    } else if (selectedScholarship === "need") {
      discountedMonthly = discountedMonthly * 0.4; // (approx 60% discount)
      explanation = "Concessional talent support / need-based discount applied.";
    }

    const ageCheck = isEligibleAge(selectedGrade, childAge);

    return {
      admission: rawFee.admission,
      originalMonthly: rawFee.monthly,
      finalMonthly: Math.round(discountedMonthly),
      saving: Math.round(rawFee.monthly - discountedMonthly),
      explanation,
      isAgeCorrect: ageCheck.eligible,
      ageRequired: ageCheck.required,
    };
  };

  const fees = calculatedResult();

  return (
    <div id="admissions-page-container" className="bg-slate-50 min-h-screen">
      
      {/* Page Banner */}
      <div id="admissions-header" className="bg-teal-950 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 to-slate-900/60 mix-blend-multiply" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest block mb-2">Academic Enrolments</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Admissions System &amp; Tuition Fees</h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Review detailed criteria, required file registries, scholarship concessions, and get instantaneous calculations via our interactive tool.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-20">

        {/* 1. ADMISSION STAGES WORKFLOW */}
        <section id="procedure-workflow-section" className="space-y-10 animate-fadeIn">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest block mb-1">Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Step-by-Step Admissions Procedure</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Our streamlined admissions network has five clear verification checks designed for parents' convenience.
            </p>
          </div>

          <div id="admissions-steps-grid" className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {ADMISSION_SYSTEM.procedure.map((stepData) => (
              <div key={stepData.step} className="p-6 bg-white border border-gray-200 rounded-2xl flex flex-col justify-between hover:border-emerald-500 hover:shadow-md transition-all">
                <div>
                  <div className="h-10 w-10 bg-emerald-750 text-white font-bold rounded-xl flex items-center justify-center bg-emerald-700 text-sm mb-4">
                    0{stepData.step}
                  </div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-gray-950 uppercase tracking-tight mb-2">
                    {stepData.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-normal">
                    {stepData.desc}
                  </p>
                </div>

                {stepData.list && (
                  <div className="mt-4 pt-3 border-t border-slate-50 space-y-1">
                    {stepData.list.map((listItem, lIdx) => (
                      <div key={lIdx} className="flex gap-1.5 items-center text-[11px] text-gray-750 font-medium">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                        <span>{listItem}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 2. ELIGIBILITY / AGE & TUITION FEE CALCULATOR */}
        <section id="calc-tool-section" className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-at-t from-emerald-800/40 via-transparent to-transparent pointer-events-none" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Calculator controls */}
            <div className="lg:col-span-6 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <Calculator className="text-emerald-400 h-6 w-6" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold">Interactive Enrolment Blueprint</h3>
                  <p className="text-[11px] text-emerald-300">Set child indicators to fetch tuition structures immediately.</p>
                </div>
              </div>

              {/* Input: Select level */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-emerald-200 uppercase tracking-widest">Select Target Grade / Stream</label>
                <select 
                  id="calc-grade-select"
                  value={selectedGrade}
                  onChange={(e) => setSelectedGrade(e.target.value)}
                  className="block w-full text-xs sm:text-sm p-3 rounded-lg bg-teal-900 border border-teal-800 text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
                >
                  {gradesList.map((g, idx) => (
                    <option key={idx} value={g.name} className="bg-teal-950">
                      {g.name} ({g.section})
                    </option>
                  ))}
                </select>
              </div>

              {/* Input: Set age */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-emerald-200 uppercase tracking-widest">Child's Age (Years)</label>
                <div className="flex gap-4 items-center">
                  <input 
                    id="calc-age-range"
                    type="range"
                    min="4"
                    max="19"
                    value={childAge}
                    onChange={(e) => setChildAge(Number(e.target.value))}
                    className="w-full text-emerald-500 accent-emerald-400 cursor-pointer"
                  />
                  <span className="text-base sm:text-lg font-extrabold bg-teal-900 px-3.5 py-1.5 rounded-lg border border-teal-850">
                    {childAge}
                  </span>
                </div>
              </div>

              {/* Checkboxes: concession tags */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">Is Sibling Enrolled in Conceptual system?</span>
                  <input 
                    id="calc-checkbox-sibling"
                    type="checkbox"
                    checked={hasSibling}
                    onChange={(e) => setHasSibling(e.target.checked)}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-teal-800 rounded-sm bg-teal-900 pointer-events-auto"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-300">Is Candidate a Hafiz-e-Quran?</span>
                  <input 
                    id="calc-checkbox-hafiz"
                    type="checkbox"
                    checked={isHafiz}
                    onChange={(e) => setIsHafiz(e.target.checked)}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-teal-800 rounded-sm bg-teal-900 pointer-events-auto"
                  />
                </div>
              </div>

              {/* Dropdown: Scholarships category */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-emerald-200 uppercase tracking-widest">Other Scholarship Eligibility</label>
                <select 
                  id="calc-scholarship-select"
                  value={selectedScholarship}
                  onChange={(e) => setSelectedScholarship(e.target.value)}
                  className="block w-full text-xs sm:text-sm p-3 rounded-lg bg-teal-900 border border-teal-850 text-white focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
                >
                  <option value="none">No specific board score or sports record</option>
                  <option value="merit">High Board Merit Score (&gt;90% Marks)</option>
                  <option value="need">Facing validated need/family hardship</option>
                </select>
              </div>

            </div>

            {/* Calculator output result */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-emerald-900/40 border border-emerald-500/20 p-6 sm:p-8 rounded-2xl space-y-6">
                <h4 className="text-xs font-extrabold uppercase tracking-widest text-emerald-300 block">Assessment Output</h4>
                
                {/* Age validation banner */}
                <div id="calculator-age-check-box" className={`p-4 rounded-xl flex items-start gap-3 border ${fees.isAgeCorrect ? "bg-teal-500/10 border-teal-500/20 text-teal-200" : "bg-red-500/10 border-red-500/20 text-red-200"}`}>
                  <Info className="h-5 w-5 shrink-0" />
                  <div>
                    <span className="block text-xs uppercase font-extrabold tracking-wide">
                      {fees.isAgeCorrect ? "Age Requirements MET" : "Action Required: Age warning"}
                    </span>
                    <p className="text-[11px] mt-1 leading-normal">
                      The official criteria requires a minimum of <strong className="text-white">{fees.ageRequired} Years</strong> for <strong className="text-white">{selectedGrade}</strong>. Entered age is <strong className="text-white">{childAge} Years</strong>.
                    </p>
                  </div>
                </div>

                {/* Calculation breakdown */}
                <div className="border-t border-b border-emerald-800/60 py-4 space-y-3.5">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300">Target Grade Level Selected:</span>
                    <span className="font-bold text-white">{selectedGrade}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-300">One-time Admission Dues:</span>
                    <span className="font-bold text-white font-mono">PKR {fees.admission.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center text-xs text-slate-300">
                    <span>Standard Monthly Tuition Fee:</span>
                    <span className="font-semibold line-through font-mono">PKR {fees.originalMonthly.toLocaleString()}</span>
                  </div>

                  {fees.saving > 0 && (
                    <div className="flex justify-between items-center text-xs text-emerald-300">
                      <span>Monthly Merit Scholarship Discount:</span>
                      <span className="font-semibold font-mono">- PKR {fees.saving.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-2">
                    <span className="text-xs text-white uppercase tracking-wider font-semibold">Net Monthly Tuition Due:</span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">PKR {fees.finalMonthly.toLocaleString()}</span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-300 leading-normal italic">
                  * Calculated adjustment: {fees.explanation} Official admissions receipt requires coordinator audit at Faisalabad stayana road block prior to entry ticket issuance.
                </p>
              </div>

              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
                To proceed with registration, please trace the required document checklists down below.
              </div>
            </div>

          </div>
        </section>

        {/* 3. RETRIEVED CRITERIA & SCHOLARSHIP INFOGRAPHICS */}
        <section id="criteria-grid-section" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Sibling discounts / Scholarships listing */}
          <div id="scholarship-details-card" className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
            <h3 className="text-base sm:text-lg font-bold text-gray-950 mb-4 border-b border-gray-100 pb-2">
              Institution Scholarships &amp; Concessions
            </h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Conceptual School System maintains diverse support programs ensuring talented Faisalabad students secure standard learning opportunities regardless of resource barriers.
            </p>

            <div className="space-y-4">
              {ADMISSION_SYSTEM.scholarships.map((s, idx) => (
                <div key={idx} className="flex gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100/50 hover:border-emerald-500 transition-colors">
                  <span className="p-1.5 bg-emerald-50 text-emerald-700 rounded-lg shrink-0 h-8 w-8 flex items-center justify-center">
                    <Award className="h-4 w-4" />
                  </span>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-gray-900">{s.type}</h4>
                    <p className="text-xs text-gray-500 mt-0.5 leading-snug">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Age criteria card list */}
          <div id="age-criteria-card" className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
              Official age criteria thresholds
            </h3>
            <p className="text-xs text-gray-500 mb-4 leading-normal">
              Minimum ages demanded prior to launching active enrollment checkmarks:
            </p>
            
            <div className="max-h-80 overflow-y-auto border border-slate-100 rounded-lg scrollbar-thin">
              <table className="min-w-full text-xs text-left">
                <thead className="bg-slate-50 text-gray-700 uppercase font-black text-[10px] tracking-wider sticky top-0">
                  <tr>
                    <th className="py-2.5 px-4 font-black">Class / Grade</th>
                    <th className="py-2.5 px-4 font-black">Minimum Age Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-gray-650">
                  {ADMISSION_SYSTEM.ageCriteria.map((c, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-2 px-4 font-semibold text-gray-800">{c.grade}</td>
                      <td className="py-2 px-4 font-bold text-emerald-700">{c.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </section>

        {/* 4. TOTAL FEE STRUCTURE DETAILS TABLES */}
        <section id="fee-tables-section" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Official Tuition &amp; Admission Fee Structure</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Consolidated, fully authentic register mapping academic groups of Conceptual School System.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Primary Table Card */}
            <div className="bg-white rounded-2xl border border-gray-250/70 overflow-hidden shadow-xs hover:border-emerald-500 transition-colors">
              <div className="bg-emerald-800 text-white p-4">
                <h4 className="font-extrabold text-sm uppercase">Primary Section (Grade 1–5)</h4>
              </div>
              <div className="p-4">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-150 text-gray-400 font-bold">
                      <th className="py-2 text-left">Class Name</th>
                      <th className="py-2 text-right">Admission Fee</th>
                      <th className="py-2 text-right">Monthly Dues</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEE_STRUCTURE.primary.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-b-0">
                        <td className="py-2 font-semibold text-gray-800">{item.grade}</td>
                        <td className="py-2 text-right text-gray-500">PKR {item.admissionFee.toLocaleString()}</td>
                        <td className="py-2 text-right font-bold text-emerald-850">PKR {item.monthlyFee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Middle Table Card */}
            <div className="bg-white rounded-2xl border border-gray-250/70 overflow-hidden shadow-xs hover:border-emerald-500 transition-colors">
              <div className="bg-emerald-800 text-white p-4">
                <h4 className="font-extrabold text-sm uppercase">Middle Section (Grade 6–8)</h4>
              </div>
              <div className="p-4">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-150 text-gray-400 font-bold">
                      <th className="py-2 text-left">Class Name</th>
                      <th className="py-2 text-right">Admission Fee</th>
                      <th className="py-2 text-right">Monthly Dues</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEE_STRUCTURE.middle.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-b-0">
                        <td className="py-2 font-semibold text-gray-800">{item.grade}</td>
                        <td className="py-2 text-right text-gray-500">PKR {item.admissionFee.toLocaleString()}</td>
                        <td className="py-2 text-right font-bold text-emerald-850">PKR {item.monthlyFee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Matric Table Card */}
            <div className="bg-white rounded-2xl border border-gray-250/70 overflow-hidden shadow-xs hover:border-emerald-500 transition-colors">
              <div className="bg-emerald-800 text-white p-4">
                <h4 className="font-extrabold text-sm uppercase">Matric Section (Grade 9–10)</h4>
              </div>
              <div className="p-4">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-150 text-gray-400 font-bold">
                      <th className="py-2 text-left">Class Name</th>
                      <th className="py-2 text-right">Admission Fee</th>
                      <th className="py-2 text-right">Monthly Dues</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEE_STRUCTURE.matric.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-b-0">
                        <td className="py-2 font-semibold text-gray-800">{item.grade}</td>
                        <td className="py-2 text-right text-gray-500">PKR {item.admissionFee.toLocaleString()}</td>
                        <td className="py-2 text-right font-bold text-emerald-850">PKR {item.monthlyFee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Intermediate Table Card */}
            <div className="bg-white rounded-2xl border border-gray-250/70 overflow-hidden shadow-xs hover:border-emerald-500 transition-colors">
              <div className="bg-teal-905 bg-emerald-700 text-white p-4">
                <h4 className="font-extrabold text-sm uppercase">Intermediate College level</h4>
              </div>
              <div className="p-4">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-150 text-gray-400 font-bold">
                      <th className="py-2 text-left">Program Segment</th>
                      <th className="py-2 text-right">Admission Fee</th>
                      <th className="py-2 text-right">Monthly Dues</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEE_STRUCTURE.intermediate.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-b-0">
                        <td className="py-2 font-semibold text-gray-800">{item.grade}</td>
                        <td className="py-2 text-right text-gray-500">PKR {item.admissionFee.toLocaleString()}</td>
                        <td className="py-2 text-right font-bold text-emerald-850">PKR {item.monthlyFee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* O-Level Fee Card */}
            <div className="bg-white rounded-2xl border border-gray-250/70 overflow-hidden shadow-xs hover:border-emerald-500 transition-colors">
              <div className="bg-slate-800 text-white p-4">
                <h4 className="font-extrabold text-sm uppercase">Cambridge O-Levels Fee Standard</h4>
              </div>
              <div className="p-4">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-150 text-gray-400 font-bold">
                      <th className="py-2 text-left">Cambridge Level</th>
                      <th className="py-2 text-right">Admission Fee</th>
                      <th className="py-2 text-right">Monthly Dues</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEE_STRUCTURE.oLevel.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-b-0">
                        <td className="py-2 font-semibold text-gray-800">{item.grade}</td>
                        <td className="py-2 text-right text-gray-500">PKR {item.admissionFee.toLocaleString()}</td>
                        <td className="py-2 text-right font-bold text-emerald-850">PKR {item.monthlyFee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* A-Level Fee Card */}
            <div className="bg-white rounded-2xl border border-gray-250/70 overflow-hidden shadow-xs hover:border-emerald-500 transition-colors">
              <div className="bg-slate-800 text-white p-4">
                <h4 className="font-extrabold text-sm uppercase">Cambridge A-Levels Fee Standard</h4>
              </div>
              <div className="p-4">
                <table className="min-w-full text-xs">
                  <thead>
                    <tr className="border-b border-gray-150 text-gray-400 font-bold">
                      <th className="py-2 text-left">Program Segment</th>
                      <th className="py-2 text-right">Admission Fee</th>
                      <th className="py-2 text-right">Monthly Dues</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FEE_STRUCTURE.aLevel.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-50 last:border-b-0">
                        <td className="py-2 font-semibold text-gray-800">{item.grade}</td>
                        <td className="py-2 text-right text-gray-500">PKR {item.admissionFee.toLocaleString()}</td>
                        <td className="py-2 text-right font-bold text-emerald-850">PKR {item.monthlyFee.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
