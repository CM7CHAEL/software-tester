import React from 'react';
import Navegacion from './components/Navegacion/Navegacion'
import Footer from './components/Footer/Footer'
import Routes from './components/Routes'

import './App.css';
function App() {
  return (
    <div className="App">
      <Navegacion></Navegacion>
      <Routes></Routes>
      <Footer></Footer>
  </div>
  );
}

export default App;
