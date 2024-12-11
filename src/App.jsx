import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lenis from "@studio-freight/lenis"; // Import Lenis
import Header from "./component/Header";
import Main from "./pages/Main";
import HireMe from "./pages/HireMe";
import Worq from "./pages/Worq";

function App() {
  const scrollRef = useRef(null); // Reference for the scroll container

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      el: scrollRef.current, // Set the container
      smooth: true,          // Enable smooth scrolling
    });

    // Animation loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup Lenis instance on component unmount
    };
  }, []);

  return (
    <Router>
      <div id="main" ref={scrollRef}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="/work" element={<Worq />} />
          {/* Additional routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
