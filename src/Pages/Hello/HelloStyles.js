// This is where the styled component imports will go
import styled from "styled-components";

// this is where the routing imports will go
import { Link } from "react-router-dom";

// The main container: should have a 3 components
export const Container = styled.div`
  background-color: #1e1e1e;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 1468px) {
    height: 100%;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 2px;
      border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: red; /* Change the color as desired */
      border-radius: 4px; /* Adjust the border radius as desired */
    }

    /* Optional: Styles for the scrollbar track on hover */
    &::-webkit-scrollbar-track:hover {
      background-color: #1e1e1e; /* Change the color as desired */
      transition: ease-in-out 2s;
    }
  }
`;

export const MiddleDiv = styled.div`
  width: 80%;
  max-width: 1648px;
  min-width: 1000px;
  height: 90%;
  max-height: 1200px;
  border-radius: 70px;
  background-color: black;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 1px 1px rgba(0, 1, 1, 0.8) inset;
  animation: glow-pulse 3s infinite alternate;

  @keyframes glow-pulse {
    0% {
      box-shadow: 0 0 1px 1px rgba(0, 170, 255, 0.8) inset;
    }
    100% {
      box-shadow: 0 0 1px 1px rgba(255, 0, 0, 0.8) inset;
    }
  }

  // The max width means, after the screen hits 1280 px
  @media screen and (max-width: 1468px) {
    display: none;
  }
`;
// The left most div
export const LeftArrowDiv = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  text-align: center;
  width: 10%;
  max-width: 200px;
  @media screen and (max-width: 1468px) {
    display: none;
  }
`;

export const Image = styled.img`
  height: auto;
  self-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7));
    transform: translateY(-5px);
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

// This will be the middle div: the stoopid box

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80%;
  max-height: 800px;
  @media screen and (max-width: 1175px) {
    flex-direction: column-reverse;
  }
`;

// This is where the Bottom Section of the middle div will go
export const BottonSection = styled.div`
  width: 80%;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20%;
  @media screen and (max-width: 1175px) {
    margin-top: 20px;
  }
`;

// This where the internal components of the bottom section will go
export const TheNavigation = styled.div`
  width: 80%;
  background-color: rgba(255, 255, 255, 0.05);
  justify-content: space-around;
  align-items: center;
  text-align: center;
  align-content: center;
  height: 50%;
  display: flex;
  backdrop-filter: blur(100px); /* Blurry effect */

  // Additional styles for better readability
  border-radius: 100px;
  padding: 6px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 1175px) {
    padding: 2px;
    height: 40%;
  }
  @media screen and (max-width: 650px) {
    width: 390px;
    height: 30%;
    margin-top: 20px;
  }
  @media screen and (max-width: 390px) {
    width: 100vw;
    border-radius: 0;
  }
`;

// The Links Styles go here
export const TheLinks = styled(Link)`
  font-size: 15px;
  color: #7a7a7a;
  font-weight: bold;
  width: 100px;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  &: hover {
    color: white;
    transition: ease-in-out 0.3s;
  }
`;

export const TheSocials = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center:
    align-content: center;
    width: 25%;
    margin-bottom: 10px;    
    `;
export const SocialLinks = styled.a``;
export const Icons = styled.img`
  height: auto;
  self-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    filter: drop-shadow(0 0 0.9px rgba(255, 255, 255, 0.7));
    transform: translateY(-3px);
  }
`;

// This is where the internal components of the top section will go
export const LeftContent = styled.div`
  height: 100%;
  width: 50%;
  justify-content: center;
  text-align: left;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1175px) {
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    text-align: center;
    margin-top: 20px;
    height: 1000px;
  }
  @media screen and (max-width: 550px) {
    margin-top: 100px;
  }
`;

export const Header = styled.div`
  margin-left: 50px;
  color: white;
  font-size: 65px;
  font-weight: bold;
  @media screen and (max-width: 1175px) {
    margin-left: 0px;
  }
`;
export const SubHeader = styled.div`
  margin-left: 50px;
  color: white;
  font-size: 35px;
  font-weight: bold;
  @media screen and (max-width: 1175px) {
    margin-left: 0px;
  }
`;
export const LittleDescription = styled.div`
  margin-left: 50px;
  color: white;
  font-size: 20px;
  max-width: 500px;
  margin-top: 20px;
  @media screen and (max-width: 1175px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 495px) {
    width: 300px;
  }
`;
export const LittleDescription1 = styled.div`
  margin-left: 50px;
  color: white;
  font-size: 20px;
  max-width: 500px;
  margin-top: 20px;
  @media screen and (max-width: 1175px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 365px) {
    width: 300px;
  }
`;
export const SkillsHeader = styled.div`
  margin-left: 50px;
  color: white;
  font-size: 35px;
  font-weight: bold;
  margin-top: 30px;
  @media screen and (max-width: 1175px) {
    margin-left: 0px;
  }
`;
export const SkillsWrapper = styled.div`
  width: 500px;
  display: flex;
  overflow-x: scroll;
  height: 70px;
  margin-left: 50px;

  @media screen and (max-width: 1175px) {
    height: 80%;
    margin-left: 0px;
  }
  @media screen and (max-width: 506px) {
    width: 300px;
    // height: 200px;
    // margin-bottom: 50px;
  }

  &::-webkit-scrollbar {
    height: 8px;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: red; /* Change the color as desired */
    border-radius: 4px; /* Adjust the border radius as desired */
  }

  /* Optional: Styles for the scrollbar track on hover */
  &::-webkit-scrollbar-track:hover {
    background-color: #1e1e1e; /* Change the color as desired */
    transition: ease-in-out 2s;
  }
`;

