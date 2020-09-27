import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Lottie from "lottie-react";
import React from "react";
import notfoundanimation from "../../Static/6734-404-error-glitch-2.json";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.thecallcompany.nl">
        The Call Company
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backdropFilter: "blur(10px)",
  },
  buttonProgress: {
    color: "white",
  },
  main: {
    background: "#708090",
    margin: 0,
    padding: 0,
    minHeight: "100vh",
  },
}));

function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ minHeight: "70vh" }}
      >
        <Grid item container xs={11} sm={8} justify="center">
          <Grid item>
            <Lottie animationData={notfoundanimation} />
          </Grid>
          <Paper style={{ padding: "3%" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                <Typography variant="h5">
                  <strong>Deze pagina bestaat niet</strong>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Link href="https://onboarding.thecallcompany.nl/">
                  Keer terug naar de homepagina
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}

export default NotFound;
