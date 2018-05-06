import { ADD_TAB, SET_ACTIVE_TAB, REMOVE_TAB } from "./actionTypes";

const INITIAL_STATE = {
  currentTab: 1,
  tabs: [
    {
      label: "Workbench",
      workbench: true
    },
    {
      label: "New File",
      newFile: true
    }
  ]
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TAB: {
      const { tabs } = action.payload;
      return { ...state, tabs };
    }

    case SET_ACTIVE_TAB: {
      const { currentTab } = action.payload;
      return { ...state, currentTab };
    }

    case REMOVE_TAB: {
      const { tabs } = action.payload;
      return { ...state, tabs };
    }

    default: {
      return state;
    }
  }
}
