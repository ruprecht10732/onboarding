import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import nlLocale from "date-fns/locale/nl";
import DateFnsUtils from "@date-io/date-fns";
import { CssBaseline } from "@material-ui/core";
import Form from "../OnboardingPage/Form";
import Confirm from "../Confirm/Confirm";
import Login from "../Login/Login";
import SignRequest from "../Contract/SignRequest";
import NotFound from "../NotFound/NotFound";
import ProtectedRoute from "../../services/protectedRoute";

function Layout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={nlLocale}>
      <CssBaseline />
      <Switch>
        <Route exact path="/">
          <Login setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route exact path="/login">
          <Login setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route exact path="/invite/:id">
          <Confirm />
        </Route>
        <ProtectedRoute
          isAuthenticated={isAuthenticated}
          path="/gegevens-aanleveren/:id"
          logout={logout}
          component={Form}
        />
        <Route path="/ondertekenen">
          <SignRequest />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route exact path="*">
          <NotFound />
          <Redirect from="*" to="/404" />
        </Route>
      </Switch>
    </MuiPickersUtilsProvider>
  );
}

export default Layout;
