import React, {createContext, useContext, useReducer} from "react";
// Prepares Data Layer
export const StateContext = createContext();
// Wrap your app and provide the Data Layer
export const StateProvider = ({
    reducer,intialSate, children})=>(
    <StateContext.Provider value={useReducer(reducer,intialSate)}>
        {children
        }</StateContext.Provider>);
// Pull information from Data Layer
    export const useStateValue = ()=> useContext(StateContext);