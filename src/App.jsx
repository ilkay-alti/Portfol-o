import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/routes/Detail";
import Home from "./pages/routes/Home";
import Navbar from "./pages/Navbar";
import Project from "./pages/routes/Project";
import Contact from "./pages/routes/Contact";
import Github from "./pages/routes/Github";

import { useSelector } from "react-redux";

const App = () => {
  const darkMode = useSelector((state) => state.theme.dark);
  console.log(darkMode);
  return (
    <div className={darkMode ? "dark" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navbar />}>
            <Route path="" element={<Home />} />
            <Route path="detail" element={<Detail />} />
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<Contact />} />
            <Route path="github" element={<Github />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
