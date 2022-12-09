import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import withCreateGameProps from "./withCreateGameProps";

const CreateGame = ({
  createGame,
  onChangeName,
  goToGame,
  createdName,
  gameId,
  isGameCreated,
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
    {!isGameCreated && (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Typography sx={{ color: "#31383f", mb: 2 }}>
          Choose a Nickname
        </Typography>
        <form
          onSubmit={createGame}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <TextField
            required
            label="Nickname"
            value={createdName}
            onChange={onChangeName}
            sx={{ color: "#31383f" }}
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
            Create Game
          </Button>
        </form>
      </Grid>
    )}
    {isGameCreated && (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
      >
        <Typography sx={{ mb: 2, color: "#31383f" }}>Game created!</Typography>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          gap={1}
          sx={{ mb: 1 }}
        >
          <Typography
            sx={{ color: "#31383f" }}
          >{`Game ID: ${gameId}`}</Typography>
          <IconButton
            disableRipple
            onClick={() => {
              navigator.clipboard.writeText(gameId);
            }}
          >
            <ContentCopyIcon sx={{ width: 16, height: 16 }} />
          </IconButton>
        </Grid>
        <Button
          disableRipple
          sx={{
            bgcolor: "transparent",
            borderRadius: "32px",
            color: "#31383f",
            "&:hover": {
              bgcolor: "transparent",
            },
          }}
          onClick={goToGame}
        >
          Continue
        </Button>
      </Grid>
    )}
  </Grid>
);

export { CreateGame };
export default withCreateGameProps(CreateGame);
