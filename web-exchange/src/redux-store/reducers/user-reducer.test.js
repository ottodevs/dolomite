import userReducer from './user-reducer';
import * as userActionCreators from '../actions/action-creators/user-action-creators';

describe('reducer', () => {
  const INITIAL_STATE = {
    userName: ''
  };
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should update the token values', () => {
    const updatedUserName = 'Jordan Cutler';
    expect(
      userReducer(
        INITIAL_STATE,
        userActionCreators.updateUserName(updatedUserName)
      )
    ).toEqual({
      ...INITIAL_STATE,
      userName: updatedUserName
    });
  });
});
