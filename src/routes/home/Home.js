import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { logo } from "images";
import { CreateGame, JoinGame } from "./components";
import withHomeProps from "./withHomeProps";

const Home = ({
  isCreateGameOpen,
  isJoinGameOpen,
  setCreateGame,
  setJoinGame,
  isGameCreated,
}) => (
  <Grid container direction="column" alignItems="center" sx={{ py: 4 }}>
    <img src={logo} alt="Logo" />
    <Grid container justifyContent="center" gap={1} sx={{ mt: 2 }}>
      <Button
        disableRipple
        onClick={setCreateGame}
        sx={{
          bgcolor: "rgba(221, 142, 164, 0.5)",
          borderRadius: "32px",
          color: "#31383f",
          px: 2,
          py: 1,
          width: 150,
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;",
          "&:hover": {
            bgcolor: "rgba(221, 142, 164, 1)",
          },
        }}
      >
        Create a Game
      </Button>
      <Button
        disableRipple
        onClick={setJoinGame}
        disabled={isGameCreated}
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
        Join a Game
      </Button>
    </Grid>
    {isCreateGameOpen && <CreateGame />}
    {isJoinGameOpen && <JoinGame />}
  </Grid>
);

export { Home };
export default withHomeProps(Home);
