import { Row, SvgContainer } from "../atomic";
import ViewSidebar from "@material-symbols/svg-300/rounded/view_sidebar.svg?react";
import Logo from "../../assets/silkroad.png";
export default function Header() {
  return (
    <>
      <Row
        gap={"20px"}
        padding={"24px"}
        $fullw
        align={"center"}
        style={{ paddingTop: "12px" }}
      >
        <SvgContainer width={"32px"} height={"32px"} $fill={"#1C1B1F"}>
          <ViewSidebar />
        </SvgContainer>
        <img src={Logo} width={120} height={60} alt="실크로드 로고" />
      </Row>
    </>
  );
}
