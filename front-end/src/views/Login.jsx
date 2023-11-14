import React, {useState } from 'react';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Correo electrónico:", email);
    console.log("Contraseña:", password);
  };

  return (
    <>
      <div className="container animated-background">
        <div className="login-box">
          <h2 className="text-2xl font-semibold mb-6">Iniciar sesión</h2>
          <form>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              onClick={handleLogin}
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
