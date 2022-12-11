import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import styles from "./styles";

const GameCreation = ({ createGame, onChangeName, createdName }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="space-between"
    sx={styles.container}
  >
    <Typography sx={styles.title}>Choose a Nickname</Typography>
    <form
      onSubmit={createGame}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <TextField
        required
        label="Nickname"
        value={createdName}
        onChange={onChangeName}
        sx={styles.textfield}
      />
      <Button type="submit" sx={styles.button}>
        Create Game
      </Button>
    </form>
  </Grid>
);

export { GameCreation };
export default GameCreation;
