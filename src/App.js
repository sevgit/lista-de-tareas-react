import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import PaginaTareas from "./Paginas/PaginaTareas";
import PaginaContador from "./Paginas/PaginaContador";
import PaginaLogin from "./Paginas/PaginaLogin";
import { useState } from "react";

function app() {
  const [usuarioLogueado, cambiarUsuarioLogueado] = useState('Giovanni');
  return (
    <div className="App">
      <BrowserRouter>
        <Nav usuarioLogueado={usuarioLogueado}/>
        <Switch>
          <Route path="/tareas">
            <PaginaTareas />
          </Route>
          <Route path="/contador">
            <PaginaContador />
          </Route>
          <Route path="/login">
            <PaginaLogin usuarioLogueado={usuarioLogueado} cambiarUsuarioLogueado={cambiarUsuarioLogueado} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default app;
