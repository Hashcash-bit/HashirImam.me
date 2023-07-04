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
import "../Utils/Container.css";
import styled from "styled-components";

// Importing all The Styled Components
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
  SocialLinks,
  Icons,
  LeftContent,
  Header,
  RightArrowDiv,
  RightContent,
  TheName,
  Title,
  ExperienceContainer,
  SubHeader,
  SubSubHeader,
  LittleDescription,
  Circle,
  DesText,
  DesText0,
  DesText1,
  HelpContainer,
  Wrapper,
  Popup,
  HiddenContent,
  HiddenSectionsMPE,
  HiddenSectionsTC,
  HiddenSectionsLHH,
  HiddenSectionsTCC,
  HiddenSectionsCPC,
  HiddenIntroDescriptionContainer,
  HiddenIntroContainer,
  HiddenIntro,
  HiddenIntroName,
  HiddenIntroDescription,
  FooterNote,
  LFW,
  IF,
  HiddenNavBar,
  NavbarItems,
  WiadDiv,
  WiadDivShown,
  LFWShown,
  IFShown,
  FooterNoteShown,
} from "./ExperienceStyles";

// Icons
import GH from "../../img/GH.svg";
import LI from "../../img/LI.svg";
import GM from "../../img/GM.svg";
import D from "../../img/D.svg";
import WIAD from "../Utils/WIAD";

// Popup Modal
import PopupModal from "../Utils/PopupModal";
import { LinkBlock } from "../Hello/HelloStyles";
import {
  PopupContainerMail,
  PopupContentMail,
} from "../Projects/ProjectStyles";
import Animations from "../Utils/Animations";

// Animation
import { motion } from "framer-motion";

const PopupContainer = styled.div`
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

const PopupContent = styled.div`
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

