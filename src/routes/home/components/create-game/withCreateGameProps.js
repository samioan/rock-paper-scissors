import uniqid from "uniqid";
import { compose } from "redux";
import { ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

import { db } from "backend";
import {
  setCreatedName,
  setGameId,
  setGameCreated,
  createdName,
  gameId,
  isGameCreated,
  resetGameState,
} from "models/game";
import { setPlayerName, resetPlayerState } from "models/player";
import { withModelProps } from "aa-minimal-core-lib/components/model-props";

const withCreateGameProps = (Component) => (props) => {
  const {
    setCreatedName,
    setGameId,
    setGameCreated,
    createdName,
    gameId,
    isGameCreated,
    setPlayerName,
    resetGameState,
    resetPlayerState,
  } = props;

  const navigate = useNavigate();

  const createGame = (event) => {
    event.preventDefault();
    set(ref(db, `games/${gameId}/players`), {
      [createdName]: {
        name: createdName,
        wins: 0,
        losses: 0,
        draws: 0,
        selection: "",
      },
    });
    setGameCreated(true);
  };

  const onChangeName = (event) => {
    setGameId(uniqid());
    setCreatedName(event.target.value);
  };

  const goToGame = () => {
    resetPlayerState();
    setPlayerName(createdName);
    navigate(`game/${gameId}`);
    resetGameState();
  };

  const newProps = {
    ...props,
    createGame,
    onChangeName,
    goToGame,
    createdName,
    gameId,
    isGameCreated,
  };

  return <Component {...newProps} />;
};

export { withCreateGameProps };
export default compose(
  withModelProps({
    setCreatedName,
    setGameId,
    setGameCreated,
    createdName,
    gameId,
    isGameCreated,
    setPlayerName,
    resetGameState,
    resetPlayerState,
  }),
  withCreateGameProps
);
