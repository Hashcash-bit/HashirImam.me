import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;

const Item = styled.div`
  flex: 0 0 auto;
  padding: 10px;
  width: ${(props) => props.width}%;
`;

const Carousel = ({ items, interval }) => {
  const containerRef = useRef(null);
  const itemWidth = 100 / items.length;

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const nextScrollLeft = scrollLeft + container.offsetWidth;

      container.scrollTo({
        left: nextScrollLeft,
        behavior: "smooth",
      });

      if (nextScrollLeft >= container.scrollWidth) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }, interval);

    return () => clearInterval(scrollInterval);
  }, [items, interval]);

  return (
    <Container ref={containerRef}>
      {items.map((item, index) => (
        <Item key={index} width={itemWidth}>
          {item}
        </Item>
      ))}
    </Container>
  );
};

export default Carousel;
