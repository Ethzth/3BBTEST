import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  margin: 5px;
  height: 70vh;
`;
const Image = styled.img`
  width: 100%;
  ${mobile({ width: "100%" })}
`;

const PackageItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
    </Container>
  );
};

export default PackageItem;
