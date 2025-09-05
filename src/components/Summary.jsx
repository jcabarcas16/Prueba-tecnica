import React from "react";

function Summary({ confirmarMatricula }) {
  return (
    <div>
      <button onClick={confirmarMatricula}>Confirmar Matrícula</button>
    </div>
  );
}

export default Summary;
