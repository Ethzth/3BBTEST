import { Menu, AccountCircle } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ padding: "5px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ flex: 1, justifyContent: "left" })}
`;

const MainMenu = styled.div`
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ fontSize: "18px" })}
`;

const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  ${mobile({ flex: 1 })}
`;

const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12%;
  cursor: pointer;
  ${mobile({ width: "75px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({ justifyContent: "flex-end" })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-right: 20px;
  ${mobile({ display: "none" })}
`;

const PfIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: orange;
`;

const Topbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <MainMenu>
            <Menu />
            เมนูหลัก
          </MainMenu>
        </Left>
        <Center>
          <Logo src="assets/3BB_Logo.jpg" />
        </Center>
        <Right>
          <MenuItem>ช่องทางชำระค่าบริการ</MenuItem>
          <MenuItem>ช่วยเหลือ</MenuItem>
          <PfIcon>
            <AccountCircle />
          </PfIcon>
          <MenuItem>เข้าสู่ระบบ</MenuItem>
          <MenuItem>
            <Language>TH</Language>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
