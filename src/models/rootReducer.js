import gameReducer from "./game/reducer";
import playerReducer from "./player/reducer";

const rootReducer = {
  game: gameReducer,
  player: playerReducer,
};

export default rootReducer;
