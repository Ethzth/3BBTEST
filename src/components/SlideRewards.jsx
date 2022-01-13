import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { rewards } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #0f2539;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "95vh", width: "100%" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
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
  opacity: 0.5;
  z-index: 2;
`;

const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 5px;
  flex-direction: column;
  ${mobile({ height: "100%" })}
`;

const TextContainer = styled.div`
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
`;

const TitleText = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  color: white;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-color: orange;
  color: white;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    flexWrap: "wrap",
  })}
`;

const Slide = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ImgContainer = styled.div`
  width: 25vw;
  height: 60%;
  ${mobile({ width: "100vw", height: "70%" })}
`;

const Image = styled.img`
  width: 90%;
  height: 90%;
  cursor: pointer;
  ${mobile({ width: "100%", height: "100%" })}
`;

const Desc = styled.div`
  width: 90%;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  color: white;
`;

const SlideRewards = () => {
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
      <Contents>
        <TextContainer>
          <TitleText>Reward</TitleText>
          <Button>ดูทั้งหมด</Button>{" "}
        </TextContainer>
        <Wrapper slideIndex={slideIndex}>
          {rewards.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img} />
              </ImgContainer>
              <Desc>{item.desc}</Desc>
            </Slide>
          ))}
        </Wrapper>
      </Contents>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIos />
      </Arrow>
    </Container>
  );
};

export default SlideRewards;
