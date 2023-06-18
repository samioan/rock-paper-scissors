import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import styles from "./styles";

const JoinGameForm = ({
  joinRoom,
  gameId,
  createdName,
  onChangeGameId,
  onChangeName,
}) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="space-between"
    sx={styles.innerContainer}
  >
    <Typography align="center" sx={styles.title}>
      Choose a Game ID and a Nickname
    </Typography>
    <form
      onSubmit={joinRoom}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <TextField
        required
        label="Game ID"
        value={gameId}
        onChange={onChangeGameId}
      />
      <TextField
        required
        label="Nickname"
        value={createdName}
        onChange={onChangeName}
      />
      <Button type="submit" disableRipple sx={styles.button}>
        Join Game
      </Button>
    </form>
  </Grid>
);

export { JoinGameForm };
export default JoinGameForm;
