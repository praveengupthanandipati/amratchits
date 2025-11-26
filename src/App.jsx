import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '@flaticon/flaticon-uicons/css/all/all.css';
import './styles/App.scss'
import gsap from 'gsap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App
