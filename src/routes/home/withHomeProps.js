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

  const newProps = {
    ...props,
    isCreateGameOpen,
    isJoinGameOpen,
    setCreateGame,
    setJoinGame,
    isGameCreated,
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
