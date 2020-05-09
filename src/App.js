import React, { useEffect, Fragment } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

const App = () => {
  useEffect(() => {
    //initialize Material UI
    M.AutoInit();
  });
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div className="container teal lighten-5">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
