import {
  GET_HISTORY_FAILED,
  GET_HISTORY_LOADING,
  GET_HISTORY_SUCCESS,
} from "../../actions/history/types"

const initialState = {
  history: [],
  historyLoading: false,
  historyFailed: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY_SUCCESS:
      return {
        ...state,
        history: action.payload,
        historyLoading: false,
        historyFailed: false,
      }
    case GET_HISTORY_FAILED:
      return {
        ...state,
        historyLoading: false,
        historyFailed: true,
      }
    case GET_HISTORY_LOADING:
      return {
        ...state,
        historyLoading: true,
        historyFailed: false,
      }
    //
    default:
      return state
  }
}
