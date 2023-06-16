import React, { useState } from "react";
import "./Container.css";

const Test = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const renderContainer = (buttonId) => {
    if (activeButton === buttonId) {
      return <div className="container">{getContentForButton(buttonId)}</div>;
    }
    return null;
  };

  const getContentForButton = (buttonId) => {
    switch (buttonId) {
      case 1:
        return (
          <>
            <h2>Container 1</h2>
            <p>Lorem ipsum for Container 1</p>
          </>
        );
      case 2:
        return (
          <>
            <h2>Container 2</h2>
            <p>Lorem ipsum for Container 2</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </>
        );
      case 3:
        return (
          <>
            <h2>Container 3</h2>
            <p>Lorem ipsum for Container 3</p>
            <p>Additional content here</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Button 1</button>
      <button onClick={() => handleButtonClick(2)}>Button 2</button>
      <button onClick={() => handleButtonClick(3)}>Button 3</button>

      <div
        className={`container-wrapper ${activeButton === 1 ? "active" : ""}`}
      >
        {renderContainer(1)}
      </div>
      <div
        className={`container-wrapper ${activeButton === 2 ? "active" : ""}`}
      >
        {renderContainer(2)}
      </div>
      <div
        className={`container-wrapper ${activeButton === 3 ? "active" : ""}`}
      >
        {renderContainer(3)}
      </div>
    </div>
  );
};

export default Test;
