import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import "./App.css";
import Game from "./pages/Game";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";




export default function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar query={query} setQuery={setQuery} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio searchQuery={query} />} />
        <Route path="/game" element={<Game />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}
