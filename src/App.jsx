import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio searchQuery={query} />} />
      </Routes>

      <Footer />
    </>
  );
}
