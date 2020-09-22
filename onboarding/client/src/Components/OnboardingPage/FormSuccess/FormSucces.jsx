import React from "react";
import Tijdlijn from "./Tijdlijn";
import Typography from "@material-ui/core/Typography";

function FormSucces() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Bedankt voor het invullen van jouw gegevens.
      </Typography>
      <Typography variant="subtitle1">
        Je ontvangt vanuit ons een bevestiging zodra jouw manager je aanmelding
        heeft goedgekeurd. Nadien ontvang je vanuit ons het verzoek om jouw
        contract en andere belangrijke documenten te ondertekenen alvorens je
        kan inloggen in onze systemen. Bedankt namens het team van The Call
        Company.
      </Typography>
      <Tijdlijn />
    </React.Fragment>
  );
}

export default FormSucces;
