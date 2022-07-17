import React, { createContext, useReducer } from "react";
import newReducer from "../reducer/newReducer";
import initialState from "../reducer/initialState";

export const NewContext = createContext();

const NewProvaider = ({ children }) => {
  const [state, dispatch] = useReducer(newReducer, initialState);
  return (
    <NewContext.Provider value={{ state, dispatch }}>
      {children}
    </NewContext.Provider>
  );
};

export default NewProvaider;
