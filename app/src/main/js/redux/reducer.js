import { SET_APP_NAME } from './actionTypes';

const INITIAL_STATE = {
  global: {
    appName: '',
  },
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_APP_NAME: {
      const { appName } = action.payload;
      return { ...state, appName };
    }

    default: {
      return state;
    }
  }
}
