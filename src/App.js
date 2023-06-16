// Importing the Styling
import styled from "styled-components";
import "./App.css";

// Importing the images
import LeftArrow from "./img/LA.svg";
import RightArrow from "./img/RA.svg";

// Routing
import {
  BrowserRouter as Router,
  Routes,
  Redirect,
  Route,
  useLocation,
} from "react-router-dom";

// Pages or Components
import Hello from "./Pages/Hello/Hello";
import HelloSec from "./Pages/Hello/HelloSec";
import Projects from "./Pages/Projects/Projects";
import Experience from "./Pages/Experience/Experience";
import ErrorPage from "./Pages/ErrorPage";

// Testing Components
import Test from "./Pages/Utils/Container";
import ProjectPage from "./Pages/Utils/TestComponents";
import Popup from "./Pages/Utils/PopupModal";
import WIAD from "./Pages/Utils/WIAD";
import PopupModal from "./Pages/Utils/PopupModal";

// Transition
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  return (
    <div style={{ backgroundColor: "#1e1e1e", overflow: "hidden" }}>
      <Router>
        <Routes>
          <Route path="/Experience" Component={Experience} exact />
          <Route path="/" Component={Hello} exact />
          <Route path="/Hello" Component={HelloSec} exact />
          <Route path="/Projects" Component={Projects} exact />
          <Route path="*" Component={ErrorPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
