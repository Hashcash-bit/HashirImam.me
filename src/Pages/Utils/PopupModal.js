import React, { useState } from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  width: 90%;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    display: grid;
    gap: 10px;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  textarea,
  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button[type="submit"],
  button[type="button"] {
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any desired action with the form data here

    // Reset form fields and close the popup
    setMessage("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Popup</button>

      {isOpen && (
        <PopupContainer>
          <PopupContent>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Message:
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>
              <label>
                First Name:
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <button type="submit">Send</button>
                <button type="button" onClick={() => setIsOpen(false)}>
                  Close
                </button>
              </div>
            </form>
          </PopupContent>
        </PopupContainer>
      )}
    </div>
  );
};

export default Popup;
