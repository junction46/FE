import styled from "styled-components";
import { Col, Row } from "../components/atomic";
import { Title } from "../components/Typo";

export default function Quiz() {
  const progress = 50;

  return (
    <Container>
      <ProgressBarWrapper>
        <ProgressBar>
          <ProgressFill style={{ width: `${progress}%` }} />
        </ProgressBar>
      </ProgressBarWrapper>
      <QuizContainer>
        <Col gap={"4vh"} padding={"0 16px"} align={"center"}>
          <Title $bold color={"--black"} fontSize={"2.5vmin"}>
            Which of the components that make up the basic structure of HTML
            consist of a start tag and an end tag?
          </Title>
          <Col gap={"2vh"} width={"100%"}>
            <Row gap={"2vw"} flexWrap={"wrap"}>
              <Option $status="normal">주석</Option>
              <Option $status="normal">요소</Option>
            </Row>
            <Row gap={"2vw"} flexWrap={"wrap"}>
              <Option $status="normal">속성</Option>
              <Option $status="normal">메타 태그</Option>
            </Row>
          </Col>
        </Col>
      </QuizContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ProgressBarWrapper = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const ProgressBar = styled.div`
  width: 90%;
  height: 10px;
  background-color: var(--primary1);
  border-radius: 5px;
  margin: 0 auto;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: var(--primary5);
  border-radius: 5px;
  transition: width 0.3s ease-in-out;
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Option = styled.div<{ $status: string }>`
  flex: 1 1 calc(50% - 1vw);
  min-width: 150px;
  height: 10vh;
  border-radius: 12px;
  border: ${(p) =>
    p.$status === "correct"
      ? "5px solid var(--positive)"
      : p.$status === "incorrect"
      ? "5px solid var(--negative)"
      : "2px solid var(--primary5)"};
  background: ${(p) =>
    p.$status === "selected" || p.$status === "incorrect"
      ? "var(--primary1)"
      : "var(--white)"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  font-size: 2vmin;

  @media (max-width: 600px) {
    flex: 1 1 100%;
  }
`;
