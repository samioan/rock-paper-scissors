import { compose } from "redux";
import { useNavigate } from "react-router-dom";
import { ref, get, set, child } from "firebase/database";

import { db } from "backend";
import {
  setCreatedName,
  setGameId,
  createdName,
  gameId,
  isGameCreated,
  gameError,
  setGameError,
  resetGameState,
} from "models/game";
import { setPlayerName, resetPlayerState } from "models/player";
import { withModelProps } from "aa-minimal-core-lib/components/model-props";

const withJoinGameProps = (Component) => (props) => {
  const {
    setCreatedName,
    setGameId,
    createdName,
    gameId,
    gameError,
    setGameError,
    setPlayerName,
    resetGameState,
    resetPlayerState,
  } = props;

  const navigate = useNavigate();

  const joinRoom = (event) => {
    event.preventDefault();
    get(child(ref(db), `games/${gameId}`)).then((snapshot) => {
      if (snapshot.exists()) {
        if (Object.values(snapshot?.val()?.players).length === 1) {
          set(ref(db, `games/${gameId}/players/${createdName}`), {
            name: createdName,
            wins: 0,
            losses: 0,
            draws: 0,
            selection: "",
          });
          resetPlayerState();
          setPlayerName(createdName);
          navigate(`game/${gameId}`);
          resetGameState();
        } else setGameError("MAX_PLAYERS");
      } else setGameError("GAME_NOT_FOUND");
    });
  };

  const onChangeGameId = (event) => setGameId(event.target.value);
  const onChangeName = (event) => setCreatedName(event.target.value);
  const resetGameError = () => {
    setGameId("");
    setCreatedName("");
    setGameError("");
  };

  const newProps = {
    ...props,
    joinRoom,
    gameError,
    gameId,
    createdName,
    onChangeGameId,
    onChangeName,
    resetGameError,
  };

  return <Component {...newProps} />;
};

export { withJoinGameProps };
export default compose(
  withModelProps({
    setCreatedName,
    setGameId,
    gameError,
    createdName,
    gameId,
    isGameCreated,
    setGameError,
    setPlayerName,
    resetGameState,
    resetPlayerState,
  }),
  withJoinGameProps
);
