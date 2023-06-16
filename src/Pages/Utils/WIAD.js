// Important React dependencies
import React from "react";

// Styling
import styled from "styled-components";

const WiadDiv = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  width: fit-content;
  border-radius: 100px;
  font-weight: bold;
  font-size: 12;
  display: flex;
  border-color: red;
  border-width: 3px;

`;

const LtlCircle = styled.div`
  width: 23px;
  height: auto;
  border-color: red;
  border-width: 3px;
  border-radius: 100px;
  margin-right: 10px;

  &:hover {
    background-color: #1e1e1e;
    transition: ease-in-out 0.3s;
  }
`;

const WIAD = () => {
  return (
    <WiadDiv>
      <LtlCircle />
      Looking for Internships
    </WiadDiv>
  );
};

export default WIAD;
