import React from "react";

function SelectedCourses({ seleccionados, creditosTotales }) {
  return (
    <div>
      <h3>Cursos seleccionados</h3>
      {seleccionados.length === 0 ? (
        <p>No has seleccionado cursos todavía.</p>
      ) : (
        <ul>
          {seleccionados.map((curso) => (
            <li key={curso.id}>{curso.nombre}</li>
          ))}
        </ul>
      )}
      <p>Total créditos: {creditosTotales}</p>
    </div>
  );
}

export default SelectedCourses;
