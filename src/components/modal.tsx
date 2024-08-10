import React from "react";
import styled from "styled-components";
import { Body, Display, Heading, Label, Title, Typo } from "./Typo";
import { Blank } from "./container";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  learningGoals: string[];
  recommendations: string[];
  latestTrends: string[];
  projects: string[];
}

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background: var(--white);
  padding: 60px;
  width: 60%;
  height: 100%;
  z-index: 1001;
  box-shadow: -10px 0 25px rgba(0, 0, 0, 0.1);
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  learningGoals,
  recommendations,
  latestTrends,
  projects,
}) => {
  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>

        {/* {<ul>
          {learningGoals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>} */}
        <Title $bold>Recommended Sites</Title>
        <ul>
          {recommendations.map((rec, index) => (
            <a
              key={index}
              href={rec}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--primary3)", wordBreak: "break-all" }}
            >
              <Heading color="--primary3">{rec}</Heading>
            </a>
          ))}
        </ul>
        <Blank height="60px" />
        <Title $bold>Latest Trends</Title>
        <ul>
          {latestTrends.map((trend, index) => (
            <Heading color="--primary3" $bold key={index}>
              {trend}
            </Heading>
          ))}
        </ul>
        <Blank height="60px" />
        <Title $bold>Projects Suggestions</Title>
        <ul>
          {projects.map((project, index) => (
            <Heading color="--primary3" $bold key={index}>
              {project}
            </Heading>
          ))}
        </ul>
        <Blank height="40px" />
        <hr />
        <Blank height="5px" />
        <Notes $bold>Notes</Notes>
        <Blank height="5px" />
        <hr />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const Notes = styled(Typo)`
  font-size: 32px;
`;
