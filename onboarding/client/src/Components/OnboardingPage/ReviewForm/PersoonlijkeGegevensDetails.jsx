import React from "react";
import { Typography, Grid } from "@material-ui/core";
import * as dayjs from "dayjs";

export default function PersoonlijkeGegevensDetails(props) {
  const { formValues } = props;
  const {
    geslacht,
    naam,
    achternaam,
    geboortedatum,
    nationaliteit,
    telefoon,
  } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="subtitle1" gutterBottom>
        Persoonlijke gegevens
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Geslacht</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{geslacht}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Naam</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{naam}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Achternaam</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{achternaam}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Geboortedatum</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>
              {dayjs(geboortedatum).format("DD-MM-YYYY")}
            </Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Nationaliteit</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{nationaliteit}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Telefoonnummer</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{telefoon}</Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}
