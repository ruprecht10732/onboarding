import {
  Button,
  Chip,
  Grid,
  makeStyles,
  Typography,
  Hidden,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import Arbeidsovereenkomst from "./Arbeidsovereenkomst";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import SignatureCanvas from "react-signature-canvas";
import Axios from "axios";
import { Switch, Route } from "react-router-dom";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import TodayIcon from "@material-ui/icons/Today";
import DoneIcon from "@material-ui/icons/Done";
import { Redirect, useParams } from "react-router-dom";
import * as dayjs from "dayjs";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import LockIcon from "@material-ui/icons/Lock";
import { Waypoint } from "react-waypoint";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    width: "50%",
    position: "absolute",
    left: "49%",
    backdropFilter: "blur(15px)",
  },
  leftPanel: {
    background: "#E4E4E4",
    padding: "2%",
    overflowY: "auto",
    listStyle: "none",
    maxHeight: "100%",
    "&::-webkit-scrollbar": {
      width: "1.5em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  rightPanel: {
    background: "#FFFFFF",
    padding: "2%",
    overflowY: "auto",
    listStyle: "none",
    height: "100%",
    "&::-webkit-scrollbar": {
      width: "1.5em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  signaturePad: {
    border: "dotted 1px black",
    marginLeft: "2%",
  },
  paper: {
    padding: "1%",
  },
  pdfViewer: {
    width: "100%",
  },
}));

const validationSchema = Yup.object({
  volledigeNaam: Yup.string().required("Dit is een verplicht veld"),
  ondertekenDatum: Yup.string().required("Dit is een verplicht veld"),
  ondertekeningPlaats: Yup.string().required("Dit is een verplicht veld"),
});

const now = dayjs();