export const Skills = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  width: 800px;
`;
export const Badges = styled.img`
  width: auto;
  height: 35px;
  @media screen and (max-width: 1175px) {
    height: 35px;
  }
`;

// the right most div should be the same as the one on the left
export const RightArrowDiv = styled.div`
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  text-align: center;
  width: 10%;
  max-width: 200px;
  @media screen and (max-width: 1468px) {
    display: none;
  }
`;

export const WIADS = styled.div`
  display: flex;
  color: white;
  margin-left: 50px;
  margin-top: 25px;
  font-size: 15px;
  font-weight: bold;
  align-items: center;
  gap: 15px;
  @media screen and (max-width: 1175px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1175px) {
    display: none;
  }
`;

export const MainIMG = styled.img`
  width: 500px;
  height: auto;
  margin-top: -50px;
  @media screen and (max-width: 1175px) {
    display: none;
  }
`;

export const TheName = styled.div`
  color: white;
  font-weight: bold;
  font-size: 35px;
  @media screen and (max-width: 1175px) {
    display: none;
  }
`;

// This is where the hidden content will go
export const HiddenContent = styled.div`
  display: none;

  @media screen and (max-width: 1175px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

export const HiddenImage = styled.img`
  display: none;

  @media screen and (max-width: 1175px) {
    height: auto;
    width: 200px;
    display: flex;
  }
`;

export const HiddenName = styled.div`
  display: none;

  @media screen and (max-width: 1175px) {
    font-size: 35px;
    color: white;
    font-weight: bold;
    display: flex;
  }
`;

export const HiddenWIADS = styled.div`
  display: none;

  @media screen and (max-width: 550px) {
    justify-content: center;
    align-items: center;
    align-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    transition: ease-in-out 0.3s;
  }
`;

export const HiddenText = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: white;
  padding-bottom: 20px;
`;

export const WIADWRAP = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Circle = styled.div`
  width: 1px;
  border-width: 5px;
  height: 1px;
  border-radius: 20px;
  border-color: red;
`;

// Likkle Popup
export const Wrapper = styled.span`
  position: relative;
  display: inline-block;
`;

export const Popup = styled.span`
  transform: translateX(-50%);
  padding: 4px;
  width: 50px;
  background-color: black;
  color: white;
  font-size: 14px;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
`;

export const LinkBlock = styled(Link)`
  height: fit-content;
`;

// All the hidden Content Styles export will go here

export const HiddenContainer = styled.div`
display: none;
@media screen and (max-width: 1468px) {
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100%;
  width: 100%;
  align-items: center;
  align-content: center;
`;

export const HiddenTitle = styled.div`
  color: white;
  font-size: 65px;
  font-weight: bold;
`;
export const HiddenTyper = styled.div`
  color: white;
  font-size: 35px;
  font-weight: bold;
  width: 275px;
`;
export const HiddenImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: auto;
  // background-color: red;
`;
export const HiddenImageMe = styled.img`
  height: auto;
  width: 300px;
`;
export const LittleIntro = styled.div`
  color: white;
  font-size: 20px;
  max-width: 500px;
  text-align: center;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding-top: 20px;
  width: 95%;
`;
export const HiddenTechSkillsTitle = styled.div`
  color: white;
  font-size: 35px;
  font-weight: bold;
  margin-top: 30px;
`;
export const HiddenTechSkills = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 80px;

  &::-webkit-scrollbar {
    height: 8px;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: red; /* Change the color as desired */
    border-radius: 4px; /* Adjust the border radius as desired */
  }

  /* Optional: Styles for the scrollbar track on hover */
  &::-webkit-scrollbar-track:hover {
    background-color: #1e1e1e; /* Change the color as desired */
    transition: ease-in-out 2s;
  }
`;
export const SkillsHidden = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  width: 800px;
`;
export const BadgesHidden = styled.img``;
export const Hiddenfooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-top: 30px;
  gap: 20px;
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;
export const IAC = styled.div`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;
export const WIADWrapper = styled.div`
  display: flex;
  gap: 10px;
  color: white;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media screen and (max-width: 425px) {
    flex-direction: column;
    gap: 0px;
  }
`;
export const HiddenNav = styled.div`
  display: flex;
  width: 100%;
  border-radius: 100px;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  height: 60px;
  backdrop-filter: blur(100px); /* Blurry effect */

  // Additional styles for better readability
  padding: 6px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  self-align: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;
export const HiddenLinks = styled(Link)`
  font-size: 15px;
  color: #7a7a7a;
  font-weight: bold;
  width: 100px;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  &: hover {
    color: white;
    transition: ease-in-out 0.3s;
  }
`;
export const HiddenSocials = styled.div`
  display: flex;
  padding-bottom: 20px;
  width: 80%;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;
export const HiddenSocialLinks = styled.a``;
export const HiddenIcons = styled.img`
  height: auto;
  self-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    filter: drop-shadow(0 0 0.9px rgba(255, 255, 255, 0.7));
    transform: translateY(-3px);
  }
`;
