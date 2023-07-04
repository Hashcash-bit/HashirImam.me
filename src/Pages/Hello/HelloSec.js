// Important React dependencies
import React, { useEffect, useRef, useState } from "react";

// Mail Dependencies
import emailjs from "@emailjs/browser";

// Importing the images
import LeftArrow from "../../img/LA.svg";
import RightArrow from "../../img/RA.svg";

// Routing
import { Link } from "react-router-dom";

// Icon Image
import GH from "../../img/GH.svg";
import LI from "../../img/LI.svg";
import GM from "../../img/GM.svg";
import D from "../../img/D.svg";

// The Typer Effect
import Typer from "../Utils/Typer";

// Badges
import A from "../../img/A.svg";
import AI from "../../img/AI.svg";
import CAD from "../../img/CAD.svg";
import CSS from "../../img/CSS.svg";
import F from "../../img/f.svg";
import FB from "../../img/fB.svg";
import GIT from "../../img/GIT.svg";
import HTML from "../../img/HTML.svg";
import JS from "../../img/JS.svg";
import ME from "../../img/ME.svg";
import MO from "../../img/MO.svg";
import MW from "../../img/MW.svg";
import NET from "../../img/NET.svg";
import NODE from "../../img/NODE.svg";
import P from "../../img/P.svg";
import PS from "../../img/PS.svg";
import R from "../../img/R.svg";
import VSC from "../../img/VSC.svg";

// Carousel
import Carousel from "../Utils/SkillsCarousel";

// WIAD
import WIAD from "../Utils/WIAD";
import WIAD2 from "../Utils/WIAD2";

// Main Image
import HASH from "../../img/HASH.svg";

// Importing the styled-components
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
  SubHeader,
  LittleDescription,
  LittleDescription1,
  SkillsWrapper,
  SkillsHeader,
  Skills,
  Badges,
  RightArrowDiv,
  WIADS,
  RightContent,
  MainIMG,
  TheName,
  HiddenContent,
  HiddenImage,
  HiddenName,
  HiddenWIADS,
  HiddenText,
  WIADWRAP,
  Circle,
  Wrapper,
  Popup,
  LinkBlock,
  HiddenContainer,
  HiddenTitle,
  HiddenTyper,
  HiddenImageMe,
  LittleIntro,
  HiddenTechSkillsTitle,
  HiddenTechSkills,
  SkillsHidden,
  BadgesHidden,
  Hiddenfooter,
  IAC,
  WIADWrapper,
  HiddenNav,
  HiddenLinks,
  HiddenSocials,
  HiddenIcons,
  HiddenImageWrapper,
  HiddenSocialLinks,
} from "./HelloStyles";
import {
  PopupContainerMail,
  PopupContentMail,
} from "../Projects/ProjectStyles";
import {
  HiddenNavBar,
  NavbarItems,
  WiadDiv,
} from "../Experience/ExperienceStyles";
import Animations from "../Utils/Animations";

// Amimation
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

