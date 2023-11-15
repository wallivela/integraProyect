import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [correo, setCorreo] = useState("");
  const [pasword, setPasword] = useState("");

  const getCorreo = (evt) => {
    setCorreo(evt.target.value);
    console.log(correo);
  };
  const getPasword = (evt) => {
    setPasword(evt.target.value);
    console.log(pasword);
  };
  const handleRegister = (evt) => {
    evt.preventDefault();

    axios({
      url: "http://localhost:3000/users/login",  // Agrega el protocolo (http://)
      method: "POST",
      data: {
        correo: correo,
        pasword: pasword,
      },
    }).then((response) => {
      console.log(response);
    });   
  };

  return (
    <>
      <div className="container animated-background">
        <div className="login-box">
          <h2 className="text-2xl font-semibold mb-6">Iniciar sesión</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                placeholder="Correo electrónico"
                value={correo}
                onChange={getCorreo}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
                placeholder="Contraseña"
                value={pasword}
                onChange={getPasword}
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              onClick={handleRegister} // Cambia handleLogin por handleRegister
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
