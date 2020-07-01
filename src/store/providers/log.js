import React, { createContext, useReducer } from 'react';

const initState = null;

export const ADD_LOG = 'ADD_LOG';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_LOG:
      return action.data;
    default:
      return state;
  }
}

export const LogContext = createContext(null);

export const Log = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <LogContext.Provider value={{ state, dispatch }}>
      {props.children}
    </LogContext.Provider>
  );
}