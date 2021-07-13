import react from "react";
import "./ListaDeTareas.css";

function ListaDeTareas() {
  /* 
   1- Crear variable de estado "tareas"
   2- Hacer fetch de tareas de el servidor
   3- Colocar las tareas del servidor en la variable "tareas"
  
  */
  return (
    <ul id="lista-tareas">
      <Tarea titulo="Pasear al toby (prop)" />
      <Tarea titulo="Segunda Tarea :)" />
      <Tarea titulo="Tercera Tarea ⚛🧠" />
    </ul>
  );
}

function Tarea(props) {
  return <li className="prioridad-alta">{props.titulo}</li>;
}

export default ListaDeTareas;

/* 
function Tarea(titulo, completada) {
  console.log(titulo completada)
}
Tarea("pasear al toby", false, ...)
<Tarea titulo="Pasear al toby (prop)" completada={false} fechaFin="09/07/21" />

*/
