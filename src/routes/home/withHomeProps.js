import { compose } from "redux";

import {
  isCreateGameOpen,
  isJoinGameOpen,
  setCreateGame,
  setJoinGame,
  isGameCreated,
} from "models/game";
import { withModelProps } from "aa-minimal-core-lib/components/model-props";

const withHomeProps = (Component) => (props) => {
  const {
    isCreateGameOpen,
    isJoinGameOpen,
    setCreateGame,
    setJoinGame,
    isGameCreated,
  } = props;

  const buttons = [
    {
      title: "Create a Game",
      onClick: setCreateGame,
      style: "createGameButton",
    },
    {
      title: "Join a Game",
      onClick: setJoinGame,
      style: "joinGameButton",
    },
  ];

  const newProps = {
    ...props,
    isCreateGameOpen,
    isJoinGameOpen,
    setCreateGame,
    setJoinGame,
    isGameCreated,
    buttons,
  };

  return <Component {...newProps} />;
};

export { withHomeProps };
export default compose(
  withModelProps({
    isCreateGameOpen,
    isJoinGameOpen,
    setCreateGame,
    setJoinGame,
    isGameCreated,
  }),
  withHomeProps
);
