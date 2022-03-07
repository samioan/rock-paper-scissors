import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { CtaButton } from "../../library";

import "./JoinGame.css";

const JoinGame = () => (
  <div>
    <Grid container justifyContent="center" className="join-game-container">
      <TextField
        required
        id="join-textfield"
        label="Enter Code"
        variant="filled"
        color="warning"
      />
      <CtaButton
        className="join-button"
        color="warning"
        size="large"
        variant="outlined"
        label="Join Game"
        href="game-page"
      />
    </Grid>
    <IconButton className="back-button" href="/">
      <ArrowBackIcon className="back-icon" />
    </IconButton>
  </div>
);

export { JoinGame };
export default JoinGame;
