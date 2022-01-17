import rootEpic from "./rootEpic";
import rootReducer from "./rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

const enhancers = [];

const { __REDUX_DEVTOOLS_EXTENSION__: devToolsExtension } = global;
const epicMiddleware = createEpicMiddleware();
const middleware = [epicMiddleware];

if (devToolsExtension && typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

const store = createStore(
  rootReducer,
  {},
  compose(applyMiddleware(...middleware), ...enhancers)
);

epicMiddleware.run(rootEpic);

export default store;
