import * as userActionTypes from '../actions/action-types/user-action-types';

const INITIAL_STATE = {
  userName: 'Default Name'
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.UPDATE_USER_NAME:
      return {
        ...state,
        userName: action.userName
      };
    default:
      return state;
  }
};

export default userReducer;
