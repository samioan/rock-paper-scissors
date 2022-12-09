const playerName = (state) => state.player.playerName;
const playerWins = (state) => state.player.playerWins;
const playerLosses = (state) => state.player.playerLosses;
const playerDraws = (state) => state.player.playerDraws;
const playerSelection = (state) => state.player.playerSelection;
const playerPending = (state) => state.player.playerPending;
const playerResult = (state) => state.player.playerResult;
const sessionEnded = (state) => state.player.sessionEnded;

export {
  playerName,
  playerWins,
  playerLosses,
  playerDraws,
  playerSelection,
  playerPending,
  playerResult,
  sessionEnded,
};
