// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome, AiOutlineLogin, AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Iconos de React en los enlaces */}
          <Link to="/" className="text-white flex items-center">
            <AiOutlineHome className="mr-2" />
            Home
          </Link>
          <Link to="/login" className="text-white flex items-center">
            <AiOutlineLogin className="mr-2" />
            Login
          </Link>
          <Link to="/empleados" className="text-white flex items-center">
            <AiOutlineUser className="mr-2" />
            Empleados
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
