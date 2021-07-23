import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import PaginaTareas from "./Paginas/PaginaTareas";
import PaginaContador from "./Paginas/PaginaContador";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/tareas">
            <PaginaTareas />
          </Route>
          <Route path="/contador">
            <PaginaContador />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
