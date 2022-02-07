import React from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import CtaButton from "../cta-button";

import "./CreateGame.css";

const CreateGame = () => (
  <div>
    <div className="items-container">
      <TextField
        required
        id="create-textfield"
        label="Create Code"
        variant="filled"
      />
      <CtaButton
        color="secondary"
        size="large"
        variant="contained"
        label="Create Game"
      />
    </div>
    <IconButton className="back-button" href="/">
      <ArrowBackIcon className="back-icon" />
    </IconButton>
  </div>
);

export { CreateGame };
export default CreateGame;
