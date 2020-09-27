import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField } from "formik-material-ui";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import {
  CircularProgress,
  IconButton,
  InputAdornment,
  Paper,
  Typography,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import CheckIcon from "@material-ui/icons/Check";
import Axios from "axios";
import Backdrop from "@material-ui/core/Backdrop";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import * as Yup from "yup";
import { Redirect, useParams } from "react-router-dom";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Lottie from "lottie-react";
import sendanimation from "../../Static/31085-sending-email.json";
import sadanimation from "../../Static/872-empty-list.json";

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

const validationSchema = Yup.object({
  wachtwoord: Yup.string()
    .required("Dit is een verplicht veld")
    .min(10, "Je moet minimaal 10 tekens gebruiken")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{10,})",
      "Het wachtwoord moet minimaal 1 hoofdletter bevatten, 1 kleine letter, 1 nummer en 1 speciaal karakter zoals: !@#$%^&*"
    ),
});

export default function SignIn() {
  let { id } = useParams();
  const classes = useStyles();
  const [initialValues, setInitialValues] = useState({
    email: "",
    key: "",
    wachtwoord: "",
  });
  const [visible, setVisible] = useState(false); //change back to false
  const [loading, setLoading] = useState(true); // change back to true
  const [waarden, setValues] = React.useState({
    showPassword: false,
  });
  const [open, setOpen] = React.useState(false);
  const [exist, setExist] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [succes, setSuccess] = useState(false);

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
      method: "PUT",
      url: `https://api.thecallcompany.nl/api/invite/${id}`,
      data: {
        email: values.email,
        wachtwoord: values.wachtwoord,
      },
    })
      .then((result) => {
        if (result) {
          setOpen(true);
          setDisabled(true);
          setTimeout(() => {
            setSuccess(true);
            actions.setSubmitting(false);
          }, 2000);
        }
      })
      .catch((error) => {
        actions.setSubmitting(false);
        setExist(true);
        setOpen(true);
        setDisabled(true);
        console.log(error);
      });
  }

  useEffect(() => {
    const url = `https://api.thecallcompany.nl/api/invite/${id}`;
    Axios.get(url)
      .then((result) => {
        if (result.data.length > 0) {
          setInitialValues({
            email: result.data[0].email,
            key: result.data[0].key,
            wachtwoord: "",
          });
          setVisible(true);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        setInitialValues({
          email: "",
          key: "",
          wachtwoord: "",
        });
      });
  }, [id]);

  return (
    <div className={classes.main}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ minHeight: "70vh" }}
      >
        {succes ? <Redirect to="/login" /> : false}
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar open={open} autoHideDuration={6000}>
          <Alert onClose={handleClose} severity={exist ? "error" : "success"}>
            {exist
              ? "Gebruiker bestaat al, vraag je manager om hulp"
              : "Wachtwoord aangemaakt!"}
          </Alert>
        </Snackbar>
        <Grid item container xs={11} sm={4} justify="center">
          <Grid item>
            {visible ? (
              <Lottie
                animationData={sendanimation}
                style={{ maxWidth: "150px" }}
              />
            ) : (
              <Lottie animationData={sadanimation} />
            )}
          </Grid>
          <Paper style={{ padding: "3%" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Grid item xs={12}>
                  <Typography component="h1" variant="subtitle1">
                    {visible
                      ? "Verifieer account"
                      : "Deze uitnodiging is verlopen"}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" style={{ color: "gray" }}>
                    {visible
                      ? `Je hebt een uitnodiging ontvangen vanuit The Call Company, zodra je op
          "BEVESTIGEN" hebt geklikt, kun je je account gaan aanmaken. Zorg dat
          je je bankpas en identificatie bij de hand hebt.`
                      : "Jouw uitnodiging is verlopen, vraag je manager een nieuwe uitnodiging te versturen"}
                  </Typography>
                </Grid>
                {visible && (
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
                            <Field
                              fullWidth={true}
                              required
                              component={TextField}
                              name="email"
                              label="Bevestig jouw e-mailadres"
                              disabled
                              InputProps={{ autoFocus: true }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Field
                              fullWidth={true}
                              required
                              component={TextField}
                              name="key"
                              label="Persoonlijke code"
                              disabled
                            />
                          </Grid>
                          {visible && (
                            <Grid item xs={12}>
                              <Field
                                fullWidth={true}
                                required
                                disabled={disabled ? true : false}
                                component={TextField}
                                label="Verzin een sterk wachtwoord"
                                name="wachtwoord"
                                type={
                                  waarden.showPassword ? "text" : "password"
                                }
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
                          )}
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
                              disabled={disabled ? true : false}
                            >
                              Bevestigen
                            </Button>
                          </Grid>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                )}
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
