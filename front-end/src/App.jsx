import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homes from "./views/Homes";
import Login from "./views/Login";
import Empleados from "./views/Empleados";
import Homepage from "./views/Homepage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/empleados" element={<Empleados />} />
      </Routes>
    </>
  );
}

export default App;
