import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import styles from "./styles";

const SessionEnd = () => (
  <>
    <Typography sx={styles.text}>The session has ended.</Typography>
    <Divider sx={styles.divider} />
  </>
);

export { SessionEnd };
export default SessionEnd;
