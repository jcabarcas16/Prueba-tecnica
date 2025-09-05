import React from "react";

function CourseList({ cursos, seleccionados, toggleCurso }) {
  return (
    <div>
      <h3>Cursos disponibles</h3>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            {curso.nombre} ({curso.creditos} créditos) - Cupos:{" "}
            {curso.limiteCupos - curso.matriculados}
            <button onClick={() => toggleCurso(curso)}>
              {seleccionados.find((c) => c.id === curso.id)
                ? "Quitar"
                : "Seleccionar"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
