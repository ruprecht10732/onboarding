import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  Snackbar,
  Typography,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import Lottie from "lottie-react";
import React, { useState } from "react";
import Axios from "axios";
import * as Yup from "yup";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import CheckIcon from "@material-ui/icons/Check";
import inviteanimation from "../../Static/31185-email-sent.json";
import Link from "@material-ui/core/Link";
import MuiAlert from "@material-ui/lab/Alert";
import { Redirect } from "react-router-dom";
import authService from "../../services/auth.service";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.thecallcompany.nl">
        The Call Company
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const validationSchema = Yup.object({
  email: Yup.string().required("Dit is een verplicht veld"),
  wachtwoord: Yup.string().required("Dit is een verplicht veld"),
});

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backdropFilter: "blur(10px)",
  },
  buttonProgress: {
    color: "white",
  },
  main: {
    background: "#708090",
    margin: 0,
    padding: 0,
    minHeight: "100vh",
  },
}));

function Login({ setIsAuthenticated }) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [loggedin, setLoggedIn] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentUser, setCurrentUser] = useState(authService.getCurrentUser());

  const [waarden, setValues] = React.useState({
    showPassword: false,
  });

  const [initialValues, setInitialValues] = useState({
    email: "",
    wachtwoord: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setValues({ ...waarden, showPassword: !waarden.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function _submitForm(values, actions) {
    Axios({
      method: "POST",
      url: "https://api.thecallcompany.nl/api/user/login",
      data: {
        email: values.email,
        wachtwoord: values.wachtwoord,
      },
    })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
          setCurrentUser(authService.getCurrentUser());
          setLoggedIn(false);
          setOpen(true);
          setIsAuthenticated(true);
          setDisabled(true);
          setLoading(true);
          setTimeout(() => {
            actions.setSubmitting(false);
            actions.resetForm();
            setLoading(false);
            setDisabled(false);
            setSuccess(true);
          }, 1500);
        }
      })
      .catch((error) => {
        setLoading(false);
        setInitialValues({
          email: "",
          wachtwoord: "",
        });
        actions.setSubmitting(false);
        setLoggedIn(true);
        setOpen(true);
      });
  }

  return (
    <div className={classes.main}>
      {success && <Redirect to={`/gegevens-aanleveren/${currentUser.id}`} />}
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ minHeight: "80vh" }}
      >
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar open={open} autoHideDuration={6000}>
          <Alert
            onClose={handleClose}
            severity={loggedin ? "error" : "success"}
          >
            {loggedin ? "E-mailadres of wachtwoord is incorrect" : "Ingelogd!"}
          </Alert>
        </Snackbar>
        <Grid item container xs={11} sm={4} justify="center">
          <Grid item>
            <Lottie animationData={inviteanimation} />
          </Grid>
          <Paper style={{ padding: "3%" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Formik
                  enableReinitialize={true}
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={_submitForm}
                >
                  {({ isSubmitting, values }) => (
                    <Form>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Typography
                            variant="subtitle2"
                            style={{ color: "gray" }}
                          >
                            Voer je e-mailadres en wachtwoord in om in te loggen
                            en de aanmeld procedure te starten. Je kunt dit
                            tussentijds niet opslaan, zorg dat je je
                            bankgegevens en identificatie (geen rijbewijs) bij
                            de hand hebt.
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            fullWidth={true}
                            required
                            component={TextField}
                            name="email"
                            label="E-mailadres"
                            InputProps={{ autoFocus: true }}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <Field
                            fullWidth={true}
                            required
                            component={TextField}
                            label="Jouw wachtwoord"
                            name="wachtwoord"
                            type={waarden.showPassword ? "text" : "password"}
                            variant="filled"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                  >
                                    {waarden.showPassword ? (
                                      <Visibility />
                                    ) : (
                                      <VisibilityOff />
                                    )}
                                  </IconButton>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          container
                          xs={12}
                          alignItems="flex-start"
                          justify="center"
                          direction="row"
                        >
                          <Button
                            endIcon={<CheckIcon />}
                            color="primary"
                            type="submit"
                            variant="contained"
                            disabled={disabled}
                          >
                            Inloggen
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}

export default Login;
