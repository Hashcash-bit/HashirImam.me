// Important React Dependencies
import React, { useState, useRef } from "react";

// Mail Dependencies
import emailjs from "@emailjs/browser";

// Rounting
import { Link } from "react-router-dom";

// Images
import RightArrow from "../../img/RA.svg";
import LeftArrow from "../../img/LA.svg";

// Styling
import styled from "styled-components";
import "../Utils/Container.css";

// Icons
import GH from "../../img/GH.svg";
import LI from "../../img/LI.svg";
import GM from "../../img/GM.svg";
import D from "../../img/D.svg";

// This is where the Tools I used will go
import A from "../../img/A.svg";
import R from "../../img/R.svg"; // React || Antive || Covid-19 Tracker || Nexifia
import F from "../../img/f.svg"; // Figma || Antive || Covid-19 Tracker || Nexifia
import GIT from "../../img/GIT.svg"; // Git || Antive || Covid-19 Tracker || Nexifia
import FB from "../../img/fB.svg"; // Firebase || Antive || Covid-19 Tracker || Nexifia
import NODE from "../../img/NODE.svg"; // NodeJS || Antive || Covid-19 Tracker || Nexifia
import NET from "../../img/NET.svg"; // Netlify || Antive || Covid-19 Tracker
import LE from "../../img/LE.svg"; // Leaflet || Covid-19 Tracker
import MUI from "../../img/MUI.svg"; // Material UI || Covid-19 Tracker
import B from "../../img/B.svg"; // Babel || Nexifia
import ALEX from "../../img/ALEX.svg"; // Altexsoft || Nexifia
import E from "../../img/E.svg"; // Expo || Nexifia
import Nfc from "../../img/N.svg"; // NFC || Nexifia
import GitHub from "../../img/GitHub.svg"; // GitHub || Nexifia || Antive || Covid-19 Tracker
import FS from "../../img/FS.svg"; // FireStore || Nexifia || Antive
import P from "../../img/P.svg";
import DISC from "../../img/DISC.svg";
import RASP from "../../img/RASP.svg";
import MDB from "../../img/MDB.svg";

// Antive Images
import LandingPage from "../../img/LandingPage.png";
import LogInPage from "../../img/LogInPage.png";
import SignUpPage from "../../img/SignUpPage.png";
import Dashboard from "../../img/Dashboard.png";
import Agenda from "../../img/Agenda.png";
import Budget from "../../img/Budgeting.png";
import Drive from "../../img/Drive.png";

// Covid-19 Tracker Images
import CTDash from "../../img/CTDash.png";
import OM from "../../img/OM.png";

// Nexifia Images
import OnBoarding from "../../img/NLandingPage.png";
import SignUp from "../../img/NSignUpPage.png";
import LogIn from "../../img/NLogInPage.png";
import HomeSkeleton from "../../img/HomeSkeleton.svg";
import History from "../../img/History.png";
import Search from "../../img/Search.png";
import Profile from "../../img/Profile.svg";
import UC from "../../img/UC.png";

// Waffles Bot
import DBAD from "../../img/DBAD.svg"
import DBCP from "../../img/DBCP.svg"
import DBMF from "../../img/DBMF.svg"
import DBMIH from "../../img/DBMIH.svg"
import DBQS from "../../img/DBQS.svg"
import DBRC from "../../img/DBRC.svg"
import DBRH from "../../img/DBRH.svg"
import DBInitialize from "../../img/DBInitialize.svg"

