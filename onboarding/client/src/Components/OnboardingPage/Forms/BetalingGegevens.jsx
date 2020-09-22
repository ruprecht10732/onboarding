import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import PaymentIcon from "@material-ui/icons/Payment";

export default function BetalingGegevens() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <PaymentIcon /> Betalinggegevens
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label="Rekeningnummer staat op naam van"
            name="banknaam"
            autoFocus={true}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label="IBAN rekeningnummer"
            name="iban"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