function Contract() {
  const classes = useStyles();
  const [start, setStart] = useState(false);
  const [loading, setLoading] = useState(true);
  const [imageURL, setImageUrl] = useState(null);
  const [signed, setSigned] = useState(false);
  const [location, setLocation] = useState(false);
  const [gegevens, setGegevens] = useState(false);
  const [submitButton, setSubmitButton] = useState(false);

  const [initialValues, setInitialValues] = useState({
    volledigeNaam: "",
    ondertekenDatum: now.format("D MMMM YYYY"),
    ondertekeningPlaats: "",
  });

  const [data, setData] = useState({
    fullname: "",
    datum: now.format("D MMMM YYYY"),
    plaats: "",
    latitude: "",
    longitude: "",
  });

  const handleStart = () => {
    setStart(true);
  };

  const handleSubmit = (values, actions) => {
    setData((prevData) => {
      return {
        ...prevData,
        fullname: values.volledigeNaam,
        plaats: values.ondertekeningPlaats,
      };
    });
    setGegevens(true);
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setData({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocation(true);
      });
    }
  };

  const sigCanvas = useRef({});

  const clear = () => {
    sigCanvas.current.clear();
    setSigned(false);
    setImageUrl(null);
  };
  const save = () => {
    setImageUrl(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    setSigned(true);
  };
  //    async function _submitForm(values, actions) {
  //      Axios({
  //        method: "PUT",
  //        url: `http://localhost:5050/api/invite/${id}`,
  //        data: {
  //          email: values.email,
  //          wachtwoord: values.wachtwoord,
  //        },
  //      })
  //        .then((response) => {
  //          setOpen(true);
  //          setDisabled(true);
  //          setTimeout(() => {
  //            setLoading(true);
  //            setSuccess(true);
  //            actions.setSubmitting(false);
  //          }, 2000);
  //        })
  //        .catch((error) => {
  //          actions.setSubmitting(false);
  //          setOpen(true);
  //          setDisabled(true);
  //          console.log(error);
  //        });
  //    }

  return (
    <Grid container>
      <Hidden smDown>
        <Backdrop className={classes.backdrop} open={!start}>
          <LockIcon style={{ fontSize: 100 }} />
        </Backdrop>
      </Hidden>
      <Grid item container xs={12} style={{ maxHeight: "100vh" }}>
        <Grid
          item
          container
          spacing={1}
          xs={12}
          sm={6}
          className={classes.leftPanel}
        >
          {!start && (
            <>
              <Grid item xs={12}>
                <Typography variant="h2" component="h1">
                  <strong>Hallo Robin,</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h3" component="p">
                  Hier kan jij de belangrijkste documenten ondertekenen die wij
                  nodig hebben vóór je bij ons begint met werken.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" component="p">
                  Controleer goed jouw gegevens, sommige informatie is
                  automatisch vooraf ingevuld. Mocht er iets niet kloppen of zie
                  je een andere fout, meld dit dan aan je leidinggevende.
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ marginTop: "1%" }}>
                <Button
                  onClick={handleStart}
                  color="primary"
                  variant="contained"
                >
                  Starten met ondertekenen
                </Button>
              </Grid>
            </>
          )}
          {start && (
            <Formik
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="h2" component="h1">
                        <strong>Onderteken document</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ margin: "0% 0 0 1%" }}>
                      <Typography variant="body1" component="p">
                        <strong>Tips:</strong> Lees het goed door. Neem de tijd
                        en bij onduidelijkheden: Stel je vraag aan een
                        leidinggevende.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ margin: "0% 0 0 1%" }}>
                      <Typography variant="subtitle2" component="p">
                        <em>
                          Heb je het contract gelezen en ga je akkoord? Zet dan
                          op het veld hieronder je handtekening.
                        </em>
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.signaturePad}
                    >
                      <Grid item xs={12}>
                        <SignatureCanvas
                          ref={sigCanvas}
                          penColor="#6476DD"
                          canvasProps={{
                            width: 500,
                            className: "sigCanvas",
                          }}
                        />

                        <Grid item xs={12}>
                          <Chip
                            variant="outlined"
                            label="Reset handtekeningveld"
                            onClick={clear}
                            onDelete={clear}
                            style={{
                              border: "dashed 0px black",
                              marginBottom: "0.5%",
                              marginLeft: "2%",
                            }}
                            disabled={signed ? true : false}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{
                          borderTop: "dotted 1px black",
                          padding: "3%",
                        }}
                      >
                        <Chip
                          variant="outlined"
                          label="1: Bevestig handtekening*"
                          onClick={save}
                          style={{
                            border: "dotted 1px black",
                            marginBottom: "3%",
                          }}
                          disabled={signed ? true : false}
                          icon={
                            signed ? (
                              <DoneIcon style={{ color: "green" }} />
                            ) : (
                              <VerifiedUserIcon />
                            )
                          }
                        />
                        <Chip
                          component="button"
                          type="submit"
                          variant="outlined"
                          label="2: Bevestig gegevens*"
                          style={{
                            border: "dotted 1px black",
                            marginBottom: "3%",
                            marginLeft: "1%",
                            cursor: "pointer",
                          }}
                          disabled={gegevens ? true : signed ? false : true}
                          icon={
                            gegevens ? (
                              <DoneIcon style={{ color: "green" }} />
                            ) : (
                              <LocationOnIcon />
                            )
                          }
                        />
                        <Chip
                          variant="outlined"
                          label="3: Bevestig locatie*"
                          onClick={handleLocation}
                          style={{
                            border: "dotted 1px black",
                            marginBottom: "3%",
                            marginLeft: "1%",
                          }}
                          disabled={location ? true : gegevens ? false : true}
                          icon={
                            location ? (
                              <DoneIcon style={{ color: "green" }} />
                            ) : (
                              <GpsFixedIcon />
                            )
                          }
                        />

                        <Grid
                          item
                          xs={12}
                          style={{
                            borderTop: "dotted 1px black",
                            marginBottom: "3%",
                          }}
                        >
                          <Field
                            required
                            component={TextField}
                            name="volledigeNaam"
                            fullWidth={true}
                            disabled={gegevens ? true : signed ? false : true}
                            variant={
                              gegevens
                                ? "filled"
                                : signed
                                ? "outlined"
                                : "filled"
                            }
                            autoFocus={signed ? true : false}
                            InputProps={{
                              endAdornment: gegevens ? (
                                <VerifiedUserIcon style={{ color: "green" }} />
                              ) : (
                                <VerifiedUserIcon />
                              ),
                            }}
                            placeholder="Volledige naam*"
                          />
                          <Field
                            required
                            placeholder="Plaats van ondertekening*"
                            component={TextField}
                            name="ondertekeningPlaats"
                            variant={
                              gegevens
                                ? "filled"
                                : signed
                                ? "outlined"
                                : "filled"
                            }
                            disabled={gegevens ? true : signed ? false : true}
                            fullWidth={true}
                            InputProps={{
                              endAdornment: gegevens ? (
                                <LocationOnIcon style={{ color: "green" }} />
                              ) : (
                                <LocationOnIcon />
                              ),
                            }}
                          />
                          <Field
                            required
                            label="Datum van vandaag"
                            component={TextField}
                            name="ondertekenDatum"
                            fullWidth={true}
                            variant="filled"
                            InputProps={{
                              endAdornment: gegevens ? (
                                <TodayIcon style={{ color: "green" }} />
                              ) : (
                                <TodayIcon />
                              ),
                            }}
                            disabled
                          />
                        </Grid>
                        {location && (
                          <Grid item xs={12}>
                            {!submitButton ? (
                              <Typography variant="subtitle2" color="error">
                                Lees eerst het gehele document
                              </Typography>
                            ) : null}
                            <Button
                              type="submit"
                              endIcon={<FingerprintIcon />}
                              style={{
                                border: "dotted 1px black",
                              }}
                              disabled={!submitButton ? true : false}
                            >
                              {!submitButton
                                ? "Je moet het document eerst lezen"
                                : "Ik heb het document gelezen en ik ga akkoord"}
                            </Button>
                          </Grid>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          )}
        </Grid>
        <Grid
          item
          container
          spacing={1}
          xs={12}
          sm={6}
          className={classes.rightPanel}
        >
          <Switch>
            <Route exact path="/ondertekenen/overeenkomst">
              <Arbeidsovereenkomst
                imageURL={imageURL}
                data={data}
                setSubmitButton={setSubmitButton}
              />
            </Route>

            <Route exact path="/overeenkomst/integriteitsverklaring">
              <Arbeidsovereenkomst imageURL={imageURL} />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contract;
