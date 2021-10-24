import { useState, useEffect } from "react";
import store from "./store";

function useBackgroundColor(friendID) {
  const [currentColor, setCurrentColor] = useState(
    store.getState().backgroundColor
  );

  useEffect(() => {
    store.subscribe(() => {
      setCurrentColor(store.getState().backgroundColor);
    });
  }, []);

  function setBackgroundColor(newColor) {
    store.dispatch({
      type: "BACKGROUND_COLOR",
      payload: { backgroundColor: newColor },
    });
  }

  return [currentColor, setBackgroundColor];
}

export default useBackgroundColor;
