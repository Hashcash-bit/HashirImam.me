import React from "react";
import { CSSTransition } from "react-transition-group";
import { useHistory, useLocation } from "react-router-dom";
import "./PageTransition.css";

const PageTransition = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  const handleExited = () => {
    window.scrollTo(0, 0);
  };

  return (
    <CSSTransition
      classNames="page-transition"
      in={true}
      appear={true}
      timeout={500}
      onExited={handleExited}
    >
      <div>
        {children}
        <button
          onClick={() => history.push("/new-page")}
          className="transition-button"
        >
          Go to New Page
        </button>
      </div>
    </CSSTransition>
  );
};

export default PageTransition;
