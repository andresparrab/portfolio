import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../views/aboutView";
import HomeView from "../views/homeView";
import RoutingPath from "./RoutingPath";
//import { Redirect } from "react-router-dom";

const Routing = (props: any) => {
  const mongo = "hello";
  return (
    <Router>
      {props.children}
      <Switch>
        <Route exact path={RoutingPath.aboutView} component={About}></Route>
        <Route component={HomeView} />
        <Route exact path={RoutingPath.NetflixView}></Route>
        <Route exact path={RoutingPath.exersiceView}></Route>
      </Switch>
    </Router>
  );
};

export default Routing;
