🎓 Sistema de Matriculación Académica (Prueba Técnica en React)

Aplicación web en React que permite a un estudiante iniciar sesión con su ID, visualizar los cursos disponibles de su semestre y realizar la matrícula cumpliendo con todas las validaciones establecidas.

🚀 Tecnologías utilizadas

React (Create React App)

CSS puro (responsive con media queries)

LocalStorage (simulación de persistencia)

JSON (datos simulados de estudiantes y cursos)


⚙️ Instalación y ejecución

Clona el repositorio: git clone https://github.com/jcabarcas16/Prueba-tecnica.git
cd matriculacion-academica

Instala dependencias:

npm install

Inicia la aplicación:

npm start

Abre en el navegador:

http://localhost:3000

📌 Funcionalidades principales

Inicio de sesión

El estudiante ingresa su ID único.

ID inválido → ❌ mensaje de error.

Estudiante no matriculado → ⚠️ mensaje de advertencia.

ID válido → ✅ acceso al sistema.

Asignación de cursos

Solo se muestran cursos:

Del semestre actual del estudiante.

Con cupo disponible.

Se pueden seleccionar múltiples cursos.

No se permite superar el límite de créditos.

Confirmación de matrícula

Al confirmar, se abre un modal con los cursos seleccionados.

Opciones:

Confirmar ✅ → se guarda en localStorage.

Cancelar ❌ → se cierra el modal.

Mensajes visuales

ID inválido → rojo.

No matriculado → amarillo.

Matrícula confirmada → verde.

Error de créditos → rojo.

Sesión cerrada → verde.

Cerrar sesión

Botón 🚪 para cerrar sesión y regresar a la pantalla de login.

Limpia selección de cursos y muestra mensaje de sesión cerrada.

📱 Responsividad

Adaptado a móviles, tablets y PC.

Botones e inputs se ajustan al ancho.

Cursos se muestran en columna en pantallas pequeñas.

Modal ocupa hasta el 90% del ancho en móviles.

👨‍💻 Autor

Desarrollado como Prueba Técnica en React por JESID CABARCAS ✨