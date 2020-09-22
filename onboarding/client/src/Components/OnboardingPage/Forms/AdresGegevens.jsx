import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import RoomIcon from "@material-ui/icons/Room";

export default function AdresGegevens() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <RoomIcon /> Adresgegevens
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label="Straat"
            name="straat"
            autoFocus={true}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label="Huisnummer"
            name="huisnummer"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            fullWidth={true}
            component={TextField}
            label="Toevoeging"
            name="toevoeging"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label="Postcode"
            name="postcode"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label="Woonplaats"
            name="woonplaats"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
