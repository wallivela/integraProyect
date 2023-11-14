import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./views/Login.jsx";
import Homes from "./views/Homes.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/Homes" element={<Homes />}></Route>
      <Route path="/Login" element={<Login />}></Route>
    </Routes>
  );
}
export default App;
