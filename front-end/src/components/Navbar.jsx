// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/homes" className="text-white pr-4">Home</Link>
          <Link to="/login" className="text-white pr-4">Login</Link>
          <Link to="/empleados" className="text-white">Empleados</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
