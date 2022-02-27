import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { CtaButton } from "../../library";

import "./CreateGame.css";

const CreateGame = () => (
  <div>
    <Grid container justifyContent="space-between" className="items-container">
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
        href="game-page"
      />
    </Grid>
    <IconButton className="back-button" href="/">
      <ArrowBackIcon className="back-icon" />
    </IconButton>
  </div>
);

export { CreateGame };
export default CreateGame;
