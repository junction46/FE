import React from "react";
import styled from "styled-components";
import { Body, Label, Title } from "./Typo";

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
  background: rgba(255, 255, 255, 0.8);
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--white);
  padding: 20px;
  border: 2px solid var(--primary2);
  border-radius: 20px;
  width: 500px;
  z-index: 1001;
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
        <Title $bold>{title}</Title>
        <p>{description}</p>
        <h4>Learning Goals</h4>
        <ul>
          {learningGoals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
        <Body $bold>Recommended Sites</Body>
        <ul>
          {recommendations.map((rec, index) => (
            <a
              key={index}
              href={rec}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--primary3)", wordBreak: "break-all" }}
            >
              {rec}
            </a>
          ))}
        </ul>
        <Body $bold>Latest Trends</Body>
        <ul>
          {latestTrends.map((trend, index) => (
            <Label color="--primary3" $bold key={index}>
              {trend}
            </Label>
          ))}
        </ul>
        <Body $bold>Projects Suggestions</Body>
        <ul>
          {projects.map((project, index) => (
            <Label color="--primary3" $bold key={index}>
              {project}
            </Label>
          ))}
        </ul>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
