import { UIActionTypes } from './ui.types';

const init_state = {
  searchMenu: false,
}

const uiReducer = (state=init_state, action) => {
  switch (action.type) {
    case UIActionTypes.SET_SEARCH_MENU:
      return {
        ...state,
        searchMenu: action.payload
      }
    default:
      return state;
  }
}

export default uiReducer;