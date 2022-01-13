import styled from "styled-components";
import { events } from "../data";
import Event from "./Event";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const TextContainer = styled.div`
  width: 99%;
  display: flex;
  justify-content: space-between;
`;

const TitleImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: orange;
  border-color: orange;
`;

const Events = () => {
  return (
    <Container>
      <TextContainer>
        <Title>
          <TitleImage src="assets/3BB.jpg"></TitleImage>ข่าวสารและกิจกรรม
        </Title>
        <Button>ดูทั้งหมด</Button>
      </TextContainer>
      {events.map((item) => (
        <Event item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Events;
