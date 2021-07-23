import React, { useState, useEffect } from "react";

export default function PaginaContador() {
  const [contador, cambiarContador] = useState(0);
  const [contador2, cambiarContador2] = useState(0);

  useEffect(() => {
    document.title = `El contador 2 es ${contador2}`;
  }, [contador2]);

  useEffect(() => {
    document.title = `El contador 1 es ${contador}`;
  }, [contador]);

  return (
    <main>
      <div>
        <h2>Contador usando estado</h2>
        <span>valor: {contador}</span>
      </div>
      <div>
        <h2>Contador2 usando estado</h2>
        <span>valor: {contador2}</span>
      </div>

      <button
        onClick={function () {
          cambiarContador(contador + 1);
        }}
      >
        Contador+
      </button>
      <button
        onClick={function () {
          cambiarContador2(contador2 + 1);
        }}
      >
        Contador2+
      </button>
    </main>
  );
}
