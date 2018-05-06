import {
  ADD_TAB,
  SET_ACTIVE_TAB,
  REMOVE_TAB,
  REDUCER_NAME
} from "./actionTypes";

export function setActiveTab(currentTab) {
  return dispatch => {
    dispatch({
      type: SET_ACTIVE_TAB,
      payload: { currentTab }
    });
  };
}

export function addTab(tabLabel) {
  return (dispatch, getState) => {
    const { tabs } = getState()[REDUCER_NAME];
    dispatch({
      type: ADD_TAB,
      payload: {
        tabs: [
          ...tabs,
          {
            label: tabLabel,
            newFile: false
          }
        ]
      }
    });

    dispatch(setActiveTab(tabs.length + 1));
  };
}

export function removeTab(tabId) {
  return (dispatch, getState) => {
    const { tabs } = getState()[REDUCER_NAME];

    // Delete from tabs the element of tab
    tabs.splice(tabId, 1);

    dispatch({
      type: REMOVE_TAB,
      payload: { tabs }
    });

    dispatch(setActiveTab(tabId));
  };
}
