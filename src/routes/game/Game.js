import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { logo } from "images";

import styles from "./styles";
import withGameProps from "./withGameProps";
import { SessionEnd } from "./components";

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
  selections,
}) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      sx={styles.container}
    >
      <img src={logo} alt="Logo" />
      <Grid
        container
        direction="column"
        alignItems="center"
        sx={styles.innerContainer}
      >
        {sessionEnded && <SessionEnd />}
        {!sessionEnded && (
          <>
            <Typography sx={styles.playerName}>{playerName}</Typography>
            <Divider sx={styles.divider} />
            <Typography sx={styles.text}>{`Wins: ${playerWins}`}</Typography>
            <Typography
              sx={styles.text}
            >{`Losses: ${playerLosses}`}</Typography>
            <Typography sx={styles.text}>{`Draws: ${playerDraws}`}</Typography>
            <Divider sx={styles.divider} />
            {!playerSelection && !playerResult && (
              <Grid container direction="column" alignItems="center">
                <Typography sx={styles.selectionTitle}>
                  Make your selection
                </Typography>
                <Grid container gap={1} justifyContent="center">
                  {selections.map(({ img, label }) => (
                    <IconButton
                      key={label}
                      disableRipple
                      onClick={() => setSelection(label)}
                      sx={styles.iconButton}
                    >
                      <img src={img} alt={label} style={styles.iconButton} />
                    </IconButton>
                  ))}
                </Grid>
              </Grid>
            )}
            {playerSelection && (
              <Typography
                sx={styles.choiceTitle}
              >{`You chose ${playerSelection}`}</Typography>
            )}
            <Divider sx={styles.divider} />
            {playerResult && (
              <>
                <Typography sx={styles.result}>{resultMessage}</Typography>
                <Button onClick={onRetry} sx={styles.playAgainButton}>
                  Play Again
                </Button>
                <Divider sx={styles.divider} />
              </>
            )}
          </>
        )}

        <Button onClick={onLeave} sx={styles.leaveButton}>
          Leave Game
        </Button>
      </Grid>
    </Grid>
  );
};

export { Game };
export default withGameProps(Game);
