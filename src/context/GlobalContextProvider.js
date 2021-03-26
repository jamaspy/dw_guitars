import React from "react";

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  invite_token: "",
  access_token: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_INVITE_TOKEN": {
      return {
        ...state,
        invite_token: action.token,
      };
    }
    case "SET_ACCESS_TOKEN": {
      return {
        ...state,
        access_token: action.token,
      };
    }
    default:
      throw new Error("Bad Action Type");
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalContextProvider;
