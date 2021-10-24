import styled from "styled-components";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Leaderboard from "@material-ui/icons/FormatListNumberedRtl";
import { withViewWrapper } from "../components/ViewWrapper";
import IconButton from "../components/IconButton";

const BottomButtons = styled.div`
  margin-top: 10px;
  display: flex;

  .button-small {
    font-size: 20px;
    height: 30px;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    color: #d45f50;
  }
`;

const Logo = styled.span`
  color: white;
  font-size: 30px;

  font-family: "Open Sans", sans-serif;
  flex-grow: 1;
  text-align: center;
`;

const FooterText = styled.span`
  color: #889aa6;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
`;

const Buttons = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Main(props) {
  return (
    <Container>
      <Logo>
        <span>
          Freaking<b>Math</b>
        </span>
        <span
          style={{
            fontSize: 12,
            display: "block",
          }}
        >
          Clone
        </span>
      </Logo>
      <Buttons>
        <div>
          <IconButton
            color="white"
            onClick={() => {
              props.setCurrentPage(1);
            }}
          >
            <PlayArrowIcon
              style={{ fill: "#3399DB", fontSize: 40 }}
            ></PlayArrowIcon>
          </IconButton>
        </div>

        <BottomButtons>
          <IconButton
            className="button-small"
            color="white"
            style={{ color: "#D45F50" }}
            onClick={() => alert("Soon!")}
          >
            rate
          </IconButton>

          <IconButton
            className="button-small"
            color="white"
            onClick={() => alert("Soon!")}
          >
            <Leaderboard />
          </IconButton>
        </BottomButtons>
      </Buttons>

      <FooterText>© Muharrem Yildirim 2021</FooterText>
    </Container>
  );
}

export default withViewWrapper(Main, false);
