import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@flaticon/flaticon-uicons/css/all/all.css';
import './styles/App.scss'
import gsap from 'gsap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import React, { useState, useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
