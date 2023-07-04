// Importing the styled components
import styled from "styled-components";

// Importing the Routing
import { Link } from "react-router-dom";

// Creating all the styling from the Projects.js into export export const
// The left arrow
export const LeftArrowDiv = styled(Link)`
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

// The main Container

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
    height: max-content;
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
    @media screen and (max-width: 915px) {
      height: 100%;
      overflow-y: scroll;
      background-color: black;
      overflow-y: scroll;
    }
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
  @media screen and (max-width: 915px) {
    display: none;
  }
`;

// The left most div

// This is where the Bottom Section of the middle div will go
export const BottonSection = styled.div`
  width: 80%;
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 25%;
  background-color: black;
  margin-bottom: 1px;
  @media screen and (max-width: 1175px) {
    margin-top: 20px;
  }
`;

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
`;

// The Links Styles go here
export const TheLinks = styled(Link)`
  //   font-family: "Ubuntu", sans-serif;
  color: #7a7a7a;
  font-weight: bold;

  &:hover {
    color: white;
    transition: ease-in-out 0.2s;
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

// Top Section
export const TopSection = styled.div`
  width: 99.7%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: 75%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: black;
  }
  &::-webkit-scrollbar-thumb {
    background-color: red; /* Change the color as desired */
    border-radius: 4px; /* Adjust the border radius as desired */
  }

  /* Optional: Styles for the scrollbar track on hover */
  &::-webkit-scrollbar-track:hover {
  }
  @media screen and (max-width: 1175px) {
    flex-direction: column-reverse;
  }
`;

export const TheTitleBlock = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  align-items: center;
  align-content: center;
  height: fit-content;
`;

export const TheTitle = styled.div`
  color: red;
  font-size: 35px;
  font-weight: bold;
  margin-top: 50px;
  margin-left: 50px;
`;

export const Check = styled.div`
  color: #ff6b6b;
  font-size: 20px;
  margin-top: 50px;
  margin-right: 50px;
`;

export const TopSectionContainer = styled.div`
  width: 100%;
  height: 1000px;
`;

export const InfoContainerA = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  margin-bottom: 33px;
`;

export const InfoContainerD = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  margin-bottom: 33px;
`;

export const InfoContainerC = styled.div`
  margin-bottom: 33px;
  height: 300px;
  width: 100%;
  display: flex;
`;
export const InfoContainerN = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
`;
export const LeftContainer = styled.div`
  width: 70%;
`;
export const RightContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-left-width: 5px;
  border-color: red;
`;

// The Circle
export const Circle = styled.div`
  width: 1px;
  border-width: 5px;
  height: 1px;
  border-radius: 20px;
  border-color: red;
`;

export const ProjectDisplay = styled.div`
  width: 100%;
  height: 300px;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
`;

export const ProjectNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const ProjectProgress = styled.div`
  color: #ff6b6b;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  border-width: 2px;
  border-color: red;
  width: auto;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 50px;
`;

export const ProjectName = styled.div`
  color: red;
  font-size: 35px;
  font-weight: bold;
  margin-left: 50px;
`;
export const Description = styled.div`
  margin-left: 50px;
  margin-right: 50px;
  color: white;
`;
export const TIO = styled.a`
  width: fit-content;
  height: fit-content;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 12px;
  cursor: pointer;
  margin-left: 50px;
  margin-top: 10px;
  border-width: 2px;
  border-color: red;
  font-weight: bold;
  color: white;
  &:hover {
    background-color: red;
    transition: ease-in-out 0.3s;
  }
`;
export const TION = styled.div`
  width: fit-content;
  height: fit-content;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 12px;
  margin-left: 50px;
  margin-top: 10px;
  border-width: 2px;
  border-color: red;
  font-weight: bold;
  color: white;
  cursor: no-drop;
`;

export const Name = styled.div`
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

export const NameN = styled.div`
  color: white;
  font-weight: bold;
  font-size: 20px;
  width: fit-content;

  &:hover {
    cursor: no-drop;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  width: 950px;
  gap: 20px;
  height: 100px;
  justify-content: center;
  align-items: center;
  align-content: center;

  @media screen and (max-width: 1175px) {
    // overflow-x: scroll;
  }
`;

export const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  width: 900px;
  height: fit-content;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: ease-in-out 0.3s;
  }
`;

export const Badges = styled.img`
  width: auto;
  height: 35px;
  @media screen and (max-width: 1175px) {
    height: 35px;
  }
`;

export const BadgeDes = styled.div`
  color: white;
`;

export const GalleryWrapper = styled.div`
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  margin-left: 50px;
  overflow-x: scroll;
  overflow-y: hidden;

  &:hover {
    transition: ease-in-out 0.3s;
  }

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: red; /* Change the color as desired */
    border-radius: 4px; /* Adjust the border radius as desired */
  }

  /* Optional: Styles for the scrollbar track on hover */
  &::-webkit-scrollbar-track:hover {
    background-color: #1e1e1e; /* Change the color as desired */
  }
`;

export const Gallery = styled.div`
  height: 100%;
  width: 2000px;
  // margin-left: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;
`;
export const Gallery2 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 20px;
`;

