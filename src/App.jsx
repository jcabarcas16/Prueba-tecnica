import React, { useState } from "react";
import estudiantesData from "./data/estudiantes.json";
import cursosData from "./data/cursos.json";
import Login from "./components/Login";
import CourseList from "./components/CourseList";
import SelectedCourses from "./components/SelectedCourses";
import Summary from "./components/Summary";
import Modal from "./components/Modal";
import Message from "./components/Message";
import "./App.css";

function App() {
  const [estudianteActivo, setEstudianteActivo] = useState(null);
  const [seleccionados, setSeleccionados] = useState([]);
  const [creditosTotales, setCreditosTotales] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const toggleCurso = (curso) => {
    const yaSeleccionado = seleccionados.find((c) => c.id === curso.id);

    if (yaSeleccionado) {
      setSeleccionados(seleccionados.filter((c) => c.id !== curso.id));
      setCreditosTotales(creditosTotales - curso.creditos);
    } else {
      if (
        creditosTotales + curso.creditos <= estudianteActivo.creditosPermitidos
      ) {
        setSeleccionados([...seleccionados, curso]);
        setCreditosTotales(creditosTotales + curso.creditos);
      } else {
        setMessage({
          type: "error",
          text: "❌ No puedes superar el límite de créditos",
        });
      }
    }
  };

  const abrirModal = () => {
    if (seleccionados.length === 0) {
      setMessage({
        type: "warning",
        text: "⚠️ Debes seleccionar al menos un curso antes de confirmar",
      });
      return;
    }
    setIsModalOpen(true);
  };

  const confirmarMatricula = () => {
    localStorage.setItem(
      `matricula_${estudianteActivo.id}`,
      JSON.stringify(seleccionados)
    );
    setIsModalOpen(false);
    setMessage({
      type: "success",
      text: "✅ Matrícula confirmada correctamente",
    });
  };

  if (!estudianteActivo) {
    return <Login estudiantes={estudiantesData} onLogin={setEstudianteActivo} />;
  }

  const cursosDisponibles = cursosData.filter(
    (c) =>
      c.semestre === estudianteActivo.semestre &&
      c.matriculados < c.limiteCupos
  );

  return (
    <div className="container">
      <h1>Sistema de Matriculación Académica</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Bienvenido {estudianteActivo.nombre}</h2>
        <button
          className="logout"
          onClick={() => {
            setEstudianteActivo(null);
            setSeleccionados([]);
            setCreditosTotales(0);
            setMessage({
              type: "success",
              text: "👋 Sesión cerrada correctamente",
            });
          }}
        >
          Cerrar sesión 🚪
        </button>
      </div>

      <p>
        <strong>Carrera:</strong> {estudianteActivo.carrera}
      </p>
      <p>
        <strong>Semestre actual:</strong> {estudianteActivo.semestre}
      </p>
      <p>
        <strong>Créditos permitidos:</strong>{" "}
        {estudianteActivo.creditosPermitidos}
      </p>

      <Message type={message.type} text={message.text} />

      <CourseList
        cursos={cursosDisponibles}
        seleccionados={seleccionados}
        toggleCurso={toggleCurso}
      />

      <SelectedCourses
        seleccionados={seleccionados}
        creditosTotales={creditosTotales}
      />

      <Summary confirmarMatricula={abrirModal} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmarMatricula}
        seleccionados={seleccionados}
      />
    </div>
  );
}

export default App;
