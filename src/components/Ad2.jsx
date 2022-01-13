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
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  ${mobile({ flexDirection: "column", fontSize: "10px" })}
`;

const Titleimage = styled.img`
  width: 20%;
  height: 20%;
  ${mobile({ width: "90%" })}
`;

const TitleText = styled.h1`
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 75%;
  ${mobile({ width: "100%", height: "250px" })}
`;

const Button = styled.button`
  background-color: #f5941c;
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

const Ad2 = () => {
  return (
    <Container>
      <TextContainer>
        <Titleimage src="assets/3BB_TitleAd.png" alt="header picture" />
        <TitleText>อินเทอร์เน็ตบ้านพร้อมความบันเทิง</TitleText>
      </TextContainer>
      <ImgContainer>
        <Image src="assets/3BB_ad1.jpg" alt="ad pic" />
      </ImgContainer>
      <Button>ดูรายละเอียด</Button>
    </Container>
  );
};

export default Ad2;
