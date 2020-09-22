import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import { makeStyles } from "@material-ui/core";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import MenuItem from "@material-ui/core/MenuItem";
import { Select } from "formik-material-ui";
import FormControl from "@material-ui/core/FormControl";
import { SimpleFileUpload } from "formik-material-ui";
import RecentActorsIcon from "@material-ui/icons/RecentActors";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function IdentiteitGegevens() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <RecentActorsIcon /> Identiteitsgegevens
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="type-native-simple">
              Type identificatie
            </InputLabel>
            <Field
              component={Select}
              name="type"
              inputProps={{
                id: "type-native-simple",
              }}
              autoFocus={true}
            >
              <MenuItem value={"identiteitskaart"}>Identiteitskaart</MenuItem>
              <MenuItem value={"paspoort"}>Paspoort</MenuItem>
            </Field>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label="Documentnummer"
            name="documentnummer"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Field
            fullWidth={true}
            required
            component={TextField}
            label="Burger Service Nummer"
            name="bsn"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Field
            required
            fullWidth={true}
            component={SimpleFileUpload}
            name="idvoorkant"
            label="Kopie ID kaart (voorkant)"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Field
            required
            fullWidth={true}
            component={SimpleFileUpload}
            name="idachterkant"
            label="Kopie ID kaart (achterkant)"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
