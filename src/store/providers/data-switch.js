import React, { createContext, useReducer } from 'react';

const initState = false;

export const OPEN_DATA_SWITCH = 'OPEN_DATA_SWITCH';
export const CLOSE_DATA_SWITCH = 'CLOSE_DATA_SWITCH';

const reducer = (state, action) => {
  switch (action.type) {
    case OPEN_DATA_SWITCH:
      return true;
    case CLOSE_DATA_SWITCH:
      return false;
    default:
      return state;
  }
}

export const DataSwitchContext = createContext(null);

export const DataSwitch = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <DataSwitchContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DataSwitchContext.Provider>
  );
}