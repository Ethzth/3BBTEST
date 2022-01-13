import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #0f2539;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
`;

const TitleTextBefore = styled.h1`
  color: orange;
  font-weight: 300;
`;

const TitleText = styled.h1`
  font-weight: 300;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 75%;
`;

const Ad1 = () => {
  return (
    <Container>
      <TextContainer>
        <TitleTextBefore>พิเศษ!</TitleTextBefore>
        <TitleText>เมื่อติดตั้งอินเทอร์เน็ตบ้านวันนี้ </TitleText>
      </TextContainer>
      <ImgContainer>
        <Image src="assets/3BB_ad1.jpg" />
      </ImgContainer>
    </Container>
  );
};

export default Ad1;
