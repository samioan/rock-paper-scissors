import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { logo, rock, paper, scissors } from "images";
import withGameProps from "./withGameProps";

const Game = ({
  playerName,
  playerWins,
  playerLosses,
  playerDraws,
  playerSelection,
  setSelection,
  playerResult,
  onRetry,
  resultMessage,
  onLeave,
  sessionEnded,
}) => {
  return (
    <Grid container direction="column" alignItems="center" sx={{ py: 4 }}>
      <img src={logo} alt="Logo" />
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={{
          mt: 2,
          bgcolor: "#f2e9eb",
          p: 2,
          borderRadius: 4,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
          width: 264,
        }}
      >
        {sessionEnded && (
          <Typography sx={{ color: "#31383f" }}>
            The session has ended.
          </Typography>
        )}
        {!sessionEnded && (
          <>
            <Typography sx={{ color: "#31383f", mb: 2 }}>
              {playerName}
            </Typography>
            <Typography
              sx={{ color: "#31383f" }}
            >{`Wins: ${playerWins}`}</Typography>
            <Typography
              sx={{ color: "#31383f" }}
            >{`Losses: ${playerLosses}`}</Typography>
            <Typography
              sx={{ color: "#31383f" }}
            >{`Draws: ${playerDraws}`}</Typography>
            {!playerSelection && !playerResult && (
              <Grid
                container
                direction="column"
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <Typography sx={{ color: "#31383f", mb: 1 }}>
                  Make your selection
                </Typography>
                <Grid container gap={1} justifyContent="center">
                  <IconButton
                    disableRipple
                    onClick={() => setSelection("rock")}
                    sx={{ width: 32, height: 32 }}
                  >
                    <img
                      src={rock}
                      alt="Rock"
                      style={{ width: 32, height: 32 }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => setSelection("paper")}
                    sx={{ width: 32, height: 32 }}
                  >
                    <img
                      src={paper}
                      alt="Paper"
                      style={{ width: 32, height: 32 }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={() => setSelection("scissors")}
                    sx={{ width: 32, height: 32 }}
                  >
                    <img
                      src={scissors}
                      alt="Scissors"
                      style={{ width: 32, height: 32 }}
                    />
                  </IconButton>
                </Grid>
              </Grid>
            )}
          </>
        )}
        {!sessionEnded && playerSelection && (
          <Typography
            sx={{ color: "#31383f", mt: 2 }}
          >{`You chose ${playerSelection}`}</Typography>
        )}
        {!sessionEnded && playerResult && (
          <>
            <Typography sx={{ color: "#31383f", mt: 2, mb: 2 }}>
              {resultMessage}
            </Typography>
            <Button
              onClick={onRetry}
              sx={{
                bgcolor: "rgba(254, 221, 137, 0.5)",
                borderRadius: "32px",
                color: "#31383f",
                px: 2,
                py: 1,
                width: 150,
                boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
                "&:hover": {
                  bgcolor: "rgba(254, 221, 137, 1)",
                },
              }}
            >
              Play Again
            </Button>
          </>
        )}
        <Button
          onClick={onLeave}
          sx={{
            mt: 1,
            bgcolor: "transparent",
            borderRadius: "32px",
            color: "#31383f",
            px: 2,
            py: 1,
            width: 150,
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          Leave Game
        </Button>
      </Grid>
    </Grid>
  );
};

export { Game };
export default withGameProps(Game);
