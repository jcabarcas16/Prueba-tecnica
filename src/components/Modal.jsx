import React from "react";

function Modal({ isOpen, onClose, onConfirm, seleccionados }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Confirmar Matrícula</h3>
        <p>Estos son los cursos que seleccionaste:</p>
        <ul>
          {seleccionados.map((curso) => (
            <li key={curso.id}>
              {curso.nombre} ({curso.creditos} créditos)
            </li>
          ))}
        </ul>

        <div className="modal-actions">
          <button onClick={onConfirm}>Confirmar ✅</button>
          <button onClick={onClose}>Cancelar ❌</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
