import {
  Home,
  MonetizationOn,
  Router,
  StoreMallDirectory,
  TvOutlined,
} from "@material-ui/icons";
import CampaignIcon from "@mui/icons-material/Campaign";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  background-color: #f27025;
  color: white;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuItem = styled.div`
  font-size: 18px;
  font-weight: 350;
  cursor: pointer;
  margin-left: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menubar = () => {
  return (
    <Container>
      <Wrapper>
        <MenuItem>
          <Home /> หน้าแรก
        </MenuItem>
        <MenuItem>
          <Router />
          แพ็กเกจอินเทอร์เน็ต
        </MenuItem>
        <MenuItem>
          <TvOutlined />
          ทีวีและความบันเทิง
        </MenuItem>
        <MenuItem>
          <CampaignIcon />
          โปรโมชั่น
        </MenuItem>
        <MenuItem>
          <MonetizationOn />
          พอยต์และสิทธิพิเศษ
        </MenuItem>
        <MenuItem>
          <StoreMallDirectory />
          ศูนย์บริการ
        </MenuItem>
      </Wrapper>
    </Container>
  );
};

export default Menubar;
