import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import styles from "./styles";

const JoinGameError = ({ gameError, resetGameError }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="space-between"
  >
    <Typography sx={styles.error}>
      {gameError === "GAME_NOT_FOUND"
        ? "Game not found!"
        : "Game already has maximum amount of players!"}
    </Typography>
    <Button onClick={resetGameError} disableRipple sx={styles.button}>
      Return
    </Button>
  </Grid>
);

export { JoinGameError };
export default JoinGameError;
