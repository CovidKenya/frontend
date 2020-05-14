import { combineReducers } from "redux"

import example from "./example"
import history from "./history/history"

export default combineReducers({
  // all reducers
  exampleReducer: example,
  historyReducer: history,
})
