import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import withJoinGameProps from "./withJoinGameProps";

const JoinGame = ({
  joinRoom,
  gameError,
  gameId,
  createdName,
  onChangeGameId,
  onChangeName,
  resetGameError,
}) => (
  <Grid
    sx={{
      mt: 2,
      bgcolor: "#f2e9eb",
      p: 2,
      borderRadius: 4,
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      width: 264,
    }}
  >
    {!gameError && (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Typography align="center" sx={{ color: "#31383f", mb: 2 }}>
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
          <Button
            type="submit"
            disableRipple
            sx={{
              bgcolor: "transparent",
              borderRadius: "32px",
              color: "#31383f",
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            Join Game
          </Button>
        </form>
      </Grid>
    )}
    {gameError && (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography sx={{ color: "#31383f", mb: 1 }}>
          {gameError === "GAME_NOT_FOUND"
            ? "Game not found!"
            : "Game already has maximum amount of players!"}
        </Typography>
        <Button
          onClick={resetGameError}
          disableRipple
          sx={{
            bgcolor: "transparent",
            borderRadius: "32px",
            color: "#31383f",
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
        >
          Return
        </Button>
      </Grid>
    )}
  </Grid>
);

export { JoinGame };
export default withJoinGameProps(JoinGame);
