import React from "react";
import { Switch, Route } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import nlLocale from "date-fns/locale/nl";
import DateFnsUtils from "@date-io/date-fns";
import { CssBaseline } from "@material-ui/core";

import Form from "../OnboardingPage/Form";
import Confirm from "../Confirm/Confirm";
import Login from "../Login/Login";
import Contract from "../Contract/Contract";

function Layout(props) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={nlLocale}>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Confirm />
        </Route>
        <Route exact path="/invite">
          <Confirm />
        </Route>
        <Route exact path="/invite/:id">
          <Confirm />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/gegevens-aanleveren">
          <Form />
        </Route>
        <Route path="/ondertekenen">
          <Contract />
        </Route>
      </Switch>
    </MuiPickersUtilsProvider>
  );
}

export default Layout;
