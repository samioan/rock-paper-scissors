import { gameSlice } from "./slice";

const {
  setCreatedName,
  setGameId,
  setGameCreated,
  setGameError,
  setCreateGame,
  setJoinGame,
  resetGameState,
} = gameSlice.actions;

export {
  setCreatedName,
  setGameId,
  setGameCreated,
  setGameError,
  setCreateGame,
  setJoinGame,
  resetGameState,
};
