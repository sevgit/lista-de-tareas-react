import React, { useState, useEffect } from "react";
import ListaDeTareas from "../components/ListaDeTareas";

export default function PaginaTareas() {
  const [tareas, cambiarTareas] = useState([]);
  const [cargando, cambiarCargando] = useState(false);

  useEffect(() => {
    cargarTareas();
  }, []);

  function cargarTareas() {
    cambiarCargando(true);
    fetch("http://localhost:4000/tareas", { method: "GET" })
      .then((respuesta) => respuesta.json())
      .then((respuestaJson) => {
        cambiarCargando(false);
        cambiarTareas(respuestaJson);
      });
  }

  return (
    <main>
      <h1>Lista de tareas!</h1>
      <button onClick={cargarTareas}>Cargar :) </button>
      <form action="javascript:void(0);">
        <input
          id="tarea"
          type="text"
          name="tarea"
          placeholder="Descripción de la tarea"
        />
        <select name="prioridad" id="prioridad">
          <option value="" disabled selected>
            Prioridad
          </option>
          <option value="prioridad-baja">baja</option>
          <option value="prioridad-media">media</option>
          <option value="prioridad-alta">alta</option>
        </select>
        <button id="agregar">Agregar!</button>
      </form>
      <h3>Tareas</h3>
      <ListaDeTareas tareas={tareas} />
      {cargando && <div class="loader"></div>}
      <p>
        Para agregar tareas vamos a tener que hablar de eventos, el DOM y cómo
        interactuar con él
      </p>
    </main>
  );
}
