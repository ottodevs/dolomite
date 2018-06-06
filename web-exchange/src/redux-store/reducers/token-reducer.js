import * as tokenActionTypes from '../actions/action-types/token-action-types';

const INITIAL_STATE = {
  tokenToUsd: {}
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tokenActionTypes.UPDATE_TOKEN_VALUES:
      return {
        ...state,
        tokenToUsd: action.tokenValues
      };
    default:
      return state;
  }
};

export default tokenReducer;