// Importing all the styled components from ProjectStyles.js
import {
  Container,
  MiddleDiv,
  LeftArrowDiv,
  Image,
  TopSection,
  BottonSection,
  TheNavigation,
  TheLinks,
  TheSocials,
  TheTitleBlock,
  TheTitle,
  Check,
  TopSectionContainer,
  InfoContainerA,
  InfoContainerC,
  InfoContainerN,
  LeftContainer,
  RightContainer,
  Name,
  NameN,
  ProjectDisplay,
  ProjectNameContainer,
  ProjectName,
  ProjectProgress,
  Description,
  TIO,
  SkillsWrapper,
  Skills,
  Badges,
  BadgeDes,
  GalleryWrapper,
  Gallery,
  Gallery2,
  GalleryItems,
  GalleryItemsN,
  Images,
  ImagesN,
  GalleryDes,
  Circle,
  SocialLinks,
  Icons,
  TION,
  Wrapper,
  Popup,
  HiddenContent,
  ProjectsContainer,
  ProjectCard,
  PopupContainer,
  PopupContent,
  ProjectTitle,
  ProjectTitlePopup,
  ProjectDescription,
  CTE,
  PageTitle,
  ScrollTest,
  ButtonWrapper,
  Demo,
  PopupContainerMail,
  PopupContentMail,
  IFShown,
  InfoContainerD,
  GalleryItemsD,
  ImagesD,
  GalleryD
} from "./ProjectStyles";

import {
  FooterNote,
  FooterNoteShown,
  HiddenNavBar,
  IF,
  LFW,
  LFWShown,
  NavbarItems,
  WiadDiv,
  WiadDivShown,
} from "../Experience/ExperienceStyles";

import { LinkBlock } from "../Hello/HelloStyles";

// Importing the icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";

// Animation
import { motion } from "framer-motion";

// The popup logic
const ElementWithPopup = ({ children, message }) => {
  const handleMouseEnter = (event) => {
    event.currentTarget.querySelector(".popup").style.opacity = 1;
    event.currentTarget.querySelector(".popup").style.visibility = "visible";
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.querySelector(".popup").style.opacity = 0;
    event.currentTarget.querySelector(".popup").style.visibility = "hidden";
  };

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      <Popup className="popup">{message}</Popup>
    </Wrapper>
  );
};

