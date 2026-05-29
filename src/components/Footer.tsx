import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { SCHOOL_INFO } from "../data/schoolData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Upper Content segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-600 text-white rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Conceptual School
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Leading the path of academic distinction in Faisalabad with concept-based methodologies integrated with solid ethical and Islamic values.
            </p>
            <div className="flex items-center space-x-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="h-4 w-4" />
              <span>Registered & Affiliated Institution</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              School Routes
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link id="footer-link-home" to="/" className="hover:text-white hover:underline transition-colors">Overview Home</Link>
              </li>
              <li>
                <Link id="footer-link-academics" to="/academics" className="hover:text-white hover:underline transition-colors">Academic Systems</Link>
              </li>
              <li>
                <Link id="footer-link-campus" to="/campus-life" className="hover:text-white hover:underline transition-colors">Campus Facilities</Link>
              </li>
              <li>
                <Link id="footer-link-admissions" to="/admissions" className="hover:text-white hover:underline transition-colors">Admissions & Fees</Link>
              </li>
              <li>
                <Link id="footer-link-contact" to="/contact" className="hover:text-white hover:underline transition-colors">Get in Touch</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Timing summaries */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              General Timings
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex justify-between">
                <span>Primary (Gr. 1–5):</span>
                <span className="text-white">8:00 AM – 1:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Middle (Gr. 6–8):</span>
                <span className="text-white">7:45 AM – 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Secondary (Matric):</span>
                <span className="text-white">7:30 AM – 2:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Intermediate / O-A:</span>
                <span className="text-white">7:30 AM/8:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Location details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Campus Location
            </h3>
            <div className="flex items-start space-x-3 text-sm">
              <MapPin className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-slate-400 leading-relaxed">
                {SCHOOL_INFO.location}
              </span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-slate-300 font-medium">+92 (041) 555-8291</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
                <span className="text-slate-300 font-medium">admissions@conceptual.edu.pk</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower segment copyrights */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {currentYear} {SCHOOL_INFO.name}. All rights reserved in stayana road campus Faisalabad.</p>
          <p className="mt-1">Designed based on exact institutional documentation and administrative blueprints.</p>
        </div>
      </div>
    </footer>
  );
}
