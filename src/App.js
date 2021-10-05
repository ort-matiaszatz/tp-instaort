import React from "react";
import "./style.css";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Home from './Home';
import Usuario from './Usuario';


export default function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/?busqueda" component={Home} />
        <Route exact path="/:user" component={Usuario} />
    </div>
  </Router>
  );
}
