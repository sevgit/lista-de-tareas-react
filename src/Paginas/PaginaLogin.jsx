import React from 'react';

export default function PaginaLogin(props) {
  return (
    <main>
      <input type="text" value={props.usuarioLogueado} onChange={(e) => props.cambiarUsuarioLogueado(e.target.value)} />
    </main>
  );
}