const Hello = () => {
  // This is where Mail logic will go
  const [isOpen, setIsOpen] = useState(false);

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
  return (
    <motion.div
      initial={{ x: "100%" }} // Initial position outside the viewport
      animate={{ x: 0 }} // Animation to bring the component to its final position
      transition={{ duration: 0.5 }} // Transition duration in seconds
    >
      <Container>
        <LeftArrowDiv>
          <LinkBlock to="/Experience">
            <ElementWithPopup message="Experience">
              <Image src={LeftArrow} alt="this the left image" />
            </ElementWithPopup>
          </LinkBlock>
        </LeftArrowDiv>
        <MiddleDiv>
          {/* This is where the main top div will go */}
          <TopSection>
            <LeftContent>
              <Header>Hello.</Header>
              <SubHeader>
                I am <Typer />
              </SubHeader>
              <HiddenContent>
                <HiddenImage src={HASH} />
                <HiddenName>Hashir Imam.</HiddenName>
              </HiddenContent>
              <LittleDescription>
                Based in Ontario, Canada, I am an ambitious Full-stack{" "}
                <strong> Web Developer</strong> with a open and creative mind.
              </LittleDescription>
              <LittleDescription1>
                Let me help you bring your ideas to life!
              </LittleDescription1>
              <SkillsHeader>Technical Skills</SkillsHeader>
              <SkillsWrapper>
                <Skills>
                  <Badges src={HTML} />
                  <Badges src={CSS} />
                  <Badges src={JS} />
                  <Badges src={P} />
                  <Badges src={FB} />
                  <Badges src={F} />
                  <Badges src={A} />
                  <Badges src={R} />
                  <Badges src={AI} />
                  <Badges src={GIT} />
                  <Badges src={MO} />
                  <Badges src={MW} />
                  <Badges src={ME} />
                  <Badges src={CAD} />
                  <Badges src={NET} />
                  <Badges src={NODE} />
                  <Badges src={PS} />
                  <Badges src={VSC} />
                </Skills>
              </SkillsWrapper>
              <WIADS>
                I am currently <WIAD /> & <WIAD2 />
              </WIADS>
              <HiddenWIADS>
                <HiddenText>I am currently</HiddenText>
                <WIADWRAP>
                  <WIAD />
                  <WIAD2 />
                </WIADWRAP>
              </HiddenWIADS>
            </LeftContent>
            <RightContent>
              <MainIMG src={HASH} />
              <TheName>Hashir Imam.</TheName>
            </RightContent>
          </TopSection>
          {/* This is where the Tab Bar at the bottom will go */}
          <BottonSection>
            <TheNavigation>
              <TheLinks to="/Experience">Experience</TheLinks>
              <TheLinks to="/">
                <Circle />
              </TheLinks>
              <TheLinks to="/Projects">Projects</TheLinks>
            </TheNavigation>
            <TheSocials>
              <SocialLinks
                href="https://github.com/Hashcash-bit"
                target="_blank"
              >
                <Icons src={GH} />
              </SocialLinks>
              <SocialLinks
                href="https://www.linkedin.com/in/hashir-i-b745b9192/"
                target="_blank"
              >
                <Icons src={LI} />
              </SocialLinks>
              <SocialLinks href="https://dribbble.com/Hashcash" target="_blank">
                <Icons src={D} />
              </SocialLinks>
              <SocialLinks onClick={() => setIsOpen(true)}>
                <Icons src={GM} />
              </SocialLinks>
            </TheSocials>
          </BottonSection>
        </MiddleDiv>
        <RightArrowDiv>
          <LinkBlock to="/Projects">
            <ElementWithPopup message="Projects">
              <Image src={RightArrow} alt="This is the right image" />
            </ElementWithPopup>
          </LinkBlock>
        </RightArrowDiv>
        <HiddenContainer>
          <HiddenTitle>Hello.</HiddenTitle>
          <HiddenTyper>
            <div
              style={{
                width: "max-content",
                height: "50px",
                fontSize: "30px",
                fontWeight: "normal",
              }}
            >
              I am
            </div>
            <div
              style={{
                height: "50px;",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                textAlign: "center",
                position: "relative",
              }}
            >
              <Typer />
            </div>
          </HiddenTyper>
          <HiddenImageWrapper>
            <HiddenImageMe src={HASH} />
          </HiddenImageWrapper>
          <LittleIntro>
            Based in Ontario, Canada, I am an ambitious Full-stack{" "}
            <strong> Web Developer</strong> with a open and creative mind.
          </LittleIntro>
          <LittleIntro>Let me help you bring your ideas to life!</LittleIntro>
          <HiddenTechSkillsTitle>Technical Skills</HiddenTechSkillsTitle>
          <HiddenTechSkills>
            <SkillsHidden>
              <BadgesHidden src={HTML} />
              <BadgesHidden src={CSS} />
              <BadgesHidden src={JS} />
              <BadgesHidden src={P} />
              <BadgesHidden src={FB} />
              <BadgesHidden src={F} />
              <BadgesHidden src={A} />
              <BadgesHidden src={R} />
              <BadgesHidden src={AI} />
              <BadgesHidden src={GIT} />
              <BadgesHidden src={MO} />
              <BadgesHidden src={MW} />
              <BadgesHidden src={ME} />
              <BadgesHidden src={CAD} />
              <BadgesHidden src={NET} />
              <BadgesHidden src={NODE} />
              <BadgesHidden src={PS} />
              <BadgesHidden src={VSC} />
            </SkillsHidden>
          </HiddenTechSkills>
          <Hiddenfooter>
            <IAC>I am Currently</IAC>
            <WIADWrapper>
              <WIAD />
              &
              <WIAD2 />
            </WIADWrapper>
          </Hiddenfooter>
          <HiddenNav>
            <HiddenLinks to="/Experience">Experience</HiddenLinks>
            <HiddenLinks>
              <Circle />
            </HiddenLinks>
            <HiddenLinks to="/Projects">Projects</HiddenLinks>
          </HiddenNav>
          <HiddenSocials>
            <HiddenSocialLinks
              href="https://github.com/Hashcash-bit"
              target="_blank"
            >
              <HiddenIcons src={GH} />
            </HiddenSocialLinks>
            <HiddenSocialLinks
              href="https://www.linkedin.com/in/hashir-i-b745b9192/"
              target="_blank"
            >
              <HiddenIcons src={LI} />
            </HiddenSocialLinks>
            <HiddenSocialLinks
              href="https://dribbble.com/Hashcash"
              target="_blank"
            >
              <HiddenIcons src={D} />
            </HiddenSocialLinks>
            <HiddenSocialLinks onClick={() => setIsOpen(true)}>
              <HiddenIcons src={GM} />
            </HiddenSocialLinks>
          </HiddenSocials>
        </HiddenContainer>
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

export default Hello;

// Complete
