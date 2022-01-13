import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  margin: 5px;
  width: 900px;
  height: 250px;
  display: flex;
  background-color: #f5fbfd;
  ${mobile({ height: "100px" })}
`;
const ImageContainer = styled.div`
  width: 100%;
  ${mobile({ height: "100%" })}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  ${mobile({ width: "90%" })}
`;

const Desc = styled.div`
  font-size: 15px;
  padding: 5px;
  ${mobile({ fontSize: "10px" })}
`;

const Event = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.img} />
      </ImageContainer>
      <Desc>{item.desc}</Desc>
    </Container>
  );
};

export default Event;
