import React from "react";
import { RoadmapData } from "../types/type";
import styled from "styled-components";
import { Title } from "./Typo";

interface RoadmapListProps {
  roadmap: RoadmapData[];
  onRoadmapClick: (index: number) => void;
  selectedRoadmap: number | null;
}

const RoadmapList: React.FC<RoadmapListProps> = ({
  roadmap,
  onRoadmapClick,
}) => {
  return (
    <RoadmapListContainer>
      {roadmap.map((item, index) => (
        <PrimaryList key={index} onClick={() => onRoadmapClick(index)}>
          <Title $bold>{item.title}</Title>
        </PrimaryList>
      ))}
    </RoadmapListContainer>
  );
};

export default RoadmapList;

const RoadmapListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PrimaryList = styled.div`
  min-width: 100px;
  max-width: 300px;
  border-radius: 10px;
  border: 1px solid var(--primary2);
  background-color: var(--primary1);
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding: 10px 20px;
`;
