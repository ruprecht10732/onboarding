import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@material-ui/core";
import PersoonlijkeGegevensDetails from "./PersoonlijkeGegevensDetails";
import AdresGegevensDetails from "./AdresGegevensDetails";
import IdentiteitGegevensDetails from "./IdentiteitGegevensDetails";
import NoodContactGegevensDetails from "./NoodContactGegevensDetails";
import BetalingGegevensDetails from "./BetalingGegevensDetails";

export default function ReviewOrder() {
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Controleer je gegevens
      </Typography>
      <Grid container spacing={3}>
        <PersoonlijkeGegevensDetails formValues={formValues} />
        <AdresGegevensDetails formValues={formValues} />
        <IdentiteitGegevensDetails formValues={formValues} />
        <NoodContactGegevensDetails formValues={formValues} />
        <BetalingGegevensDetails formValues={formValues} />
      </Grid>
    </React.Fragment>
  );
}
