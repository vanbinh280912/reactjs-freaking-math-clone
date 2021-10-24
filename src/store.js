import { createStore } from "redux";

const initialState = {
  backgroundColor: "#2B3E4D",
};

const reducer = (state = initialState, action) => {
  if (action.type === "BACKGROUND_COLOR") {
    return {
      ...state,
      backgroundColor:
        action.payload.backgroundColor === "default"
          ? "#2B3E4D"
          : action.payload.backgroundColor,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
