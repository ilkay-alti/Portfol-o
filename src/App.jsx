import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/routes/Detail";
import Home from "./pages/routes/Home";
import Navbar from "./pages/Navbar";
import Project from "./pages/routes/Project";
import Contact from "./pages/routes/Contact";
import Github from "./pages/routes/Github";

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <div className="dark font-SpaceGrotesk ">
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
