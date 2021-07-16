import "./App.css";
import ListaDeTareas from "./components/ListaDeTareas";
import { useState } from "react";

function App() {
  const [contador, cambiarContador] = useState(0);
  const [pagina, cambiarPagina] = useState("tareas"); // Paginas = [tareas, contador]
  const [tareas, cambiarTareas] = useState([]);
  const [cargando, cambiarCargando] = useState(false);

  function cargarTareas() {
    cambiarCargando(true);
    fetch('http://localhost:4000/tareas', {method: 'GET'})
      .then(respuesta => respuesta.json())
      .then(respuestaJson => {
        cambiarCargando(false);
        cambiarTareas(respuestaJson);
      });
  }

  if (pagina === "tareas") {
    return (
      <div className="App">
        <nav>
          <button
            onClick={function () {
              cambiarPagina("tareas");
            }}
          >
            Mostrar Tareas
          </button>
          <button
            onClick={function () {
              cambiarPagina("contador");
            }}
          >
            Mostrar Contador
          </button>
          <button
            onClick={cargarTareas}
          >
            Cargar tareas
          </button>
        </nav>
        <span>Pagina actual: {pagina}</span>
        <main>
          <h1>Lista de tareas!</h1>

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
            Para agregar tareas vamos a tener que hablar de eventos, el DOM y
            cómo interactuar con él
          </p>
        </main>
      </div>
    );
  } else if (pagina === "contador") {
    return (
      <div className="App">
        <nav>
          <button
            onClick={function () {
              cambiarPagina("tareas");
            }}
          >
            Mostrar Tareas
          </button>

          <button
            onClick={function () {
              cambiarPagina("contador");
            }}
          >
            Mostrar Contador
          </button>
        </nav>
        <span>Pagina actual: {pagina}</span>
        <main>
          <h2>Contador usando estado</h2>
          <span>valor: {contador}</span>

          <button
            onClick={function () {
              cambiarContador(contador + 1);
            }}
          >
            +
          </button>
        </main>
      </div>
    );
  }

  return <div className="App">Error!</div>;
}

/* 
  useState!
  - Destructuring 🤔
  - Eventos
  - Dibujado condicional
  - Loops! 
  - useState
    - Qué es? Para qué sirve?
    - Re-render (props y state)
*/

export default App;
