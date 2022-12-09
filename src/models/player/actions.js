import { playerSlice } from "./slice";

const {
  setPlayerName,
  setPlayerSelection,
  setPlayerPending,
  setPlayerResult,
  setSessionEnded,
  resetPlayerState,
} = playerSlice.actions;

export {
  setPlayerName,
  setPlayerSelection,
  setPlayerPending,
  setPlayerResult,
  setSessionEnded,
  resetPlayerState,
};
