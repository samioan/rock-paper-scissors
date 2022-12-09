import rootEpic from "./rootEpic";
import rootReducer from "./rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});

epicMiddleware.run(rootEpic);

export default store;
