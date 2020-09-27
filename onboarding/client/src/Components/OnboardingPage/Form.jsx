import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Footer/Footer";
import Axios from "axios";
import Lottie from "lottie-react";
import useranimation from "../../Static/3619-profile.json";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  CircularProgress,
  Paper,
  Hidden,
  Grid,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import AdresGegevens from "./Forms/AdresGegevens";
import PersoonlijkeGegevens from "./Forms/PersoonlijkeGegevens";
import IdentiteitGegevens from "./Forms/IdentiteitGegevens";
import NoodContactGegevens from "./Forms/NoodContactGegevens";
import BetalingGegevens from "./Forms/BetalingGegevens";
import FormReview from "./ReviewForm/FormReview";
import FormSucces from "./FormSuccess/FormSucces";
import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import authService from "../../services/auth.service";
import { withRouter } from "react-router-dom";

const steps = [
  "Persoonlijk",
  "Adres",
  "Identiteit",
  "Noodcontact",
  "Bank",
  "Controleren",
];
const { formId, formField } = checkoutFormModel;

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#708090",
    minHeight: "100vh",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto",
      background: "#708090",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const style = {
  height: 100,
};

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <PersoonlijkeGegevens formField={formField} />;
    case 1:
      return <AdresGegevens formField={formField} />;
    case 2:
      return <IdentiteitGegevens formField={formField} />;
    case 3:
      return <NoodContactGegevens formField={formField} />;
    case 4:
      return <BetalingGegevens formField={formField} />;
    case 5:
      return <FormReview />;
    default:
      throw new Error("Unknown step");
  }
}

function FormStepper({ logout, ...rest }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const currentUser = authService.getCurrentUser();
  console.log(currentUser);

  async function _submitForm(values, actions) {
    Axios({
      method: "POST",
      url: `https://api.thecallcompany.nl/api/user/${currentUser.id}`,
      data: {
        geslacht: values.geslacht,
        naam: values.naam,
        achternaam: values.achternaam,
        geboortedatum: values.geboortedatum,
        nationaliteit: values.nationaliteit,
        telefoon: values.telefoon,
        noodContactNaam: values.noodContactNaam,
        noodContactAchternaam: values.noodContactAchternaam,
        noodContactTelefoon: values.noodContactTelefoon,
        type: values.type,
        documentnummer: values.documentnummer,
        bsn: values.bsn,
        idvoorkant: values.idvoorkant,
        idachterkant: values.idachterkant,
        banknaam: values.banknaam,
        iban: values.iban,
        straat: values.straat,
        huisnummer: values.huisnummer,
        toevoeging: values.toevoeging,
        postcode: values.postcode,
        woonplaats: values.woonplaats,
      },
      headers: { Authorization: `Bearer ${currentUser.token}` },
    })
      .then((response) => {
        actions.setSubmitting(false);
        actions.resetForm();
        setActiveStep(activeStep + 1);
      })
      .catch((error) => {
        actions.setSubmitting(false);
        console.log(error);
      });
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <Grid container className={classes.root}>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Lottie animationData={useranimation} style={style} />
          <Hidden smDown>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Hidden>
          <React.Fragment>
            {activeStep === steps.length ? (
              <FormSucces />
            ) : (
              <Formik
                enableReinitialize={true}
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form id={formId}>
                    {_renderStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button
                          onClick={_handleBack}
                          className={classes.button}
                        >
                          Vorige
                        </Button>
                      )}
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}
                      >
                        {isLastStep ? "Verzenden" : "Volgende"}
                      </Button>

                      {isSubmitting && (
                        <CircularProgress
                          size={24}
                          className={classes.buttonProgress}
                        />
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </React.Fragment>
        </Paper>
        <Footer />
      </main>
    </Grid>
  );
}
export default withRouter(FormStepper);
