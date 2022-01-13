import styled from "styled-components";
import { packages } from "../data";
import PackageItem from "./PackageItem";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 80vh;
  background-color: orange;
  display: flex;
  flex-direction: column;
  justify-content: left;
  ${mobile({ height: "150vh" })}
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 300px;
  ${mobile({ justifyContent: "center", marginLeft: "0px" })}
`;
const Text = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: white;
`;

const PackagesContainer = styled.div`
  width: 68vw;
  display: flex;
  align-items: center;
  ${mobile({
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  })}
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "column", height: "100%" })}
`;

const Packages = () => {
  return (
    <Container>
      <TextContainer>
        <Text>แพ็กเกจแนะนำ</Text>
      </TextContainer>
      <PackagesContainer>
        <ImageContainer>
          {packages.map((item) => (
            <PackageItem item={item} key={item.id} />
          ))}
        </ImageContainer>
      </PackagesContainer>
    </Container>
  );
};

export default Packages;