export const GalleryItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const GalleryItemsN = styled.div`
  display: flex;
  flex-direction: column;
  width: 285px;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 95%;
`;

export const GalleryD = styled.div`
  height: auto;
  width: 2000px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 20px;
  align-items: center;
`;

export const GalleryItemsD = styled.div`
  display: flex;
  flex-direction: column;
  width: 285px;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 95%;
`;

export const ImagesD = styled.img`
  height: 100%;
  width: auto;
`;

export const Images = styled.img`
  width: 100%;
`;

export const ImagesN = styled.img`
  width: auto;
  height: 100%;
`;

export const GalleryDes = styled.div`
  color: white;
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

export const HiddenContent = styled.div`
  display: none;
  @media screen and (max-width: 915px) {
    width: 90%;
    height: max-content;
    display: flex;
    flex-direction: column;
    background-color: black;
  }
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export const ProjectCard = styled.div`
  align-items: center;
  align-content: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 300px;
  border-width: 1px;
  border-color: red;
  padding: 20px;
  border-radius: 5px;
  cursor: default;
  background-color: #000;
  //   color: #fff;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: red;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
`;

export const PopupContent = styled.div`
  background-color: #000;
  color: #fff;
  border-width: 3px;
  border-color: red;
  padding: 20px;
  border-radius: 5px;
  max-width: 600px;
  width: 90%;
  overflow: hidden;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .gallery {
    display: flex;
    overflow-x: scroll;
    gap: 10px;
    margin-bottom: 20px;
    &::-webkit-scrollbar {
      height: 10px;
      border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkred; /* Change the color as desired */
      border-radius: 4px; /* Adjust the border radius as desired */
    }

    /* Optional: Styles for the scrollbar track on hover */
    &::-webkit-scrollbar-track:hover {
      background-color: #1e1e1e; /* Change the color as desired */
      transition: ease-in-out 2s;
    }
  }

  .gallery img {
    width: 110%;
    border-radius: 5px;
  }

  .tools {
    margin-top: 20px;
    font-weight: bold;
    white-space: nowrap;
  }

  ul {
    margin: 0;
    padding: 0;
    height: 100px;
    display: flex;
    align-items: center;
    gap: 10px;
    list-style-type: none;
    justify-content: flex-start;
    overflow-x: auto;
    &::-webkit-scrollbar {
      height: 7px;
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

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #fff;
    min-width: 80px;
  }

  li img {
    height: auto;
    height: 35px;
    object-fit: cover;
    margin-bottom: 10px;

    &:hover {
      filter: drop-shadow(0 0 0.9px rgba(255, 255, 255, 0.8));
      transform: translateY(-3px);
      transition: ease-in-out 0.3s;
    }
  }

  li span {
    font-size: 12px;
  }

  button {
    color: gray;
  }
`;

export const ProjectTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: red;
  ${ProjectCard}:hover & {
    color: black;
    transition: ease-in-out 0.5s;
  }
`;
export const ProjectTitlePopup = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: red;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  display: flex;
`;
export const ProjectDescription = styled.div`
  font-size: 15px;
  color: white;
`;

export const CTE = styled.div`
  color: red;
  font-weight: bold;
  font-size: 15px;
  ${ProjectCard}:hover & {
    color: black;
    transition: ease-in-out 0.5s;
    cursor: pointer;
  }
`;

export const PageTitle = styled.div`
  font-size: 35px;
  font-weight: bold;
  color: red;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  margin-top: 20px;
`;

export const ScrollTest = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  height: fit-content;
  margin-left: 50px;
  margin-right: 50px;
  &::-webkit-scrollbar {
    height: 10px;
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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  gap: 10px;
  margin-top: 20px;
`;

export const Demo = styled.a`
  width: fit-content;
  height: fit-content;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 12px;
  cursor: pointer;
  border-width: 2px;
  border-color: red;
  font-weight: bold;
  color: white;
  &:hover {
    background-color: red;
    transition: ease-in-out 0.3s;
  }
`;

export const PopupContainerMail = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const PopupContentMail = styled.div`
  background-color: black;
  padding: 20px;
  border-radius: 5px;
  border-width: 3px;
  max-width: 400px;
  width: 90%;
  border-color: red;

  h2 {
    text-align: center;
    color: red;
    font-size: 20px;
    font-weight: bold;
  }
  h3 {
    text-align: center;
    margin-bottom: 10px;
    color: #7a7a7a;
    font-size: 12px;
  }

  form {
    display: grid;
    gap: 10px;
  }

  label {
    display: block;
    // font-weight: bold;
    margin-bottom: 5px;
    color: white;
  }

  textarea,
  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border-width: 3px;
    border-color: red;
    background-color: #1e1e1e;
  }

  button[type="submit"],
  button[type="button"] {
    padding-bottom: 10px;
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    color: white;
    // width: 150px;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    font-size: 12;
    display: flex;
    justify-content: center;
    align-items: center;

    border-color: red;
    border-width: 3px;
    &:hover {
      background-color: red;
      transition: ease-in-out 0.3s;
      color: black;
      cursor: pointer;
    }
  }
`;

export const IFShown = styled.div`
  font-size: 12px;
  color: #666768;
  padding-bottom: 10px;
`;
