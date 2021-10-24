import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import store from "../store";
import { lighten } from "polished";

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => lighten(0.025, props.color)};
  height: 80%;
  width: auto;
  padding: 25px;

  min-width: 350px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: background-color 250ms linear;
`;

const FinalComponent = (props) => {
  const [currentColor, setCurrentColor] = useState(
    store.getState().backgroundColor
  );

  useEffect(() => {
    store.subscribe(() => {
      setCurrentColor(store.getState().backgroundColor);
    });
  }, []);

  return (
    <Wrapper
      className="animate__animated animate__fadeInDown animate__faster"
      color={currentColor}
    >
      {props.children}
    </Wrapper>
  );
};

const BackButton = styled(IconButton)`
  position: absolute;
  top: -20px;
  left: -20px;
`;

export default FinalComponent;

export function withViewWrapper(Component, backButton = true) {
  return (props) => (
    <FinalComponent>
      {backButton && (
        <div style={{ height: 0 }}>
          <BackButton
            style={{ color: "white" }}
            onClick={() => {
              store.dispatch({
                type: "BACKGROUND_COLOR",
                payload: { backgroundColor: "#304658" },
              });

              props.setCurrentPage(0);
            }}
          >
            <ArrowBackIosNewIcon />
          </BackButton>
        </div>
      )}
      <Component {...props} />
    </FinalComponent>
  );
}
