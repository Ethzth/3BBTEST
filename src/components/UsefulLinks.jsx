import { display } from "@mui/system";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0f2539;
  ${mobile({ height: "100vh", flexDirection: "column" })}
`;

const Title = styled.h2`
  font-size: 20px;
  color: orange;
  ${mobile({ fontSize: "16px" })}
`;
const List = styled.ul`
  width: 20%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({ width: "100%" })}
`;
const ListItem = styled.li`
  display: block;
  width: 100%;
  margin-bottom: 5px;
  color: white;
  cursor: pointer;
  ${mobile({ fontSize: "13px", width: "50%", display: "flex" })}
`;

const UsefulLinks = () => {
  return (
    <Container>
      <List>
        <Title>เกี่ยวกับเรา</Title>
        <ListItem>เกี่ยวกับเรา</ListItem>
        <ListItem>สิทธิพิเศษ</ListItem>
        <ListItem>เงื่อนไขและข้อกำหนด</ListItem>
        <ListItem>ร่วมงานกับเรา</ListItem>
        <ListItem>ติดต่อเรา</ListItem>
      </List>
      <List>
        <Title>แพ็กเกจแนะนำ</Title>
        <ListItem>3BB Broadband</ListItem>
        <ListItem>3BB Corporate</ListItem>
        <ListItem>3BB WiFi</ListItem>
        <ListItem>Other Service</ListItem>
      </List>
      <List>
        <Title>กิจกรรมเพื่อสังคม</Title>
        <ListItem>โครงการบรอดแบนด์อินเทอร์เน็ตฟรี เพื่อการศึกษา</ListItem>
        <ListItem>
          โครงการ JAS ส่งเสริมการศึกษาให้เด็กไทย ก้าวทันยุคดิจิทัล
        </ListItem>
        <ListItem>ด้านอื่น ๆ</ListItem>
        <ListItem>CSR News & Acitivities</ListItem>
      </List>
      <List>
        <Title>ช่วยเหลือและบริการ</Title>
        <ListItem>3BB Speed Test</ListItem>
        <ListItem>ศูนย์บริการ 3BB</ListItem>
        <ListItem>ช่องทางการแจ้งเว็บที่ผิดกฎหมาย</ListItem>
        <ListItem>ช่องทางการแจ้งสายเคเบิ้ลตกหรือหย่อน</ListItem>
      </List>
    </Container>
  );
};

export default UsefulLinks;
