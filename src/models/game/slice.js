import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createdName: "",
  gameId: "",
  isGameCreated: false,
  gameError: "",
  isCreateGameOpen: false,
  isJoinGameOpen: false,
};

const reducers = {
  setCreatedName: (state, { payload }) => {
    state.createdName = payload;
  },
  setGameId: (state, { payload }) => {
    state.gameId = payload;
  },
  setGameCreated: (state, { payload }) => {
    state.isGameCreated = payload;
  },
  setGameError: (state, { payload }) => {
    state.gameError = payload;
  },
  setCreateGame: (state) => {
    state.isCreateGameOpen = true;
    state.isJoinGameOpen = false;
    state.gameError = "";
    state.createdName = "";
    state.gameId = "";
  },
  setJoinGame: (state) => {
    state.isCreateGameOpen = false;
    state.isJoinGameOpen = true;
    state.gameError = "";
    state.createdName = "";
    state.gameId = "";
  },
  resetGameState: () => initialState,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers,
});
