import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import TemporaryMain from "temporaryMain";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <TemporaryMain />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}
