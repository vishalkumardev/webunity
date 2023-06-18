import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Features from "./pages/Features";
import Teams from "./pages/Teams";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  AOS.init();

  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Services />
      <Features />
      <About />
      <Teams />
      <Contact />
      <Pricing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
