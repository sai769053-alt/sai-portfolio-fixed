import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/projects";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("auth") === "true");
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
    navigate("/portfolio");
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/portfolio" element={isAuthenticated ? <Portfolio onLogout={handleLogout} /> : <Navigate to="/login" />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/resume" element={<Resume/>}/>
    </Routes>
  );
}
