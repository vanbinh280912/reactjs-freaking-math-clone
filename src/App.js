import "./App.scss";
import Main from "./views/Main";
import Game from "./views/Game";
import { createGlobalStyle } from "styled-components";
import React from "react";
import useBackgroundColor from "./useBackgroundColor";
import usePage from "./usePage";

const GlobalStyle = createGlobalStyle`
  body {
    background:#2B3E4D;
    /* background-color: ${(props) => props.backgroundColor}; */
    /* transition: background-color 100ms linear; */
  }
`;

const Pages = [Main, Game];

function App() {
  const [currentColor] = useBackgroundColor();
  const [currentPage, setCurrentPage] = usePage();

  return (
    <div className="App">
      <GlobalStyle backgroundColor={currentColor} />
      {React.createElement(Pages[currentPage], {
        currentPage: currentPage,
        setCurrentPage: setCurrentPage,
      })}
    </div>
  );
}

export default App;
