import React from "react";
import { Link, Typography } from "@material-ui/core/";

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.thecallcompany.nl/">
        The Call Company
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
