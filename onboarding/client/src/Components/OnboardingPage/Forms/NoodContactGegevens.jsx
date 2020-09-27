import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Field } from "formik";
import { TextField } from "formik-material-ui";

export default function AdresGegevens() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Noodcontact persoon
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label="Naam"
            name="noodContactNaam"
            autoFocus={true}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label="Achternaam"
            name="noodContactAchternaam"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label="Telefoonnummer"
            name="noodContactTelefoon"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
