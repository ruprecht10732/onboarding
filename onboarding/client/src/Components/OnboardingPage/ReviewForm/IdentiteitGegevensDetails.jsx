import React from "react";
import { Typography, Grid } from "@material-ui/core";

export default function IdentiteitGegevensDetails(props) {
  const { formValues } = props;
  const { type, documentnummer, bsn } = formValues;
  return (
    <Grid item container direction="column" xs={12} sm={6}>
      <Typography variant="subtitle1" gutterBottom>
        Identiteitgegevens
      </Typography>
      <Grid container>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Type</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{type}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Documentnummer</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{documentnummer}</Typography>
          </Grid>
        </React.Fragment>
        <React.Fragment>
          <Grid item xs={6}>
            <Typography gutterBottom>
              <strong>Burger Service Nummer</strong>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography gutterBottom>{bsn}</Typography>
          </Grid>
        </React.Fragment>
      </Grid>
    </Grid>
  );
}