const Experience = () => {
  // This is where the button activated containers will go
  const [activeButton, setActiveButton] = useState(0);

  // The Popup logic will appear hear
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // The Popup logic will appear hear

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

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const renderContainer = (buttonId) => {
    if (activeButton === buttonId) {
      return (
        <ExperienceContainer>
          {getContentForButton(buttonId)}
        </ExperienceContainer>
      );
    }
    return null;
  };

  const getContentForButton = (buttonId) => {
    switch (buttonId) {
      case 0:
        return (
          <>
            <HelpContainer>
              <SubHeader>My Professional Experience</SubHeader>
              <SubSubHeader>Hashir Imam</SubSubHeader>
            </HelpContainer>
            <LittleDescription>
              {/* <Circle /> */}
              <DesText0>
                I am a passionate web developer and UI designer dedicated to
                creating impactful digital experiences. With a strong foundation
                in coding and design, I strive to deliver exceptional solutions
                that marry aesthetics with functionality. Here's what defines my
                approach and sets me apart:
              </DesText0>
            </LittleDescription>
            <LittleDescription>
              <DesText0>Web Development:</DesText0>
              <DesText1>
                I am committed to writing clean, efficient code that
                adheres to industry best practices, ensuring optimal
                performance, accessibility, and maintainability.
                <br />
                <br />
                I enjoy tackling complex challenges, leveraging my
                problem-solving skills to find innovative solutions that enhance
                user experiences.
              </DesText1>
            </LittleDescription>
            <LittleDescription>
              <DesText0>UI Development:</DesText0>
              <DesText1>
                I approach UI design with a deep appreciation for aesthetics and
                user-centered design principles, creating intuitive and visually
                pleasing interfaces.
                <br />
                <br />I pay meticulous attention to details such as typography,
                color theory, and visual harmony to ensure a polished and
                cohesive design.
              </DesText1>
            </LittleDescription>
          </>
        );
      case 1:
        return (
          <>
            <HelpContainer>
              <SubHeader>The Coding Foundation</SubHeader>
              <SubSubHeader>Web Developer | 2021</SubSubHeader>
            </HelpContainer>
            <LittleDescription>
              <Circle />
              <DesText>
                Led a group of developers to wireframe, program and deploy a
                Web-App built on a modern React to distribute and manage
                thousands of dollars worth of courses across national and
                international coverage
              </DesText>
            </LittleDescription>
            <LittleDescription>
              <Circle />
              <DesText>
                Created a backend server rooted in Google Firebase/Firestore,
                creating an administrative dashboard with security key to ensure
                protection of the non-profit content.
              </DesText>
            </LittleDescription>
            <LittleDescription>
              <Circle />
              <DesText>
                Improved the online learning experience and ease of access of
                5000+ individuals by implementing a versatile carousel of
                sessions and linking the back-end with the responsive front-end
              </DesText>
            </LittleDescription>
            <LittleDescription>
              <Circle />
              <DesText>
                Debugged any issues with the UI/UX of the website using Tailwind
                CSS ensuring a responsive feel amongst devices of any aspect
                ratio
              </DesText>
            </LittleDescription>
          </>
        );
      case 2:
        return (
          <>
            <HelpContainer>
              <SubHeader>Lighthouse Hacks</SubHeader>
              <SubSubHeader>Web Developer | 2020-2021</SubSubHeader>
            </HelpContainer>
            <LittleDescription>
              <Circle />
              <DesText>
                Utilized my design skills to create a high-fidelity Figma
                prototype that effectively fulfilled the given theme. The
                prototype received significant attention, resulting in a
                remarkable 500+ visits within just one week.
              </DesText>
            </LittleDescription>
            <LittleDescription>
              <Circle />
              <DesText>
                Applied my web development expertise to develop a responsive web
                application. Utilizing HTML, CSS, and JavaScript, I ensured a
                seamless user experience across various devices and incorporated
                minor animations to enhance the overall interactivity and
                engagement.
              </DesText>
            </LittleDescription>
            <LittleDescription>
              <Circle />
              <DesText>
                Successfully obtained monetary prizes by directly communicating
                with sponsors in a professional manner. Acquired rewards worth
                upwards of $40,000, contributing to the success and growth of
                the coding club.
              </DesText>
            </LittleDescription>
          </>
        );
      case 3:
        return (
          <>
            <HelpContainer>
              <SubHeader>The Coding Club</SubHeader>
              <SubSubHeader>Mentor | 2020-2021</SubSubHeader>
            </HelpContainer>
            <LittleDescription>
              <Circle />
              <DesText>
                Developed a comprehensive and carefully curated curriculum that
                focuses on teaching Python and HTML/CSS, ensuring a structured
                learning path for students.
              </DesText>
            </LittleDescription>
            <LittleDescription>
              <Circle />
              <DesText>
                In the Python section, students will learn fundamental
                programming concepts such as variables, data types, conditional
                statements, loops, functions, and object-oriented programming
                (OOP) principles.
              </DesText>
            </LittleDescription>
            <LittleDescription>
              <Circle />
              <DesText>
                The HTML/CSS segment of the curriculum equips students with the
                necessary skills to create visually appealing and responsive web
                pages; students learned HTML tags, elements, and structure to
                develop the content and layout of web pages.
              </DesText>
            </LittleDescription>
            <LittleDescription>
              <Circle />
              <DesText>
                Through hands-on coding exercises and real-world projects,
                students applied their knowledge, reinforcing their
                understanding and problem-solving skills.
              </DesText>
            </LittleDescription>
          </>
        );
      case 4:
        return (
          <>
            <HelpContainer>
              <SubHeader>Competitive Programming Club</SubHeader>
              <SubSubHeader>Mentor | 2021</SubSubHeader>
            </HelpContainer>
            <LittleDescription>
              <Circle />
              <DesText>
                Mentored and provided guidance to a diverse group of over 60
                individuals, fostering their growth and development in various
                programming languages. Offered personalized feedback and
                assistance during club meetings, actively engaging with mentees
                to address their questions, clarify concepts, and troubleshoot
                coding challenges.
              </DesText>
            </LittleDescription>
            <LittleDescription>
              <Circle />
              <DesText>
                Demonstrated strong communication skills by effectively
                explaining complex programming concepts in a clear and concise
                manner, ensuring mentees grasp the material and overcome
                obstacles.
              </DesText>
            </LittleDescription>
            <LittleDescription>
              <Circle />
              <DesText>
                Fostered a positive and inclusive learning environment,
                promoting collaboration and teamwork among mentees, encouraging
                knowledge sharing, and creating a supportive community of
                learners.
              </DesText>
            </LittleDescription>
            <LittleDescription>
              <Circle />
              <DesText>
                Adapted mentoring techniques to meet the unique needs and
                learning styles of individuals, providing personalized
                assistance that catered to their skill levels and aspirations.
              </DesText>
            </LittleDescription>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <MiddleDiv>
          {/* This is where the main top div will go */}
          <TopSection>
            <LeftContent>
              {renderContainer(0)}
              <div
                className={`container-wrapper ${
                  activeButton === 1 ? "active" : ""
                }`}
              >
                {renderContainer(1)}
              </div>
              <div
                className={`container-wrapper ${
                  activeButton === 2 ? "active" : ""
                }`}
              >
                {renderContainer(2)}
              </div>
              <div
                className={`container-wrapper ${
                  activeButton === 3 ? "active" : ""
                }`}
              >
                {renderContainer(3)}
              </div>
              <div
                className={`container-wrapper ${
                  activeButton === 4 ? "active" : ""
                }`}
              >
                {renderContainer(4)}
              </div>
            </LeftContent>
            <RightContent>
              <Title>Experiences</Title>
              <TheName
                active={activeButton === 1}
                onClick={() => handleButtonClick(1)}
              >
                The Coding Foundation
              </TheName>
              <TheName
                active={activeButton === 2}
                onClick={() => handleButtonClick(2)}
              >
                Lighthouse Hacks
              </TheName>
              <TheName
                active={activeButton === 3}
                onClick={() => handleButtonClick(3)}
              >
                The Coding Club
              </TheName>
              <TheName
                active={activeButton === 4}
                onClick={() => handleButtonClick(4)}
              >
                Competitive Programming Club
              </TheName>
            </RightContent>
          </TopSection>
          {/* This is where the Tab Bar at the bottom will go */}
          <BottonSection>
            <TheNavigation>
              <TheLinks to="">
                <Circle />
              </TheLinks>
              <TheLinks to="/Hello">Hello.</TheLinks>
              <TheLinks to="/Projects">Projects</TheLinks>
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
                <LFWShown>I am currently</LFWShown>
                <WiadDivShown onClick={() => setIsOpen(true)}>
                  Looking for Internships
                </WiadDivShown>
              </div>
              <IFShown>
                Have an <strong>Internship Opportunity</strong>? Please click
                the
                <strong> "Looking for Interships"</strong> button above
              </IFShown>
            </FooterNoteShown>
          </BottonSection>
        </MiddleDiv>
        <RightArrowDiv>
          <LinkBlock to="/Hello">
            <ElementWithPopup message="Hello.">
              <Image src={RightArrow} alt="This is the right image" />
            </ElementWithPopup>
          </LinkBlock>
        </RightArrowDiv>
        {/* This is where the hidden content will go */}
        <HiddenContent>
          <HiddenSectionsMPE>
            <HiddenIntroContainer>
              <HiddenIntro>My Professional Experience</HiddenIntro>
              <HiddenIntroName>Hashir Imam.</HiddenIntroName>
            </HiddenIntroContainer>
            <HiddenIntroDescriptionContainer>
              <HiddenIntroDescription>
                I am a passionate web developer and UI designer dedicated to
                creating impactful digital experiences. With a strong foundation
                in coding and design, I strive to deliver exceptional solutions
                that marry aesthetics with functionality. Here's what defines my
                approach and sets me apart:
                <br />
                <br />
                <div
                  style={{
                    color: "red",
                    fontSize: "15px",
                    fontWeight: "bold",
                    height: "fitContent",
                    width: "fit-content",
                  }}
                >
                  Web-Developer:
                </div>
                <br />
                <div
                  style={{ display: "flex", alignItems: "center", gap: "2%" }}
                >
                  <Circle />I am committed to writing clean, efficient code that
                  adheres to industry best practices ensuring optimal
                  performance, accessibility, and maintainability.
                </div>
                <br />
                <div
                  style={{ display: "flex", alignItems: "center", gap: "2%" }}
                >
                  <Circle />I enjoy tackling complex challenges, leveraging my
                  problem-solving skills to find innovative solutions that
                  enhance user experiences.
                </div>
                <br />
                <div
                  style={{
                    color: "red",
                    fontSize: "15px",
                    fontWeight: "bold",
                    height: "fitContent",
                    width: "fit-content",
                  }}
                >
                  UI Developer:
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "2%" }}
                >
                  <Circle />I approach UI design with a deep appreciation for
                  aesthetics and user-centered design principles, creating
                  intuitive and visually pleasing interfaces.
                </div>
                <br />
                <div
                  style={{ display: "flex", alignItems: "center", gap: "2%" }}
                >
                  <Circle />I pay meticulous attention to details such as
                  typography, color theory , and visual harmony to ensure a
                  polished and cohesive design.
                </div>
                <br />
              </HiddenIntroDescription>
            </HiddenIntroDescriptionContainer>
          </HiddenSectionsMPE>
          <HiddenSectionsTC>
            <HiddenIntroContainer>
              <HiddenIntro>The Coding Foundation</HiddenIntro>
              <HiddenIntroName>Web Developer | 2021</HiddenIntroName>
            </HiddenIntroContainer>
            <HiddenIntroDescription>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                Led a group of developers to wireframe, program and deploy a
                Web-App built on a modern React to distribute and manage
                thousands of dollars worth of courses across national and
                international coverage
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle /> Created a backend server rooted in Google
                Firebase/Firestore, creating an administrative dashboard with
                security key to ensure protection of the non-profit content.
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle /> Improved the online learning experience and ease of
                access of 5000+ individuals by implementing a versatile carousel
                of sessions and linking the back-end with the responsive
                front-end
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                Debugged any issues with the UI/UX of the website using Tailwind
                CSS ensuring a responsive feel amongst devices of any aspect
                ratio
              </div>
              <br />
            </HiddenIntroDescription>
          </HiddenSectionsTC>
          <HiddenSectionsLHH>
            <HiddenIntroContainer>
              <HiddenIntro>Lighthouse Hacks</HiddenIntro>
              <HiddenIntroName>Web Developer | 2020-2021</HiddenIntroName>
            </HiddenIntroContainer>
            <HiddenIntroDescription>
              {" "}
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                Utilized my design skills to create a high-fidelity Figma
                prototype that effectively fulfilled the given theme. The
                prototype received significant attention, resulting in a
                remarkable 500+ visits within just one week.
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                Applied my web development expertise to develop a responsive web
                application. Utilizing HTML, CSS, and JavaScript, I ensured a
                seamless user experience across various devices and incorporated
                minor animations to enhance the overall interactivity and
                engagement.
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                Successfully obtained monetary prizes by directly communicating
                with sponsors in a professional manner. Acquired rewards worth
                upwards of $40,000, contributing to the success and growth of
                the coding club.
              </div>
              <br />
            </HiddenIntroDescription>
          </HiddenSectionsLHH>
          <HiddenSectionsTCC>
            <HiddenIntroContainer>
              <HiddenIntro>The Coding Club</HiddenIntro>
              <HiddenIntroName>Mentor | 2020-2021</HiddenIntroName>
            </HiddenIntroContainer>
            <HiddenIntroDescription>
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                Developed a comprehensive and carefully curated curriculum that
                focuses on teaching Python and HTML/CSS, ensuring a structured
                learning path for students.
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                In the Python section, students will learn fundamental
                programming concepts such as variables, data types, conditional
                statements, loops, functions, and object-oriented programming
                (OOP) principles.
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                The HTML/CSS segment of the curriculum equips students with the
                necessary skills to create visually appealing and responsive web
                pages; students learned HTML tags, elements, and structure to
                develop the content and layout of web pages.
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                Through hands-on coding exercises and real-world projects,
                students applied their knowledge, reinforcing their
                understanding and problem-solving skills.
              </div>
              <br />
            </HiddenIntroDescription>
          </HiddenSectionsTCC>
          <HiddenSectionsCPC>
            <HiddenIntroContainer>
              <HiddenIntro>Competitive Programming Club</HiddenIntro>
              <HiddenIntroName>Mentor | 2021</HiddenIntroName>
            </HiddenIntroContainer>
            <HiddenIntroDescription>
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                Mentored and provided guidance to a diverse group of over 60
                individuals, fostering their growth and development in various
                programming languages. Offered personalized feedback and
                assistance during club meetings, actively engaging with mentees
                to address their questions, clarify concepts, and troubleshoot
                coding challenges.
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                Demonstrated strong communication skills by effectively
                explaining complex programming concepts in a clear and concise
                manner, ensuring mentees grasp the material and overcome
                obstacles.
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                Fostered a positive and inclusive learning environment,
                promoting collaboration and teamwork among mentees, encouraging
                knowledge sharing, and creating a supportive community of
                learners.
              </div>
              <br />
              <div style={{ display: "flex", alignItems: "center", gap: "2%" }}>
                <Circle />
                Adapted mentoring techniques to meet the unique needs and
                learning styles of individuals, providing personalized
                assistance that catered to their skill levels and aspirations.
              </div>
              <br />
            </HiddenIntroDescription>
          </HiddenSectionsCPC>
          <FooterNote>
            <LFW>I am currently</LFW>
            <WiadDiv onClick={() => setIsOpen(true)}>
              Looking for Internships
            </WiadDiv>
            <IF>
              Have an <strong>Internship Opportunity</strong>? Please click the
              <strong> "Looking for Interships"</strong> button above
            </IF>
          </FooterNote>
          <HiddenNavBar>
            <NavbarItems>
              <Circle />
            </NavbarItems>
            <NavbarItems to="/Hello">Hello.</NavbarItems>
            <NavbarItems to="/Projects">Projects</NavbarItems>
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

export default Experience;
