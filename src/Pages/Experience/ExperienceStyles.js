// Import The styled-components Library
import styled from "styled-components";

// Importing the routing library
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: #1e1e1e;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow: hidden;

  @media screen and (max-width: 1175px) {
    height: 1000px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 2px;
      border-radius: 100px;
      justify-content: none;
      align-items: none;
      align-content: none;
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
  @media screen and (max-width: 725px) {
    height: 100%;
    overflow-y: scroll;
    background-color: black;
    overflow-y: scroll;
  }
`;

export const MiddleDiv = styled.div`
  width: 80%;
  max-width: 1648px;
  min-width: 1000px;
  height: 90%;
  max-height: 1500px;
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
    width: 100%;
    height: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 1175px) {
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 1000px;
  }
  @media screen and (max-width: 725px) {
    display: none;
  }
`;

// The left most div
export const LeftArrowDiv = styled(Link)`
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  text-align: center;
  width: 10%;
  max-width: 200px;
  cursor: default;
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
    cursor: pointer;
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const TopSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 76%;
  max-height: 800px;
  @media screen and (max-width: 1175px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 705px) {
    margin-top: 150px;
  }
  @media screen and (max-width: 522px) {
    margin-top: 400px;
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
  height: 22%;
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
  width: 70%;
  justify-content: center;
  text-align: left;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1175px) {
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    width: 100%;
    margin-top: 20px;
    height: 1000px;
  }
  @media screen and (max-width: 905px) {
    width: vw;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
  }
  @media screen and (max-width: 522px) {
    padding-top: 60px;
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

// the right most div should be the same as the one on the left
export const RightArrowDiv = styled(Link)`
  height: 100vh;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  text-align: center;
  width: 20%;
  max-width: 200px;
  cursor: default;
  @media screen and (max-width: 1468px) {
    display: none;
  }
`;

export const RightContent = styled.div`
  width: 30%;
  height: 60%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-left-width: 5px;
  border-color: red;
  @media screen and (max-width: 1175px) {
    border-bottom-width: 5px;
    border-left-width: 0;
    border-color: red;
    flex-direction: column;
    height: 80%;
  }
`;

export const TheName = styled.div`
  color: ${(props) => (props.active ? "#FF6B6B" : "white")};
  font-weight: bold;
  font-size: 18px;
  width: fit-content;
  &:hover {
    cursor: pointer;
    transform: translateY(-1px);
    transition: ease-in-out 0.2s;
    color: red;
  }
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: red;
`;

export const ExperienceContainer = styled.div`
  width: 90%;
  height: auto;
  @media screen and (max-width: 905px) {
    width: 70%;
  }
  @media screen and (max-width: 705px) {
    width: 50%;
  }
  @media screen and (max-width: 522px) {
    width: 40%;
  }
`;

export const SubHeader = styled.div`
  color: red;
  font-weight: bold;
  font-size: 35px;
  margin-left: 50px;
  @media screen and (max-width: 1175px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 905px) {
    font-size: 20px;
  }
`;
export const SubSubHeader = styled.div`
  color: #ff6b6b;
  font-weight: bold;
  font-size: 20px;
  margin-left: 50px;
`;

export const LittleDescription = styled.div`
  color: white;
  //   font-weight: bold;
  font-size: 15px;
  margin-left: 50px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

export const Circle = styled.div`
  width: 1px;
  border-width: 5px;
  height: 1px;
  border-radius: 20px;
  border-color: red;
`;

export const DesText = styled.div`
  // padding-left: 10px;
  //   border-left-width: 5px;
  //   border-color: red;
  //   border-radius: 5px;
`;

export const DesText1 = styled.div`
  padding-left: 10px;
  border-left-width: 5px;
  border-color: red;
  border-radius: 5px;
`;

export const DesText0 = styled.div``;

export const HelpContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 1175px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 725px) {
    display: none;
  }
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

// This is where the styles for the hidden components will go
// 725 px

export const HiddenContent = styled.div`
  display: none;
  @media screen and (max-width: 725px) {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 100vh:
    justify-content: center;
    align-items: center;
    align-content: center;
  }
`;

export const HiddenSectionsMPE = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 20px;
`;

export const HiddenSectionsTC = styled.div`
  @media screen and (max-width: 725px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HiddenSectionsLHH = styled.div`
  @media screen and (max-width: 725px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HiddenSectionsTCC = styled.div`
  @media screen and (max-width: 725px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HiddenSectionsCPC = styled.div`
  @media screen and (max-width: 725px) {
    display: flex;
    flex-direction: column;
  }
`;

export const HiddenIntroContainer = styled.div`
  @media screen and (max-width: 725px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
  @media screen and (max-width: 635px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
  }
`;

export const HiddenIntro = styled.div`
  @media screen and (max-width: 725px) {
    font-size: 35px;
    font-weight: bold;
    color: red;
  }
  @media screen and (max-width: 700px) {
    font-size: 30px;
`;

export const HiddenIntroName = styled.div`
  @media screen and (max-width: 725px) {
    display: flex;
    flex-direction: column;
    color: #ff6b6b;
    font-weight: bold;
    font-size: 20px;
  }
`;
export const HiddenIntroDescription = styled.div`
  @media screen and (max-width: 725px) {
    color: white;
    font-size: 15px;
  }
`;

export const HiddenIntroDescriptionContainer = styled.div`
  @media screen and (max-width: 725px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterNote = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  gap: 10px;
`;

export const LFW = styled.div`
  color: white;
  font-weight: bold;
`;

export const IF = styled.div`
  font-size: 12px;
  color: #666768;
  padding-bottom: 10px;
`;

export const HiddenNavBar = styled.div`
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
export const NavbarItems = styled(Link)`
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

export const WiadDiv = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
  width: fit-content;
  border-radius: 100px;
  font-weight: bold;
  font-size: 12;
  display: flex;
  border-color: red;
  border-width: 3px;
`;

export const FooterNoteShown = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  gap: 10px;
`;

export const LFWShown = styled.div`
  color: white;
  font-weight: bold;
`;

export const IFShown = styled.div`
  font-size: 12px;
  color: #666768;
  padding-bottom: 10px;
`;

export const WiadDivShown = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  color: white;
  width: fit-content;
  border-radius: 100px;
  font-weight: bold;
  font-size: 12;
  display: flex;
  border-color: red;
  border-width: 3px;
  &:hover {
    background-color: red;
    transition: ease-in-out 0.3s;
    color: black;
    cursor: pointer;
  }
`;
