import React, { createContext, useReducer } from 'react';

const initState = true;

export const CHART_RESIZE = 'CHART_RESIZE';

const reducer = (state, action) => {
  switch (action.type) {
    case CHART_RESIZE:
      return !state;
    default:
      return state;
  }
}

export const ChartResizeContext = createContext(null);

export const ChartResize = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <ChartResizeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ChartResizeContext.Provider>
  );
}