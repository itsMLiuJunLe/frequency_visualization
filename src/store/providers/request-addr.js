import React, { createContext, useReducer } from 'react';

const initState = 1;

export const CHANGE_ADDR = 'CHANGE_ADDR';

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_ADDR:
      if(state === 1) {
        state = 2;
      } else if (state === 2) {
        state = 3;
      } else {
        state = 1;
      }
      return state;
    default:
      break;
  }
}

export const RequestAddrContext = createContext(null);

export const RequestAddr = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <RequestAddrContext.Provider value={{ state, dispatch }}>
      {props.children}
    </RequestAddrContext.Provider>
  );
}