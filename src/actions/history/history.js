import axios from "axios"
import { URL } from "../url"
import {
  GET_HISTORY_FAILED,
  GET_HISTORY_LOADING,
  GET_HISTORY_SUCCESS,
} from "./types"

export const getHistory = () => dispatch => {
  //
  // GET ALL HISTORY
  //
  dispatch({ type: GET_HISTORY_LOADING })
  axios
    .get(`${URL}/api/v1/cases/history/`)
    // ON SUCCESS
    .then(res => {
      dispatch({
        type: GET_HISTORY_SUCCESS,
        payload: res.data,
      })
    })
    // ON FAIL
    .catch(err => {
      dispatch({ type: GET_HISTORY_FAILED })
      console.log(err)
    })
}
