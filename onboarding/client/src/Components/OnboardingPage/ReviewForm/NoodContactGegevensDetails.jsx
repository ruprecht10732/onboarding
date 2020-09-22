import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function NoodContactGegevensDetails(props) {
  const { formValues } = props;
  const {
    noodContactNaam,
    noodContactAchternaam,
    noodContactTelefoon,
  } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="subtitle1" gutterBottom>
        Nood contactpersoon gegevens
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Naam</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{noodContactNaam}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Achternaam</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{noodContactAchternaam}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Telefoonnummer</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{noodContactTelefoon}</Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}
