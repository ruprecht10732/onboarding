import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Welkom() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Welkom bij The Call Company!
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Leuk dat je bij ons komt werken. Om een goede start te kunnen maken
            hebben wij aanvullende gegevens van je nodig. Met deze gegevens
            zorgen wij ervoor dat we je accounts kunnen aanmaken, je een
            contract van ons krijgt, je kunt aangeven of je gebruik wilt maken
            van loonheffingskorting en, ook erg belangrijk, dat we je kunnen
            uitbetalen.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Wij vragen ook om een kopie van je id kaart, dit zijn wij wettelijk
            verplicht om in onze administratie te bewaren. Via onderstaande link
            kun je deze informatie vinden:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link
            target="_blank"
            rel="noopener"
            href="https://www.rijksoverheid.nl/onderwerpen/identificatieplicht/vraag-en-antwoord/wat-moet-ik-als-werkgever-doen-om-te-voldoen-aan-de-identificatieplicht"
          >
            Wat moet ik als werkgever doen om te voldoen aan de
            identificatieplicht?
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom>
            Alvast bedankt en een hartelijk welkom namens het hele team van The
            Call Company!
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
