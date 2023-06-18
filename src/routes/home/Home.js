import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { logo } from "images";

import styles from "./styles";
import withHomeProps from "./withHomeProps";
import { CreateGame, JoinGame } from "./components";

const Home = ({
  isCreateGameOpen,
  isJoinGameOpen,
  setCreateGame,
  setJoinGame,
  isGameCreated,
  buttons,
}) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    sx={styles.homeContainer}
  >
    <img src={logo} alt="Logo" />
    <Grid container justifyContent="center" gap={1} sx={styles.innerContainer}>
      {buttons.map(({ title, onClick, style }) => (
        <Button
          key={title}
          onClick={onClick}
          disabled={isGameCreated}
          sx={{ ...styles.button, ...styles[style] }}
        >
          {title}
        </Button>
      ))}
    </Grid>
    {isCreateGameOpen && <CreateGame />}
    {isJoinGameOpen && <JoinGame />}
  </Grid>
);

export { Home };
export default withHomeProps(Home);
