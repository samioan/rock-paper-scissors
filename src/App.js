import { CtaButton, Image } from "./components";
import Typography from "@mui/material/Typography";

import { paper, rock, scissors } from "./images";

import "./App.css";

const App = () => (
  <div className="App">
    <Typography align="center" variant="h1" className="test">
      Rock Paper Scissors
    </Typography>

    <div className="container">
      <CtaButton
        color="secondary"
        size="large"
        variant="contained"
        label="Create Game"
        className="button"
      />
      <CtaButton
        color="warning"
        size="large"
        variant="contained"
        label="Join Game"
        className="button"
      />
    </div>

    <div className="container">
      <Image content={paper} className="image" />
      <Image content={rock} className="image" />
      <Image content={scissors} className="image" />
    </div>
  </div>
);

export default App;
