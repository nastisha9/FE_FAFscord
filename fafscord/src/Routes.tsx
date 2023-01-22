import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Lobby from "./pages/lobby/Index";
import Landing from "./pages/landing/Index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/lobby" component={Lobby} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
