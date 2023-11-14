import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="container mx-auto text-center mt-10">
      <h1 className="text-4xl font-bold mb-4">CALIFICACION DISTRIBUCION</h1>
      <p className="text-lg">Logear usuario para ingreso</p>
      <div className="mt-8">
        <Link to="/homes" className="text-blue-500 mx-4">Home</Link>
        <Link to="/login" className="text-blue-500 mx-4">Login</Link>
        <Link to="/empleados" className="text-blue-500 mx-4">Empleados</Link>
      </div>
    </div>
  );
}

export default Homepage;
