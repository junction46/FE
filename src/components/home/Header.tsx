import { Row, SvgContainer } from "../atomic";
import ViewSidebar from "@material-symbols/svg-300/rounded/view_sidebar.svg?react";
import Logo from "../../assets/silkroad.png";
import { Heading } from "../Typo";
import useStore from "../../store";

export default function Header() {
  const { sidebarOpen, setSidebarOpen } = useStore();

  return (
    <>
      <Row
        gap={"20px"}
        padding={"24px"}
        $fullw
        align={"center"}
        style={{ paddingTop: "12px" }}
      >
        {!sidebarOpen && (
          <>
            <SvgContainer
              width={"32px"}
              height={"32px"}
              $fill={"#1C1B1F"}
              style={{ cursor: "pointer" }}
              onClick={() => setSidebarOpen(true)}
            >
              <ViewSidebar />
            </SvgContainer>
          </>
        )}

        <div style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <img
            src={Logo}
            width={120}
            height={60}
            alt="실크로드 로고"
            style={{ marginLeft: 0 }}
          />
        </div>
        <Heading color={"--primary5"}>Login</Heading>
      </Row>
    </>
  );
}
