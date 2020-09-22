import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { KeyboardDatePicker } from "formik-material-ui-pickers";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import { Select } from "formik-material-ui";
import PersonPinIcon from "@material-ui/icons/PersonPin";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PersoonlijkeGegevens(props) {
  const classes = useStyles();
  const {
    formField: {
      geslacht,
      naam,
      achternaam,
      geboortedatum,
      nationaliteit,
      telefoon,
    },
  } = props;

  const today = new Date();
  const maxDate =
    today.getFullYear() -
    18 +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <PersonPinIcon /> Persoonlijke gegevens
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="geslacht-native-simple">
              {geslacht.label}
            </InputLabel>
            <Field
              component={Select}
              name={geslacht.name}
              inputProps={{
                id: "geslacht-native-simple",
              }}
              autoFocus={true}
            >
              <MenuItem value={"man"}>Man</MenuItem>
              <MenuItem value={"vrouw"}>Vrouw</MenuItem>
              <MenuItem value={"overige"}>Overige</MenuItem>
            </Field>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label={naam.label}
            name={naam.name}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label={achternaam.label}
            name={achternaam.name}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            component={KeyboardDatePicker}
            label={geboortedatum.label}
            name={geboortedatum.name}
            maskChar="_"
            disableFuture
            maxDate={maxDate}
            maxDateMessage="Je moet ouder zijn dan 18 jaar om je te kunnen registreren"
            minDateMessage="Helaas, er is iets misgegaan, je mag al lang met pensioen"
            invalidDateMessage="Dit is geen gelidige invoer. Voorbeeld: 01/01/2002"
            openTo="year"
            format="dd-MM-yyyy"
            views={["year", "month", "date"]}
            fullWidth={true}
            required
            autoOk={true}
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label={nationaliteit.label}
            name={nationaliteit.name}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label={telefoon.label}
            name={telefoon.name}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
