import { darken } from "polished";
import styled from "styled-components";

const IconButton = styled.button`
  --rad: ${(props) =>
    typeof props.rad == "undefined" ? "4px" : props.rad + "px"};

  background: ${(props) => props.color || "white"};
  border: 0px;
  border-radius: var(--rad);
  display: flex;
  align-items: center;
  position: relative;
  /* width: 56px; */
  height: 50px;
  width: 85px;
  font-size: 20px;
  text-align: center;
  justify-content: center;

  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;

  &:hover {
    background: ${(props) => darken(0.1, props.color || "white")};
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: calc(var(--rad));
    left: 0px;
    top: calc(100%);
    background: ${(props) => darken(0.3, props.color || "white")};
    border-radius: var(--rad);

    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  &:active::before {
    content: "";
    position: absolute;
    width: 100%;
    height: calc(var(--rad) / 2);
    left: 0px;
    top: calc(100%);
    background: none;
    border-radius: var(--rad);

    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  &:active {
    top: calc(var(--rad));
    border-radius: var(--rad);
  }

  &:disabled {
    background: #cdcdcd;
    pointer-events: none;
  }

  margin-right: 8px;

  &:last-of-type {
    margin-right: 0px;
  }
`;

export default IconButton;
