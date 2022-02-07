import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import CtaButton from "../cta-button";

import "./JoinGame.css";

const JoinGame = () => (
  <div>
    <div className="items-container">
      <TextField
        required
        id="join-textfield"
        label="Enter Code"
        variant="filled"
      />
      <CtaButton
        color="warning"
        size="large"
        variant="contained"
        label="Join Game"
      />
    </div>
    <IconButton className="back-button" href="/">
      <ArrowBackIcon className="back-icon" />
    </IconButton>
  </div>
);

export { JoinGame };
export default JoinGame;
