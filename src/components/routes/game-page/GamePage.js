import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { CtaButton } from "../../library";
import { paper, rock, scissors } from "../../../images";

import "./GamePage.css";

const GamePage = () => (
  <div>
    <div className="score-container">
      <Typography align="left" variant="h6" className="score-text">
        Wins:
      </Typography>
      <Typography align="left" variant="h6" className="score-text">
        Losses:
      </Typography>
      <Typography align="left" variant="h6" className="score-text">
        Draws:
      </Typography>
    </div>
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      className="bottom-action-container"
    >
      <Grid
        container
        justifyContent="space-between"
        className="game-buttons-container"
      >
        <IconButton>
          <img src={rock} alt="rock" />
        </IconButton>
        <IconButton>
          <img src={paper} alt="paper" />
        </IconButton>
        <IconButton>
          <img src={scissors} alt="scissors" />
        </IconButton>
      </Grid>
      <div>
        <CtaButton
          className="leave-button"
          color="secondary"
          size="medium"
          variant="contained"
          label="Leave Game"
          href="/"
        />
      </div>
    </Grid>
  </div>
);

export { GamePage };
export default GamePage;
