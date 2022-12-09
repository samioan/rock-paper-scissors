import { combineEpics } from "redux-observable";
import { epics as effectEpic } from "aa-minimal-core-lib/models/epics";

const rootEpic = combineEpics(effectEpic);

export default rootEpic;