const Project = () => {
  // The Popup logic will appear hear
  const [isOpen, setIsOpen] = useState(false);

  // This is where Mail logic will go
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();
    // Perform any desired action with the form data here
    emailjs
      .sendForm(
        "service_e938i5q",
        "template_9ctb4ac",
        form.current,
        "81YOb-77jzHILUxrk"
      )
      .then((response) => {
        console.log("SUCCESS!", response);
        alert(
          "Your message has been sent successfully. I will get back to you as soon as possible."
        );
      })
      .catch((error) => {
        console.log("FAILED...", error);
        alert("Sorry, your message was not sent. Please try again later.");
      });
    // Reset form fields and close the popup
    setIsOpen(false);
  };

  // This is where the project slider will go
  const [activeButtonA, setActiveButtonA] = useState(1);
  const [activeButtonC, setActiveButtonC] = useState(1);
  const [activeButtonN, setActiveButtonN] = useState(1);
  const [activeButtonD, setActiveButtonD] = useState(1);

  const handleButtonClickA = (buttonId) => {
    setActiveButtonA(buttonId);
  };

  const handleButtonClickC = (buttonId) => {
    setActiveButtonC(buttonId);
  };

  const handleButtonClickN = (buttonId) => {
    setActiveButtonN(buttonId);
  };

  const handleButtonClickD = (buttonId) => {
    setActiveButtonD(buttonId);
  };

  const renderContainerA = (buttonId) => {
    if (activeButtonA === buttonId) {
      return <ProjectDisplay>{getContentForButtonA(buttonId)}</ProjectDisplay>;
    }
    return null;
  };

  const renderContainerC = (buttonId) => {
    if (activeButtonC === buttonId) {
      return <ProjectDisplay>{getContentForButtonC(buttonId)}</ProjectDisplay>;
    }
    return null;
  };

  const renderContainerN = (buttonId) => {
    if (activeButtonN === buttonId) {
      return <ProjectDisplay>{getContentForButtonN(buttonId)}</ProjectDisplay>;
    }
    return null;
  };

  const renderContainerD = (buttonId) => {
    if (activeButtonD === buttonId) {
      return <ProjectDisplay>{getContentForButtonD(buttonId)}</ProjectDisplay>;
    }
    return null;
  };

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------- A --------------------------------------------
  //-------------------------------------------------------------------------------------------------------

  const getContentForButtonA = (buttonId) => {
    switch (buttonId) {
      case 1:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Antive.</ProjectName>
              <ProjectProgress>Completed</ProjectProgress>
            </ProjectNameContainer>
            <Description>
              Introducing a student-focused web application powered by Node.js
              and Firebase. This innovative tool offers a comprehensive agenda
              feature for efficient task organization, a secure drive tool for
              easy file management, a budgeting tool to track expenses, and a
              chat feature to foster a supportive community. Simplifying student
              life, this project aims to enhance productivity, organization, and
              collaboration in a user-friendly and secure environment.
            </Description>
            <TIO
              href="https://61350e7c40e8e9603eed77be--festive-swartz-7d699d.netlify.app/"
              target="_blank"
            >
              Try It Out
            </TIO>
          </>
        );
      case 2:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Antive.</ProjectName>
              <ProjectProgress>Completed</ProjectProgress>
            </ProjectNameContainer>
            <ScrollTest>
              <SkillsWrapper>
                <Skills>
                  <Badges src={NODE} />
                  <BadgeDes>NodeJS</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={R} />
                  <BadgeDes>ReactJS</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={FB} />
                  <BadgeDes>Firebase</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={FS} />
                  <BadgeDes>Firestore</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={F} />
                  <BadgeDes>Figma</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={GIT} />
                  <BadgeDes>Git</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={GitHub} />
                  <BadgeDes>GitHub</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={NET} />
                  <BadgeDes>Netlify</BadgeDes>
                </Skills>
              </SkillsWrapper>
            </ScrollTest>
            <TIO
              href="https://61350e7c40e8e9603eed77be--festive-swartz-7d699d.netlify.app/"
              target="_blank"
            >
              Try It Out
            </TIO>
          </>
        );
      case 3:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Antive.</ProjectName>
              <ProjectProgress>Completed</ProjectProgress>
            </ProjectNameContainer>
            <GalleryWrapper>
              <Gallery>
                <GalleryItems>
                  <Images src={LandingPage} />
                  <GalleryDes>Landing Page</GalleryDes>
                </GalleryItems>
                <GalleryItems>
                  <Images src={LogInPage} />
                  <GalleryDes>LogIn Page</GalleryDes>
                </GalleryItems>
                <GalleryItems>
                  <Images src={SignUpPage} />
                  <GalleryDes>SignUp Page</GalleryDes>
                </GalleryItems>
                <GalleryItems>
                  <Images src={Dashboard} />
                  <GalleryDes>Dashboard</GalleryDes>
                </GalleryItems>
                <GalleryItems>
                  <Images src={Agenda} />
                  <GalleryDes>Agenda Page</GalleryDes>
                </GalleryItems>
                <GalleryItems>
                  <Images src={Budget} />
                  <GalleryDes>Budgetting Page</GalleryDes>
                </GalleryItems>
                <GalleryItems>
                  <Images src={Drive} />
                  <GalleryDes>Drive Page</GalleryDes>
                </GalleryItems>
              </Gallery>
            </GalleryWrapper>
            <TIO
              href="https://61350e7c40e8e9603eed77be--festive-swartz-7d699d.netlify.app/"
              target="_blank"
            >
              Try It Out
            </TIO>
          </>
        );
      default:
        return null;
    }
  };

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------- C --------------------------------------------
  //-------------------------------------------------------------------------------------------------------

  const getContentForButtonC = (buttonId) => {
    switch (buttonId) {
      case 1:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Covid-19 Tracker</ProjectName>
              <ProjectProgress>Completed</ProjectProgress>
            </ProjectNameContainer>
            <Description>
              Introducing a COVID-19 tracker project I've developed, leveraging
              various reliable APIs to deliver the most accurate and up-to-date
              information. This tracker provides real-time data on COVID-19
              cases, including global statistics, country-specific data, and
              regional insights. With an intuitive interface, users can easily
              navigate and explore essential information such as total cases,
              recoveries, and fatalities. This project aims to keep users
              informed and empowered with accurate data during these challenging
              times.
            </Description>
            <TIO href="https://covid-tracker-1e491.web.app/" target="_blank">
              Try It Out
            </TIO>
          </>
        );
      case 2:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Covid-19 Tracker</ProjectName>
              <ProjectProgress>Completed</ProjectProgress>
            </ProjectNameContainer>
            <ScrollTest>
              <SkillsWrapper>
                <Skills>
                  <Badges src={NODE} />
                  <BadgeDes>NodeJS</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={R} />
                  <BadgeDes>ReactJS</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={FB} />
                  <BadgeDes>Firebase</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={LE} />
                  <BadgeDes>Leaflet API</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={MUI} />
                  <BadgeDes>Material</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={GIT} />
                  <BadgeDes>Git</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={GitHub} />
                  <BadgeDes>GitHub</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={NET} />
                  <BadgeDes>Netlify</BadgeDes>
                </Skills>
              </SkillsWrapper>
            </ScrollTest>
            <TIO href="https://covid-tracker-1e491.web.app/" target="_blank">
              Try It Out
            </TIO>
          </>
        );
      case 3:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Covid-19 Tracker</ProjectName>
              <ProjectProgress>Completed</ProjectProgress>
            </ProjectNameContainer>
            <GalleryWrapper>
              <Gallery2>
                <GalleryItems>
                  <Images src={CTDash} />
                  <GalleryDes>Dashboard</GalleryDes>
                </GalleryItems>
                <GalleryItems>
                  <Images src={OM} />
                  <GalleryDes>Option Modal</GalleryDes>
                </GalleryItems>
              </Gallery2>
            </GalleryWrapper>
            <TIO href="https://covid-tracker-1e491.web.app/" target="_blank">
              Try It Out
            </TIO>
          </>
        );
      default:
        return null;
    }
  };
  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------- N --------------------------------------------
  //-------------------------------------------------------------------------------------------------------
  const getContentForButtonN = (buttonId) => {
    switch (buttonId) {
      case 1:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Nexifia</ProjectName>
              <ProjectProgress>In Progress</ProjectProgress>
            </ProjectNameContainer>
            <Description>
              Introducing an exciting and transformative mobile application
              currently under construction. This innovative project aims to
              revolutionize the way healthcare providers and clinics interact,
              streamlining communication and improving patient care. With a
              focus on efficiency and collaboration, this app will empower
              healthcare professionals to enhance their workflows, leading to
              improved diagnoses, treatments, and overall patient outcomes. Stay
              tuned for more updates as we work diligently to bring this
              groundbreaking project to life.
            </Description>
            <TION>Under Construction</TION>
          </>
        );
      case 2:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Nexifia</ProjectName>
              <ProjectProgress>In Progress</ProjectProgress>
            </ProjectNameContainer>
            <ScrollTest>
              <SkillsWrapper>
                <Skills>
                  <Badges src={NODE} />
                  <BadgeDes>NodeJS</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={R} />
                  <BadgeDes>ReactJs</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={E} />
                  <BadgeDes>Expo</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={B} />
                  <BadgeDes>Babel</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={MUI} />
                  <BadgeDes>Material</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={FB} />
                  <BadgeDes>Firebase</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={FS} />
                  <BadgeDes>Firestore</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={ALEX} />
                  <BadgeDes>Altexsoft</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={Nfc} />
                  <BadgeDes>Nfc</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={GIT} />
                  <BadgeDes>Git</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={GitHub} />
                  <BadgeDes>GitHub</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={NET} />
                  <BadgeDes>Netlify</BadgeDes>
                </Skills>
              </SkillsWrapper>
            </ScrollTest>
            <TION>Under Construction</TION>
          </>
        );
      case 3:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Nexifia</ProjectName>
              <ProjectProgress>In Progress</ProjectProgress>
            </ProjectNameContainer>
            <GalleryWrapper>
              <Gallery>
                <GalleryItemsN>
                  <ImagesN src={UC} />
                  <GalleryDes>Under Construction</GalleryDes>
                </GalleryItemsN>
              </Gallery>
            </GalleryWrapper>
            <TION>Under Construction</TION>
          </>
        );
      default:
        return null;
    }
  };

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------- D --------------------------------------------
  //-------------------------------------------------------------------------------------------------------

  const getContentForButtonD = (buttonId) => {
    switch (buttonId) {
      case 1:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Waffle's Bot</ProjectName>
              <ProjectProgress>Completed</ProjectProgress>
            </ProjectNameContainer>
            <Description>
              A powerful Discord FAQ bot that utilizes advanced algorithms and
              natural language processing to provide instant answers to
              frequently asked questions. By analyzing the keywords in users'
              prompts, the bot intelligently retrieves relevant answers from a
              MongoDB database. With its seamless integration and quick response
              time, "Waffle's Bot" offers a convenient and efficient way for
              server members to find the information they need
            </Description>
            <TION>Discord Bot</TION>
          </>
        );
      case 2:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Waffle's Bot</ProjectName>
              <ProjectProgress>Completed</ProjectProgress>
            </ProjectNameContainer>
            <ScrollTest>
              <SkillsWrapper>
                <Skills>
                  <Badges src={P} />
                  <BadgeDes>Python</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={DISC} />
                  <BadgeDes>Discord</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={MDB} />
                  <BadgeDes>MongoDB</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={GIT} />
                  <BadgeDes>Git</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={GitHub} />
                  <BadgeDes>GitHub</BadgeDes>
                </Skills>
                <Skills>
                  <Badges src={RASP} />
                  <BadgeDes>RaspberryPi</BadgeDes>
                </Skills>
              </SkillsWrapper>
            </ScrollTest>
            <TION>Discord Bot</TION>
          </>
        );
      case 3:
        return (
          <>
            <ProjectNameContainer>
              <ProjectName>Waffle's Bot</ProjectName>
              <ProjectProgress>Completed</ProjectProgress>
            </ProjectNameContainer>
            <GalleryWrapper>
              <GalleryD>
                <GalleryItemsD>
                  <ImagesD src={DBInitialize} />
                  <GalleryDes>Initailize The Bot</GalleryDes>
                </GalleryItemsD>
                <GalleryItemsD>
                  <ImagesD src={DBMF} />
                  <GalleryDes>Menu Filtering</GalleryDes>
                </GalleryItemsD>
                <GalleryItemsD>
                  <ImagesD src={DBCP} />
                  <GalleryDes>Command Parsing</GalleryDes>
                </GalleryItemsD>
                <GalleryItemsD>
                  <ImagesD src={DBQS} />
                  <GalleryDes>Question Selection</GalleryDes>
                </GalleryItemsD>
                {/* <GalleryItemsD>
                  <ImagesD src={DBMIH} />
                  <GalleryDes>Menu Input Handling</GalleryDes> */}
                {/* </GalleryItemsD> */}
                <GalleryItemsD>
                  <ImagesD src={DBRH} />
                  <GalleryDes>Reaction Handling</GalleryDes>
                </GalleryItemsD>
                <GalleryItemsD>
                  <ImagesD src={DBAD} />
                  <GalleryDes>Answer Display</GalleryDes>
                </GalleryItemsD>
              </GalleryD>
            </GalleryWrapper>
            <TION>Discord Bot</TION>
          </>
        );
      default:
        return null;
    }
  };

  // This is where the content after the 915px width will go
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  // This is where the projectData will go
  const projectsData = [
    {
      id: 1,
      title: "Antive.",
      description:
        "Introducing a student-focused web application powered by Node.js and Firebase. This innovative tool offers a comprehensive agenda feature for efficient task organization, a secure drive tool for easy file management, a budgeting tool to track expenses, and a chat feature to foster a supportive community. Simplifying student life, this project aims to enhance productivity, organization, and collaboration in a user-friendly and secure environment.",
      gallery: [
        LandingPage,
        LogInPage,
        SignUpPage,
        Dashboard,
        Agenda,
        Budget,
        Drive,
      ],
      tools: [
        {
          name: "NodeJS",
          icon: NODE,
        },
        {
          name: "ReactJS",
          icon: R,
        },
        {
          name: "Firebase",
          icon: FB,
        },
        {
          name: "Firestore",
          icon: FS,
        },
        {
          name: "Figma",
          icon: F,
        },
        {
          name: "GIT",
          icon: GIT,
        },
        {
          name: "GitHub",
          icon: GitHub,
        },
        {
          name: "Netlify",
          icon: NET,
        },
        // More tools add when needed
      ],
      demoLink:
        "https://61350e7c40e8e9603eed77be--festive-swartz-7d699d.netlify.app/",
    },
    {
      id: 2,
      title: "Covid-19 Tracker",
      description:
        "Introducing a COVID-19 tracker project I've developed, leveraging various reliable APIs to deliver the most accurate and up-to-date information. This tracker provides real-time data on COVID-19 cases, including global statistics, country-specific data, and regional insights. With an intuitive interface, users can easily navigate and explore essential information such as total cases, recoveries, and fatalities. This project aims to keep users informed and empowered with accurate data during these challenging times.",
      gallery: [CTDash, OM],
      tools: [
        {
          name: "NodeJS",
          icon: NODE,
        },
        {
          name: "ReactJS",
          icon: R,
        },
        {
          name: "Firebase",
          icon: FB,
        },
        {
          name: "Leaflet API",
          icon: LE,
        },
        {
          name: "Material UI",
          icon: MUI,
        },
        {
          name: "GIT",
          icon: GIT,
        },
        {
          name: "GitHub",
          icon: GitHub,
        },
        {
          name: "Netlify",
          icon: NET,
        },
        // More tools add when needed
      ],
      demoLink: "https://covid-tracker-1e491.web.app/",
    },
    {
      id: 3,
      title: "Nexifia",
      description:
        "Introducing an exciting and transformative mobile application currently under construction. This innovative project aims to revolutionize the way healthcare providers and clinics interact, streamlining communication and improving patient care. With a focus on efficiency and collaboration, this app will empower healthcare professionals to enhance their workflows, leading to improved diagnoses, treatments, and overall patient outcomes. Stay tuned for more updates as we work diligently to bring this groundbreaking project to life.",
      gallery: [UC],
      tools: [
        {
          name: "NodeJS",
          icon: NODE,
        },
        {
          name: "React Native",
          icon: R,
        },
        {
          name: "Babel",
          icon: B,
        },
        {
          name: "Material UI",
          icon: MUI,
        },
        {
          name: "Expo",
          icon: E,
        },
        {
          name: "NFC",
          icon: Nfc,
        },
        {
          name: "Firebase",
          icon: FB,
        },
        {
          name: "Firestore",
          icon: FS,
        },
        {
          name: "Alexsoft API",
          icon: ALEX,
        },
        {
          name: "GIT",
          icon: GIT,
        },
        {
          name: "GitHub",
          icon: GitHub,
        },
        {
          name: "Netlify",
          icon: NET,
        },
        // More tools add when needed
      ],
      // Create a demo link for this project
    },
    {
      id: 4,
      title: "Waffle's Bot",
      description:
        "A powerful Discord FAQ bot that utilizes advanced algorithms and natural language processing to provide instant answers to frequently asked questions. By analyzing the keywords in users' prompts, the bot intelligently retrieves relevant answers from a MongoDB database. With its seamless integration and quick response time, Waffle's Bot offers a convenient and efficient way for server members to find the information they need",
      gallery: [DBInitialize, DBMF, DBCP, DBQS, DBMIH, DBRH, DBAD],
      tools: [
        {
          name: "Python",
          icon: P,
        },
        {
          name: "Discord",
          icon: DISC,
        },
        {
          name: "Mongo DB",
          icon: MDB,
        },
        {
          name: "GIT",
          icon: GIT,
        },
        {
          name: "GitHub",
          icon: GitHub,
        },
        {
          name: "Raspberry Pi",
          icon: RASP,
        },
        // More tools add when needed
      ],
      // Create a demo link for this project
    },
  ];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <LeftArrowDiv>
          <LinkBlock to="/">
            <ElementWithPopup message="Hello.">
              <Image src={LeftArrow} alt="this the left image" />
            </ElementWithPopup>
          </LinkBlock>
        </LeftArrowDiv>
        <MiddleDiv>
          <TheTitleBlock>
            <TheTitle>Projects</TheTitle>
            <Check>Check them out, there are more to come!</Check>
          </TheTitleBlock>
          {/* This is where the main top div will go */}
          <TopSection>
            <TopSectionContainer>
              <InfoContainerN>
                <LeftContainer>
                  <div
                    className={`container-wrapper ${
                      activeButtonN === 1 ? "active" : ""
                    }`}
                  >
                    {renderContainerN(1)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonN === 2 ? "active" : ""
                    }`}
                  >
                    {renderContainerN(2)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonN === 3 ? "active" : ""
                    }`}
                  >
                    {renderContainerN(3)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonN === 4 ? "active" : ""
                    }`}
                  >
                    {renderContainerN(4)}
                  </div>
                </LeftContainer>
                <RightContainer>
                  <Name
                    active={activeButtonN === 1}
                    onClick={() => handleButtonClickN(1)}
                  >
                    Nexifia
                  </Name>
                  <Name
                    active={activeButtonN === 2}
                    onClick={() => handleButtonClickN(2)}
                  >
                    Tools Being Used
                  </Name>
                  <NameN>Gallery</NameN>
                </RightContainer>
              </InfoContainerN>
              <InfoContainerD>
                <LeftContainer>
                  <div
                    className={`container-wrapper ${
                      activeButtonD === 1 ? "active" : ""
                    }`}
                  >
                    {renderContainerD(1)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonD === 2 ? "active" : ""
                    }`}
                  >
                    {renderContainerD(2)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonD === 3 ? "active" : ""
                    }`}
                  >
                    {renderContainerD(3)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonD === 4 ? "active" : ""
                    }`}
                  >
                    {renderContainerD(4)}
                  </div>
                </LeftContainer>
                <RightContainer>
                  <Name
                    active={activeButtonD === 1}
                    onClick={() => handleButtonClickD(1)}
                  >
                    Waffle's Bot
                  </Name>
                  <Name
                    active={activeButtonD === 2}
                    onClick={() => handleButtonClickD(2)}
                  >
                    Tools Being Used
                  </Name>
                  <Name
                    active={activeButtonD === 3}
                    onClick={() => handleButtonClickD(3)}
                  >
                    Gallery
                  </Name>
                </RightContainer>
              </InfoContainerD>
              <InfoContainerA>
                <LeftContainer>
                  <div
                    className={`container-wrapper ${
                      activeButtonA === 1 ? "active" : ""
                    }`}
                  >
                    {renderContainerA(1)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonA === 2 ? "active" : ""
                    }`}
                  >
                    {renderContainerA(2)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonA === 3 ? "active" : ""
                    }`}
                  >
                    {renderContainerA(3)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonA === 4 ? "active" : ""
                    }`}
                  >
                    {renderContainerA(4)}
                  </div>
                </LeftContainer>
                <RightContainer>
                  <Name
                    active={activeButtonA === 1}
                    onClick={() => handleButtonClickA(1)}
                  >
                    Antive.
                  </Name>
                  <Name
                    active={activeButtonA === 2}
                    onClick={() => handleButtonClickA(2)}
                  >
                    Tools Used
                  </Name>
                  <Name
                    active={activeButtonA === 3}
                    onClick={() => handleButtonClickA(3)}
                  >
                    Gallery
                  </Name>
                </RightContainer>
              </InfoContainerA>
              <InfoContainerC>
                <LeftContainer>
                  <div
                    className={`container-wrapper ${
                      activeButtonC === 1 ? "active" : ""
                    }`}
                  >
                    {renderContainerC(1)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonC === 2 ? "active" : ""
                    }`}
                  >
                    {renderContainerC(2)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonC === 3 ? "active" : ""
                    }`}
                  >
                    {renderContainerC(3)}
                  </div>
                  <div
                    className={`container-wrapper ${
                      activeButtonC === 4 ? "active" : ""
                    }`}
                  >
                    {renderContainerC(4)}
                  </div>
                </LeftContainer>
                <RightContainer>
                  <Name
                    active={activeButtonC === 1}
                    onClick={() => handleButtonClickC(1)}
                  >
                    Covid-19 Tracker
                  </Name>
                  <Name
                    active={activeButtonC === 2}
                    onClick={() => handleButtonClickC(2)}
                  >
                    Tools Used
                  </Name>
                  <Name
                    active={activeButtonC === 3}
                    onClick={() => handleButtonClickC(3)}
                  >
                    Gallery
                  </Name>
                </RightContainer>
              </InfoContainerC>
            </TopSectionContainer>
          </TopSection>
          {/* This is where the Tab Bar at the bottom will go */}
          <BottonSection>
            <TheNavigation>
              <NavbarItems to="/Experience">Experience</NavbarItems>
              <NavbarItems to="/">Hello.</NavbarItems>
              <NavbarItems>
                <Circle />
              </NavbarItems>
            </TheNavigation>
            <FooterNoteShown>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2%",
                  width: "100%",
                  justifyContent: "center",
                  paddingTop: "15px",
                }}
              >
                <LFWShown>I am</LFWShown>
                <WiadDivShown onClick={() => setIsOpen(true)}>
                  Looking for Work
                </WiadDivShown>
              </div>
              <IFShown>
                Have an <strong>Opportunity</strong> for me? Please click the
                <strong>"Looking for Work"</strong> button above
              </IFShown>
            </FooterNoteShown>
          </BottonSection>
        </MiddleDiv>
        <HiddenContent>
          <PageTitle>My Projects</PageTitle>
          <ProjectsContainer>
            {projectsData.map((project) => (
              <ProjectCard key={project.id}>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <CTE onClick={() => handleProjectClick(project)}>
                  Click here to expand <KeyboardArrowRightRoundedIcon />
                </CTE>
              </ProjectCard>
            ))}
          </ProjectsContainer>

          {selectedProject && (
            <PopupContainer>
              <PopupContent>
                <ProjectTitlePopup>{selectedProject.title}</ProjectTitlePopup>
                <div className="gallery">
                  {selectedProject.gallery.map((image) => (
                    <img key={image} src={image} alt={selectedProject.title} />
                  ))}
                </div>
                <div className="tools">
                  <h3>Tools Used</h3>
                  <ul>
                    {selectedProject.tools.map((tool) => (
                      <li key={tool.name}>
                        <img src={tool.icon} alt={tool.name} />
                        <span>{tool.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ButtonWrapper>
                  <Demo href={selectedProject.demoLink} target="_blank">
                    Try it out
                  </Demo>
                  <button onClick={handleClosePopup}>Close</button>
                </ButtonWrapper>
              </PopupContent>
            </PopupContainer>
          )}
          <FooterNote>
            <LFW>I am</LFW>
            <WiadDiv onClick={() => setIsOpen(true)}>Looking for Work</WiadDiv>
            <IF>
              Have an <strong>Opportunity</strong> for me? Please click the
              <strong> "Looking for Work"</strong> button above
            </IF>
          </FooterNote>
          <HiddenNavBar>
            <NavbarItems to="/Experience">Experience</NavbarItems>
            <NavbarItems to="/">Hello.</NavbarItems>
            <NavbarItems>
              <Circle />
            </NavbarItems>
          </HiddenNavBar>
        </HiddenContent>
        {isOpen && (
          <PopupContainerMail>
            <PopupContentMail>
              <h2>Feel free to leave a message</h2>
              <h3>I will get back to you as soon as possible</h3>
              <form ref={form} onSubmit={(e) => sendMail(e)}>
                <label>
                  Name:
                  <input id="username" name="user_name" type="text" required />
                </label>
                <label>
                  Email:
                  <input
                    id="useremail"
                    name="user_email"
                    type="email"
                    required
                  />
                </label>
                <label>
                  Message:
                  <textarea id="message" name="message" required />
                </label>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <button type="submit">Send</button>
                  <button type="button" onClick={() => setIsOpen(false)}>
                    Close
                  </button>
                </div>
              </form>
            </PopupContentMail>
          </PopupContainerMail>
        )}
      </Container>
    </motion.div>
  );
};

export default Project;
