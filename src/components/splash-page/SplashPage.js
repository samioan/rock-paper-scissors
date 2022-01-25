import React from "react";
import Typography from "@mui/material/Typography";

import CtaButton from "../cta-button";

import "./SplashPage.css";

const SplashPage = () => (
  <div className="general-container">
    <div className="items-container">
      <Typography align="center" variant="h1" className="title">
        Rock Paper Scissors
      </Typography>
      <Typography align="center" variant="h3" className="subtitle">
        An app for decision making!
      </Typography>
      <div className="button-container">
        <CtaButton
          color="secondary"
          size="large"
          variant="contained"
          label="Create Game"
          className="button"
          href="create-game"
        />
        <CtaButton
          color="warning"
          size="large"
          variant="contained"
          label="Join Game"
          className="button"
          href="join-game"
        />
      </div>
    </div>
  </div>
);

export { SplashPage };
export default SplashPage;
