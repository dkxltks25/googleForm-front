import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../Layout";
import Survey from "../Route/Survey";
// 로그인

// 로그인x
const IsLoggedOut = () => (
  <Switch>
    <Route path="/" exact component={Layout} />
    <Route path="/create" component={Survey} />
  </Switch>
);
export default () => <IsLoggedOut />;
