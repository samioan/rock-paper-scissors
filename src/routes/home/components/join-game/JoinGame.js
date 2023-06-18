import Grid from "@mui/material/Grid";

import styles from "./styles";
import withJoinGameProps from "./withJoinGameProps";
import { JoinGameForm, JoinGameError } from "./components";

const JoinGame = ({
  joinRoom,
  gameError,
  gameId,
  createdName,
  onChangeGameId,
  onChangeName,
  resetGameError,
}) => (
  <Grid sx={styles.container}>
    {!gameError && (
      <JoinGameForm
        joinRoom={joinRoom}
        gameId={gameId}
        createdName={createdName}
        onChangeGameId={onChangeGameId}
        onChangeName={onChangeName}
      />
    )}
    {gameError && (
      <JoinGameError gameError={gameError} resetGameError={resetGameError} />
    )}
  </Grid>
);

export { JoinGame };
export default withJoinGameProps(JoinGame);
