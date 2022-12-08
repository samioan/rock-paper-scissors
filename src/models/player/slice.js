import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerName: "",
  playerWins: 0,
  playerLosses: 0,
  playerDraws: 0,
  playerSelection: "",
  playerResult: "",
  playerPending: false,
};

const reducers = {
  setPlayerName: (state, { payload }) => {
    state.playerName = payload;
  },
  setPlayerSelection: (state, { payload }) => {
    state.playerSelection = payload;
  },
  setPlayerPending: (state, { payload }) => {
    state.playerPending = payload;
  },
  setPlayerResult: (state, { payload }) => {
    state.playerResult = payload;
    state.playerDraws += payload === "Tie" ? 1 : 0;
    state.playerWins += payload === "Win" ? 1 : 0;
    state.playerLosses += payload === "Loss" ? 1 : 0;
  },
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers,
});
