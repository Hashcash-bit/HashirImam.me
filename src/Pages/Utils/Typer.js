// Important React Deps
import React, { useState, useEffect } from "react";

import styled from "styled-components";

const SubHeader = styled.text`
  color: white;
  font-size: 35px;
  font-weight: bold;
`;

const Typer = () => {
  const words = [
    "a Designer.",
    "a Developer.",
    "a Thinker.",
    "Creative.",
    "Passionate.",
    "Motivated.",
    "Ambitious.",
    "Innovative.",
    "Dedicated.",
    "Resourceful.",
    "Talented.",
    "Curious.",
    "Fearless.",
    "Persistent.",
    "Adaptable.",
    "Optimistic.",
    "Energetic.",
    "Enthusiastic.",
    "Proactive.",
    "Versatile.",
    "Imaginative.",
    "Determined.",
    "Resilient.",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingDelay = 200; // Delay after typing a word
    const deletionDelay = 100; // Delay after deleting a word

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentLetterIndex((prevIndex) => prevIndex - 1);
        } else {
          setCurrentLetterIndex((prevIndex) => prevIndex + 1);
        }
      },
      isDeleting ? deletionDelay : typingDelay
    );

    if (isDeleting && currentLetterIndex === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      setCurrentWord(words[currentWordIndex]);
    } else if (!isDeleting && currentLetterIndex === currentWord.length) {
      setIsDeleting(true);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [currentLetterIndex, currentWord, currentWordIndex, isDeleting, words]);

  return <SubHeader>{currentWord.substring(0, currentLetterIndex)}</SubHeader>;
};

export default Typer;
