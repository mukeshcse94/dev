import React, { createContext, useReducer } from 'react';
import AppReducer from './appReducers';

const initialState = {
  transaction : [
    {id:1, text: 'Apple', amount: 20},
    {id:2, text: 'Book', amount: -10},
    {id:3, text: 'Camle', amount: 120},
    {id:4, text: 'Door', amount: -420},
  ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(AppReducer, initialState);
  
  return(
    <GlobalContext.Provider
      value={{transaction: state.transaction}}
    >
      {children}
    </GlobalContext.Provider>
  )
}