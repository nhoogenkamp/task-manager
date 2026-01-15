import React from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
