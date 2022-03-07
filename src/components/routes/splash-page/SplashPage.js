import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { CtaButton } from "../../library";

import "./SplashPage.css";

const SplashPage = () => (
  <div className="splash-container">
    <Typography align="center" variant="h2" className="title">
      Rock Paper Scissors
    </Typography>
    <Typography align="center" variant="h4" className="subtitle">
      An app for decision making!
    </Typography>
    <Grid container direction="column" alignItems="center" justify="center">
      <CtaButton
        color="secondary"
        size="large"
        variant="outlined"
        label="Create Game"
        className="button"
        href="game-page"
      />
      <CtaButton
        color="warning"
        size="large"
        variant="outlined"
        label="Join Game"
        className="button"
        href="join-game"
      />
    </Grid>
  </div>
);

export { SplashPage };
export default SplashPage;
