import { playerSlice } from "./slice";

const { setPlayerName, setPlayerSelection, setPlayerPending, setPlayerResult } =
  playerSlice.actions;

export { setPlayerName, setPlayerSelection, setPlayerPending, setPlayerResult };
