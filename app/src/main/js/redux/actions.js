import { SET_APP_NAME } from "./actionTypes";

export function setAppName(appName) {
  return dispatch => {
    dispatch({
      type: SET_APP_NAME,
      payload: { appName }
    });
  };
}
