/* eslint-disable no-eval */
import styled from "styled-components";
import { withViewWrapper } from "../components/ViewWrapper";
import React from "react";
import { getRndInteger, getRandomOperator } from "../utils";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import store from "../store";
import IconButton from "../components/IconButton";

const FullSizeIconButton = styled(IconButton)`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;

  flex-direction: column;
  height: 100%;
`;

const Bottom = styled.div`
  /* background: rgba(0, 0, 0, 0.2); */
  margin-top: auto;
  display: flex;

  width: 100%;
  height: 171px;
`;

const OperationText = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
  font-weight: bold;
  color: white;
  width: 100%;
  height: 171px;
  justify-content: center;
  font-size: 46px;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Score = styled.span`
  position: absolute;
  top: 10px;
  right: 15px;
  font-weight: bold;
  color: white;
  font-family: "Open Sans", sans-serif;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
`;

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: {
        numbers: [0, 1337],
        operation: "-",
        inaccuracy: 0,
      },
        isAnswered: false,
        reanimateIdx: 0,
        score: 0,
    };
  }

  setQuestion = (newQuestion) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        question: { ...newQuestion },
        isAnswered: false,
      };
    });
  };

  generateQuestion = () => {
    var numbers = [];
    // const rnd = getRndInteger(0, 2);

    // for (let i = 0; i < (rnd === 1 ? 3 : 2); i++) {
    //   numbers.push(getRndInteger(1, 150));
    // }

    for (let i = 0; i < 2; i++) {
      numbers.push(getRndInteger(1, 150));
    }

    return {
      numbers: numbers,
      operation: getRandomOperator(),
      inaccuracy: getRndInteger(0, 3),
    };
  };

  nextQuestion = () => {
    this.setQuestion(this.generateQuestion());
    this.reAnimateOperationText();
    store.dispatch({
      type: "BACKGROUND_COLOR",
      payload: { backgroundColor: "default" },
    });
  };

  answer = (givenAnswer) => {
    var total = this.state.question.numbers.reduce(
      (a, b) => eval(a + this.state.question.operation + b),
      0
    );

    let isTrue = false;

    if (
      total === eval(total + this.state.question.inaccuracy) &&
      givenAnswer === true
    ) {
      console.log("doğru cevap");
      isTrue = true;
    } else if (
      total !== eval(total + this.state.question.inaccuracy) &&
      givenAnswer === false
    ) {
      console.log("doğru cevap");
      isTrue = true;
    } else {
      console.log("yanlış cevap");
    }

    if (isTrue) {
      store.dispatch({
        type: "BACKGROUND_COLOR",
        payload: { backgroundColor: "#1a4e1a" },
      });
    } else {
      store.dispatch({
        type: "BACKGROUND_COLOR",
        payload: { backgroundColor: "#4e1a1a" },
      });
    }

    this.setState(
      (prevState) => {
        return {
          ...prevState,
          score: prevState.score + (isTrue ? 5 : -5),
          isAnswered: { isTrue: isTrue },
        };
      },
      () => {
        setTimeout(() => {
          this.setState((prevState) => {
            return {
              ...prevState,

              isAnswered: false,
            };
          });

          this.nextQuestion();
        }, 600);
      }
    );
  };

  operationToString = (value, idx) => {
    return (
      value +
      (idx !== this.state.question.numbers.length - 1
        ? " " + this.state.question.operation + " "
        : " ")
    );
  };

  reAnimateOperationText = () => {
    this.setState((prevState) => {
      return {
        ...prevState,

        reanimateIdx: prevState.reanimateIdx + 1,
      };
    });
  };

  calculateFakeTotal = () => {
    return this.state.question.numbers.reduce(
      (prevVal, curVal) =>
        eval(prevVal + " " + this.state.question.operation + " " + curVal) +
        this.state.question.inaccuracy
    );
  };

  componentDidMount() {
    this.setQuestion(this.generateQuestion());
  }

  render() {
    return (
      <>
        <Score>{this.state.score}</Score>
        <Container {...this.props}>
          <OperationText
            key={this.state.reanimateIdx}
            className="animate__animated animate__fadeIn"
          >
            {this.state.question.numbers.map((el, idx) => {
              return this.operationToString(el, idx);
            })}
            <br />={this.calculateFakeTotal()}
          </OperationText>

          <Bottom>
            <FullSizeIconButton
              onClick={() => this.answer(true)}
              disabled={this.state.isAnswered}
              rad={8}
            >
              <CheckIcon style={{ color: "green", fontSize: "6rem" }} />
            </FullSizeIconButton>
            <FullSizeIconButton
              onClick={() => this.answer(false)}
              disabled={this.state.isAnswered}
              rad={8}
            >
              <CloseIcon style={{ color: "#D45F50", fontSize: "6rem" }} />
            </FullSizeIconButton>
          </Bottom>
        </Container>
      </>
    );
  }
}

export default withViewWrapper(Main);
