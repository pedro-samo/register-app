import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Clients from "./Components/Clients";
import Home from "./Components/Home";
import Product from "./Components/Product";

import "./Styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/produtos">
          <Product />
        </Route>
        <Route path="/clientes">
          <Clients />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
