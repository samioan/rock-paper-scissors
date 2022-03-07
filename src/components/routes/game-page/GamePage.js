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
        Wins
      </Typography>
      <Typography align="left" variant="h6" className="score-text">
        Losses
      </Typography>
      <Typography align="left" variant="h6" className="score-text">
        Draws
      </Typography>
    </div>
    <Grid container alignItems="center" className="bottom-action-container">
      <Grid container className="game-buttons-container">
        <IconButton className="icon-button">
          <img src={rock} alt="rock" />
        </IconButton>
        <IconButton className="icon-button">
          <img src={paper} alt="paper" />
        </IconButton>
        <IconButton className="icon-button">
          <img src={scissors} alt="scissors" />
        </IconButton>
      </Grid>
      <div>
        <CtaButton
          className="leave-button"
          color="secondary"
          size="medium"
          variant="outlined"
          label="Leave Game"
          href="/"
        />
      </div>
    </Grid>
  </div>
);

export { GamePage };
export default GamePage;
