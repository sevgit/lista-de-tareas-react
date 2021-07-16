import react from "react";
import "./ListaDeTareas.css";

function ListaDeTareas(props) {
  const tareas = props.tareas;

  /* 
  Funcion flecha:
  tarea => <Tarea titulo={tarea.titulo} /> */
  if (props.tareas.length === 0) {
    return <div>No hay tareas :(</div> 
  }

  return (
    <ul id="lista-tareas">
      {tareas.map(function (tarea) {
        return <Tarea titulo={tarea.titulo} prioridad={tarea.prioridad} />;
      })}
    </ul>
  );
}

function Tarea(props) {
  return <li className={props.prioridad}>{props.titulo}</li>;
}

export default ListaDeTareas;

/* 
function Tarea(titulo, completada) {
  console.log(titulo completada)
}
Tarea("pasear al toby", false, ...)
<Tarea titulo="Pasear al toby (prop)" completada={false} fechaFin="09/07/21" />

*/
