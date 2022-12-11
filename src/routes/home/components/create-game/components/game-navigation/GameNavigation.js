import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import styles from "./styles";

const GameNavigation = ({ goToGame, gameId }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justifyContent="space-between"
    sx={styles.container}
  >
    <Typography sx={styles.title}>Game created!</Typography>
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      gap={1}
      sx={styles.innerTextContainer}
    >
      <Typography sx={styles.text}>{`Game ID: ${gameId}`}</Typography>
      <IconButton
        onClick={() => {
          navigator.clipboard.writeText(gameId);
        }}
      >
        <ContentCopyIcon sx={styles.icon} />
      </IconButton>
    </Grid>
    <Button sx={styles.button} onClick={goToGame}>
      Continue
    </Button>
  </Grid>
);

export { GameNavigation };
export default GameNavigation;
