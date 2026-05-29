/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import CampusLife from "./pages/CampusLife";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";

// Helper component to scroll to top on path change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div id="school-app-layout" className="flex flex-col min-h-screen text-gray-800 antialiased font-sans">
        {/* Navigation bar Header */}
        <Navbar />

        {/* Primary Multi-Page Content Routes */}
        <div id="school-main-content-window" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback routing */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
}
