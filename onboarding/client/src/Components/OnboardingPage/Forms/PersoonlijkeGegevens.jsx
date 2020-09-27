import React, { useMemo } from "react";
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
import { subYears } from "date-fns";
import Nationaliteiten from "../FormModel/nationaliteiten";
import uuid from "react-uuid";

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

  let today = new Date();
  const maxDate = subYears(today, 18);
  const nationaliteitenLijst = Nationaliteiten;

  const lijst = useMemo(
    () =>
      nationaliteitenLijst.map((nationaliteit) => (
        <MenuItem key={uuid()} value={nationaliteit.nationaliteit}>
          {nationaliteit.nationaliteit}
        </MenuItem>
      )),
    [nationaliteitenLijst]
  );

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Persoonlijke gegevens
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
              <MenuItem key="man" value={"Man"}>
                Man
              </MenuItem>
              <MenuItem key="vrouw" value={"Vrouw"}>
                Vrouw
              </MenuItem>
              <MenuItem key="overige" value={"Overige"}>
                Overige
              </MenuItem>
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
        <Grid item xs={12} sm={6}>
          <Field
            component={KeyboardDatePicker}
            label={geboortedatum.label}
            name={geboortedatum.name}
            maskChar="_"
            disableFuture
            maxDate={maxDate}
            maxDateMessage="Je moet ouder zijn dan 18 jaar om je te kunnen registreren"
            minDateMessage="Helaas, er is iets misgegaan, je mag al lang met pensioen"
            invalidDateMessage="Dit is geen geldige invoer. Voorbeeld: 01/01/2002"
            openTo="year"
            format="dd-MM-yyyy"
            views={["year", "month", "date"]}
            fullWidth={true}
            autoOk={true}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="nationaliteit-native-simple">
              {nationaliteit.label}
            </InputLabel>
            <Field
              component={Select}
              name={nationaliteit.name}
              inputProps={{
                id: "nationaliteit-native-simple",
              }}
              autoFocus={true}
            >
              {lijst}
            </Field>
          </FormControl>
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
