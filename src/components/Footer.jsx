import { Facebook, Instagram, Pinterest, YouTube } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Company = styled.h1`
  color: orange;
`;

const Desc = styled.p`
  margin: 5px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img``;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Company>บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน)</Company>
        <Desc>
          200 หมู่ 4 ถนนแจ้งวัฒนะ ตำบลปากเกร็ด อำเภอปากเกร็ด จังหวัดนนทบุรี
          11120 โทรศัพท์ : 66-2-100-2100 แฟกซ์ : 66-2-100-2121 สำหรับร้องเรียน :
          66-2-100-1100
        </Desc>
      </Left>
      <Center>
        <Logo src="assets/3BB_Logo.jpg" />
      </Center>
      <Right>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Right>
    </Container>
  );
};

export default Footer;
