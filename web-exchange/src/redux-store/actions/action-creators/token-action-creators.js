import * as tokenActionTypes from '../action-types/token-action-types';

export const updateTokenValues = tokenValues => ({
  type: tokenActionTypes.UPDATE_TOKEN_VALUES,
  tokenValues
});
