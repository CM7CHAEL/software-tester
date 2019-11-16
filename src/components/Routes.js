import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Fundamentos from '../components/Fundamentos/Fundamentos'
import ProcesoTesting from '../components/ProcesoTesting'

function Routes() {
  return (
    <div className="Proceso">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Fundamentos} />
          <Route path="/proceso" component={ProcesoTesting} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
