import React, { useState } from "react";
import Message from "./Message";

function Login({ estudiantes, onLogin }) {
  const [inputId, setInputId] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleLogin = () => {
    const estudiante = estudiantes.find((e) => e.id === parseInt(inputId));
    if (estudiante) {
      if (!estudiante.matriculado) {
        setMessage({
          type: "warning",
          text: "⚠️ El estudiante no está matriculado en el periodo actual",
        });
        return;
      }
      onLogin(estudiante);
    } else {
      setMessage({ type: "error", text: "❌ ID de estudiante inválido" });
    }
  };

  return (
    <div className="container">
      <h1>Inicio de Sesión</h1>
      <p>Ingrese su ID de estudiante:</p>
      <input
        type="text"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        placeholder="Ej: 101"
      />
      <button onClick={handleLogin}>Ingresar</button>

      <Message type={message.type} text={message.text} />
    </div>
  );
}

export default Login;
