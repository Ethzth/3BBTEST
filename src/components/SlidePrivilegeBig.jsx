import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { newsSlideItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 65vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "75vh", width: "100%" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  border-radius: 50%;
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
  opacity: 1;
  z-index: 2;
  ${mobile({ flexDirection: "none" })}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  width: 33vw;
  height: 100%;
  ${mobile({ width: "100vw" })}
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  margin: auto auto;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SlidePrivilegeBig = () => {
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
      <Title>สิทธิพิเศษสำหรับลูกค้า 3BB</Title>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {newsSlideItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default SlidePrivilegeBig;
