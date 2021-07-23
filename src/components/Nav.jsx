import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/tareas">
        <button>Mostrar Tareas</button>
      </Link>

      <Link to="/contador">
        <button>Mostrar Contador</button>
      </Link>
    </nav>
  );
}
