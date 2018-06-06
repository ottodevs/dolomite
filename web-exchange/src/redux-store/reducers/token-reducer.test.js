import tokenReducer from './token-reducer';
import * as tokenActionCreators from '../actions/action-creators/token-action-creators';

describe('reducer', () => {
  const INITIAL_STATE = {
    tokenToUsd: {}
  };
  it('should return the initial state', () => {
    expect(tokenReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should update the token values', () => {
    const tokenToUsd = {
      ETH: 600,
      BTC: 5000
    };
    expect(
      tokenReducer(
        INITIAL_STATE,
        tokenActionCreators.updateTokenValues(tokenToUsd)
      )
    ).toEqual({
      ...INITIAL_STATE,
      tokenToUsd
    });
  });
});
