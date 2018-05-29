export const actionLogger = store => next => (action) => {
  console.log('[Middleware] Dispatching', action);
  return next(action);
};

export const stateLogger = store => next => (action) => {
  console.log('[Middleware] next state', store.getState());
  return next(action);
};

