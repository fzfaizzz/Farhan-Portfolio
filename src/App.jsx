import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Main from "./pages/Main";
import HireMe from "./pages/HireMe";
import Worq from "./pages/Worq";

function App() {
  return (
    <Router>
      <div id="main">
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="/work" element={<Worq />} />
          {/* <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
