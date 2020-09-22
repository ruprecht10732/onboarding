import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function BetalingGegevensDetails(props) {
  const { formValues } = props;
  const { banknaam, iban } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="subtitle1" gutterBottom>
        Bankgegevens
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Rekeninghouder</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{banknaam}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>IBAN rekeningnummer</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{iban}</Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}
