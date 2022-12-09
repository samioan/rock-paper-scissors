const createdName = (state) => state.game.createdName;
const gameId = (state) => state.game.gameId;
const isGameCreated = (state) => state.game.isGameCreated;
const gameError = (state) => state.game.gameError;
const isCreateGameOpen = (state) => state.game.isCreateGameOpen;
const isJoinGameOpen = (state) => state.game.isJoinGameOpen;

export {
  createdName,
  gameId,
  isGameCreated,
  gameError,
  isCreateGameOpen,
  isJoinGameOpen,
};
