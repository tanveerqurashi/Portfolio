import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion";

// Core Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";
import BackgroundEffects from "./components/BackgroundEffects";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onLoadComplete={() => setIsLoading(false)} />
        ) : (
          <div key="portfolio-site" className="min-h-screen text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
            {/* Global background grid, ambient blobs & spotlight */}
            <BackgroundEffects />

            {/* Layout Header / Navigation */}
            <Navbar />

            {/* Core Page Sections */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Certificates />
              <Contact />
            </main>

            {/* Layout Footer */}
            <Footer />

            {/* Global Actions / Widgets */}
            <ScrollToTop />
            
            {/* React Toastify popup portal */}
            <ToastContainer
              position="bottom-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
