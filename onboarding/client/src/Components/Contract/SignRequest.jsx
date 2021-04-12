import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import signature from "../../Static/25238-signature.json";
import Axios from "axios";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";

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
  code: Yup.string().required("Dit is een verplicht veld"),
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

function SignRequest() {
  const classes = useStyles();
  let { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    email: "",
    code: "",
  });

  useEffect(() => {
    const url = `https://api.thecallcompany.nl/api/signdocument/${id}`;
    Axios.get(url)
      .then((result) => {
        if (result.data.length > 0) {
          setInitialValues({
            email: result.data[0].email,
            key: result.data[0].key,
            wachtwoord: "",
          });
          setLoading(false);
        } else {
          setLoading(true);
        }
      })
      .catch((error) => {
        setInitialValues({
          email: "",
          code: "",
        });
      });
  }, [id, loading]);


  return (
    <div className={classes.main}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ minHeight: "70vh" }}
      >
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Grid item xs={4} container justify="center">
          <Grid item>
            <Lottie animationData={signature} style={{ width: "10vw" }} />
          </Grid>
          <Paper style={{ padding: "3%" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                >
                  {(values, submitting) => (
                    <Form>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <Grid item xs={12}>
                            <Typography
                              variant="subtitle2"
                              style={{ color: "gray" }}
                            >
                              Je hebt een verzoek ontvangen om een document te
                              ondertekenen. Bevestig hier jouw e-mail adres en
                              druk op starten om te beginnen
                            </Typography>
                          </Grid>
                          <Field
                            component={TextField}
                            name="email"
                            label="Bevestig hier jouw e-mailadres"
                            required
                            InputProps={{ autoFocus: true }}
                            fullWidth={true}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            component={TextField}
                            name="code"
                            label="Persoonlijke code"
                            required
                            disabled
                            fullWidth={true}
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
                            type="submit"
                            color="primary"
                            variant="contained"
                          >
                            Starten
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

export default SignRequest;
