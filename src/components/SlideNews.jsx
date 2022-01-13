import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { newsSlideItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 110vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "50vh" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100%;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100vw;
  height: 100%;
  cursor: pointer;
`;

const SlideNews = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIos />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {newsSlideItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
};

export default SlideNews;
