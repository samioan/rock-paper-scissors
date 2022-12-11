import Grid from "@mui/material/Grid";

import styles from "./styles";
import { GameCreation, GameNavigation } from "./components";
import withCreateGameProps from "./withCreateGameProps";

const CreateGame = ({
  createGame,
  onChangeName,
  goToGame,
  createdName,
  gameId,
  isGameCreated,
}) => (
  <Grid sx={styles.container}>
    {!isGameCreated && (
      <GameCreation
        createGame={createGame}
        onChangeName={onChangeName}
        createdName={createdName}
      />
    )}
    {isGameCreated && <GameNavigation goToGame={goToGame} gameId={gameId} />}
  </Grid>
);

export { CreateGame };
export default withCreateGameProps(CreateGame);
