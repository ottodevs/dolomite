import * as userActionTypes from '../action-types/user-action-types';

export const updateUserName = userName => ({
  type: userActionTypes.UPDATE_USER_NAME,
  userName
});
