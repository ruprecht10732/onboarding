import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function AdresGegevensDetails(props) {
  const { formValues } = props;
  const { straat, huisnummer, toevoeging, postcode, woonplaats } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="subtitle1" gutterBottom>
        Adresgegevens
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Straatnaam</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{straat}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Huisnummer</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{huisnummer}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Toevoeging</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>
              {toevoeging ? toevoeging : "Geen toevoeging"}
            </Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Postcode</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{postcode}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Woonplaats</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{woonplaats}</Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}
