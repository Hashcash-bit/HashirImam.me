// Important React Dependencies
import React, {useState} from "react";

//Styling
import styled from "styled-components";

// Images/Gifs
import Error from "../img/404.png";

// Router
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

const Background = styled.div`
  flex: 1;
  background-color: #1e1e1e;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

const CenterContainer = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const ErrorImage = styled.img`
  height: fit-content;
  width: fit-content;
  @media screen and (min-width: 904px) {
    max-width: 700px;
    max-height: 700px;
  }
`;

const TheText = styled.div`
  font-size: 3em;
  font-weight: bold;
  color: red;
`;

const TheLink = styled(Link)`
  font-size: 15px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: ease-in-out 0.3s;
    color: red;
  }
`;

const ErrorPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <Background>
      <CenterContainer>
        <TheText>Page Not Found</TheText>
        <ErrorImage src={Error} />
        <TheLink onMouseEnter={onHover} onMouseLeave={onHover} to="/">
          Homepage{" "}
          {hover ? <ArrowForwardIcon /> : <KeyboardArrowRightRoundedIcon />}
        </TheLink>
      </CenterContainer>
    </Background>
  );
};

export default ErrorPage;
