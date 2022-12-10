import { compose } from "redux";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ref, set, onValue, remove } from "firebase/database";

import { db } from "backend";
import {
  playerName,
  playerWins,
  playerLosses,
  playerDraws,
  playerSelection,
  setPlayerSelection,
  setPlayerPending,
  playerPending,
  playerResult,
  setPlayerResult,
  sessionEnded,
  setSessionEnded,
} from "models/player";
import { withModelProps } from "aa-minimal-core-lib/components/model-props";

const withGameProps = (Component) => (props) => {
  const {
    playerName,
    playerWins,
    playerLosses,
    playerDraws,
    playerSelection,
    setPlayerSelection,
    setPlayerPending,
    playerPending,
    playerResult,
    setPlayerResult,
    sessionEnded,
    setSessionEnded,
  } = props;

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    onValue(ref(db, `games/${id}/players`), (snapshot) => {
      if (snapshot.exists()) {
        const selections = Object.values(snapshot.val())
          .map(({ name, selection }) => ({
            name,
            selection,
          }))
          .filter(({ selection }) => !!selection);

        if (selections.length === 2) {
          const playerChoice = selections.find(
            ({ name }) => name === playerName
          ).selection;
          const opponentChoice = selections.find(
            ({ name }) => name !== playerName
          ).selection;

          if (playerChoice === opponentChoice) {
            set(ref(db, `games/${id}/players/${playerName}/selection`), "");
            setPlayerResult("Tie");
          } else if (playerChoice === "rock") {
            if (opponentChoice === "paper") {
              set(ref(db, `games/${id}/players/${playerName}/selection`), "");
              return setPlayerResult("Loss");
            } else {
              set(ref(db, `games/${id}/players/${playerName}/selection`), "");
              return setPlayerResult("Win");
            }
          } else if (playerChoice === "scissors") {
            if (opponentChoice === "rock") {
              set(ref(db, `games/${id}/players/${playerName}/selection`), "");
              return setPlayerResult("Loss");
            } else {
              set(ref(db, `games/${id}/players/${playerName}/selection`), "");
              return setPlayerResult("Win");
            }
          } else if (playerChoice === "paper") {
            if (opponentChoice === "scissors") {
              set(ref(db, `games/${id}/players/${playerName}/selection`), "");
              return setPlayerResult("Loss");
            } else {
              set(ref(db, `games/${id}/players/${playerName}/selection`), "");
              return setPlayerResult("Win");
            }
          }
        } else setPlayerPending(true);
      } else {
        setSessionEnded(true);
      }
    });
    // eslint-disable-next-line
  }, []);

  const setSelection = (selection) => {
    setPlayerSelection(selection);
    set(ref(db, `games/${id}/players/${playerName}/selection`), selection);
  };

  const onRetry = () => {
    setPlayerSelection("");
    setPlayerResult("");
    set(ref(db, `games/${id}/players/${playerName}`), {
      name: playerName,
      draws: playerDraws,
      losses: playerLosses,
      selection: "",
      wins: playerWins,
    });
  };

  const resultMessage = (() => {
    switch (playerResult) {
      case "Win":
        return "You won!";
      case "Loss":
        return "You lost!";
      default:
        return `It's a draw!`;
    }
  })();

  const onLeave = () => {
    remove(ref(db, `games/${id}`));
    navigate(`home`);
  };

  const newProps = {
    ...props,
    playerName,
    playerWins,
    playerLosses,
    playerDraws,
    playerSelection,
    setSelection,
    setPlayerSelection,
    playerPending,
    playerResult,
    onRetry,
    resultMessage,
    onLeave,
    sessionEnded,
  };

  return <Component {...newProps} />;
};

export { withGameProps };
export default compose(
  withModelProps({
    playerName,
    playerWins,
    playerLosses,
    playerDraws,
    playerSelection,
    playerPending,
    playerResult,
    setPlayerSelection,
    setPlayerPending,
    setPlayerResult,
    sessionEnded,
    setSessionEnded,
  }),
  withGameProps
);
