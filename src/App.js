import React from 'react';
import './App.css';
import Navegacion from './components/Navegacion/Navegacion'
import Fundamentos from './components/Fundamentos'
import ProcesoTesting from './components/ProcesoTesting'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navegacion></Navegacion>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Fundamentos} />
        <Route path="/proceso" component={ProcesoTesting} />
      </Switch>
      </BrowserRouter>
      <Footer></Footer>
  </div>
  );
}

export default App;
