import React, {createContext, useContext, useReducer} from "react";
export const StateContext = createContext();
export const StateProvider = ({
    reducer,intialSate, children})=>(<StateContext.Provider value={useReducer(reducer,intialSate)}>{children}</StateContext.Provider>);

    export const useStateView = ()=> useContext(StateContext);