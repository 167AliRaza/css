import { useState, FormEvent } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  ShieldAlert, 
  HelpCircle, 
  ChevronDown 
} from "lucide-react";
import { SCHOOL_INFO } from "../data/schoolData";

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: "",
    candidateName: "",
    emailName: "",
    phoneName: "",
    targetLevel: "Grade 1",
    inquiryMessage: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.parentName && formData.phoneName) {
      setSubmitted(true);
      // Let parent check details in state
    }
  };

  const handleReset = () => {
    setFormData({
      parentName: "",
      candidateName: "",
      emailName: "",
      phoneName: "",
      targetLevel: "Grade 1",
      inquiryMessage: "",
    });
    setSubmitted(false);
  };

  const faqList = [
    {
      q: "Where is the Conceptual School System located exactly in Faisalabad?",
      a: "Our state-of-the-art campus is situated near Fish Farm Stayana Road, Makkah City, Faisalabad. This central, easily accessible site is connected through all major transport routes."
    },
    {
      q: "Are the academic blocks separate for boys and girls?",
      a: "Yes, the school is built on a modern custom architectural layout that offers strictly separate academic blocks for boys and girls to ensure complete regulatory safety and support."
    },
    {
      q: "Does the school offer Cambridge Assessment curriculums?",
      a: "Absolutely. We offer complete O-Level (O1 to O3) and A-Level streams (with specialized pre-medical, engineering, business, and CS blocks) led by certified Cambridge instructors."
    },
    {
      q: "How can parents check attendance and exam reports?",
      a: "Parents receive immediate push update notifications via our dedicated mobile application backed by our biometric entrance gateway. Student grades and homework are tracked continuously in the Student LMS."
    },
    {
      q: "What scholarships and sibling discounts are available?",
      a: "We offer Merit Scholarships (for exceptional results), Sibling Discounts (for families with multiple children), Hafiz-e-Quran Scholarships, Need-Based support, and athletic Sport Scholarships."
    },
    {
      q: "Are school buses safe and GPS-tracked?",
      a: "Yes. Every single bus in our fleet is GPS-tracked with real-time tracking for parents, on-board CCTV monitoring, and responsible female attendants accompanying junior students."
    }
  ];

  return (
    <div id="contact-page-container" className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div id="contact-header" className="bg-teal-950 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 to-slate-900/60 mix-blend-multiply" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-emerald-400 text-xs font-semibold uppercase tracking-widest block mb-2">Instant Communications</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Contact &amp; Inquiries</h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Get in touch with Stayana Road admissions block coordinates, submit questions online, or check parent FAQs.
          </p>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-20">

        {/* 1. COORDINATES & INQUIRY FORM */}
        <section id="form-coordination-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact coordinates panel info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-emerald-900/10 border border-emerald-500/15 p-6 sm:p-8 rounded-2xl space-y-6 text-slate-800">
              <h3 className="text-base sm:text-lg font-bold text-emerald-950 uppercase tracking-tight">Admission Office Coordinates</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Parents are welcome to visit our physical help-desk setup during general operations to inspect labs and hold discussions.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-3 text-xs sm:text-sm">
                  <MapPin className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Campus Address</strong>
                    <span className="text-gray-600 leading-snug">{SCHOOL_INFO.location}</span>
                  </div>
                </div>

                <div className="flex gap-3 text-xs sm:text-sm">
                  <Phone className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Contact Lines</strong>
                    <span className="text-gray-650 block text-gray-600">+92 (041) 555-8291</span>
                    <span className="text-gray-550 text-xs block text-gray-500">Secured admissions desk support</span>
                  </div>
                </div>

                <div className="flex gap-3 text-xs sm:text-sm">
                  <Mail className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Electronic E-Mails</strong>
                    <span className="text-gray-650 block text-gray-600">admissions@conceptual.edu.pk</span>
                    <span className="text-gray-650 block text-gray-600">info@conceptual.edu.pk</span>
                  </div>
                </div>

                <div className="flex gap-3 text-xs sm:text-sm">
                  <Clock className="h-5 w-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Office Working Hours</strong>
                    <span className="text-gray-600">Monday — Saturday: 8:00 AM – 3:30 PM</span>
                    <span className="text-orange-700 text-xs block font-semibold mt-1">Closed on Public &amp; State Holidays</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom high contrast graphic mock map */}
            <div className="bg-white border border-gray-250 rounded-2xl p-6 shadow-xs text-center space-y-4">
              <div className="p-1 px-3 bg-slate-100 border inline-block text-[10px] font-bold text-gray-500 rounded-sm font-mono tracking-widest">
                GEOGRAPHIC MAP COORDINATES
              </div>
              
              {/* Symbolic styled map layout */}
              <div className="h-44 bg-slate-900 rounded-xl relative overflow-hidden text-left p-4 flex flex-col justify-between border">
                <div className="border border-white/10 p-2 rounded-lg bg-teal-950/40 text-[10px] text-emerald-400 font-mono">
                  LAT: 31.4282° N | LND: 73.1259° E
                </div>
                
                <div className="flex items-center gap-2.5">
                  <span className="h-3 w-3 bg-red-600 rounded-full animate-ping shrink-0" />
                  <span className="h-3 w-3 bg-red-500 rounded-full absolute shrink-0" />
                  <div className="text-[11px] text-white">
                    <strong className="block">Stayana Road Hub</strong>
                    <span className="text-[10px] text-slate-350 text-slate-400">Near Campus Fish Farm</span>
                  </div>
                </div>

                <span className="text-[10px] text-slate-400 font-medium block">→ Faisalabad bounds • District Sector</span>
              </div>
            </div>
          </div>

          {/* Inquiry form block */}
          <div className="lg:col-span-1" /> {/* Layout Spacer */}
          
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-950 mb-1">Inquire Online</h3>
            <p className="text-xs text-gray-500 mb-6">Fill the electronic coordinates register below. Our admissions controller will trace response within 24 working hours.</p>

            {submitted ? (
              <div id="inquiry-success-panel" className="p-8 text-center bg-emerald-50 border border-emerald-150 rounded-2xl space-y-4 animate-fadeIn">
                <div className="h-12 w-12 bg-emerald-700 text-white rounded-full flex items-center justify-center mx-auto text-lg shadow-sm">
                  ✓
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-emerald-950 uppercase">Form Registry Logged</h4>
                  <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                    Thank you <strong className="text-emerald-950">{formData.parentName}</strong>, your inquiry for <strong className="text-emerald-950">{formData.candidateName}</strong> to join <strong className="text-emerald-950">{formData.targetLevel}</strong> has been saved.
                  </p>
                </div>
                <div className="pt-4 border-t border-emerald-100 flex justify-center gap-3">
                  <button 
                    onClick={handleReset} 
                    className="px-4 py-2 bg-emerald-700 text-white border border-emerald-800 rounded-lg text-xs font-semibold hover:bg-emerald-800 transition-colors pointer-events-auto cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form id="online-inquiry-form" onSubmit={handleSubmit} className="space-y-4">
                
                {/* Inputs pair */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Parent/Guardian Name *</label>
                    <input 
                      id="input-parent-name"
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      className="block w-full text-xs sm:text-sm p-3 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Candidate Student Name</label>
                    <input 
                      id="input-candidate-name"
                      type="text"
                      placeholder="e.g. Ahmad Ali"
                      value={formData.candidateName}
                      onChange={(e) => setFormData({...formData, candidateName: e.target.value})}
                      className="block w-full text-xs sm:text-sm p-3 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                    <input 
                      id="input-email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.emailName}
                      onChange={(e) => setFormData({...formData, emailName: e.target.value})}
                      className="block w-full text-xs sm:text-sm p-3 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Phone No. *</label>
                    <input 
                      id="input-phone"
                      type="tel"
                      required
                      placeholder="e.g., +92 300 1234567"
                      value={formData.phoneName}
                      onChange={(e) => setFormData({...formData, phoneName: e.target.value})}
                      className="block w-full text-xs sm:text-sm p-3 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Target Academic Grade</label>
                  <select 
                    id="input-target-level"
                    value={formData.targetLevel}
                    onChange={(e) => setFormData({...formData, targetLevel: e.target.value})}
                    className="block w-full text-xs sm:text-sm p-3 border border-gray-200 rounded-xl bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Grade 1">Grade 1 (Primary)</option>
                    <option value="Grade 6">Grade 6 (Middle)</option>
                    <option value="Grade 9">Grade 9 (Matric)</option>
                    <option value="ICS (Grade 11-12)">ICS (Intermediate)</option>
                    <option value="O-Level Model">Cambridge O-Level</option>
                    <option value="A-Level Model">Cambridge A-Level</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Inquiry Message</label>
                  <textarea 
                    id="input-message"
                    rows={4}
                    placeholder="Provide additional details or questions regarding transport, scholarships, or timings..."
                    value={formData.inquiryMessage}
                    onChange={(e) => setFormData({...formData, inquiryMessage: e.target.value})}
                    className="block w-full text-xs sm:text-sm p-3 border border-gray-200 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button 
                  id="inquiry-submit-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center p-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-emerald-700 hover:bg-emerald-800 transition-colors pointer-events-auto cursor-pointer"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Logger Inquiry Submission
                </button>

              </form>
            )}
          </div>
        </section>

        {/* 2. FREQUENTLY ASKED FAQs SECTION */}
        <section id="faq-accordions" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-emerald-700 text-xs font-semibold uppercase tracking-widest block mb-1">Standard Questions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Parent FAQs &amp; Help Desk</h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Browse typical institutional queries from admissions, curriculum, to transport safety.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-emerald-500 transition-colors">
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  type="button"
                  className="w-full text-left p-5 flex justify-between items-center font-bold text-xs sm:text-sm text-gray-950 focus:outline-hidden"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`h-4 w-4 text-emerald-700 transition-transform ${activeFaq === idx ? "rotate-180" : ""}`} />
                </button>
                
                {activeFaq === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-gray-600 border-t border-slate-50 leading-relaxed bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
