import React from "react";
import { RoadmapData } from "../types/type";
import styled from "styled-components";
import { Title } from "./Typo";

interface RoadmapListProps {
  roadmap: RoadmapData[];
  onRoadmapClick: (index: number) => void;
  selectedRoadmap: number | null;
  roadmapItemRef: React.MutableRefObject<HTMLDivElement[]>;
}

const RoadmapList: React.FC<RoadmapListProps> = ({
  roadmap,
  onRoadmapClick,
  selectedRoadmap,
  roadmapItemRef,
}) => {
  return (
    <RoadmapListContainer>
      {roadmap.map((item, index) => (
        <Wrapper
          key={index}
          ref={(el) => (roadmapItemRef.current[index] = el!)}
        >
          <PrimaryList
            onClick={() => onRoadmapClick(index)}
            isSelected={index === selectedRoadmap}
          >
            <Title $bold>{item.title}</Title>
          </PrimaryList>
          <GrayLine />
        </Wrapper>
      ))}
    </RoadmapListContainer>
  );
};

export default RoadmapList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RoadmapListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GrayLine = styled.div`
  width: 2px;
  height: 30px;
  background-color: var(--gray3);
`;

const PrimaryList = styled.div<{ isSelected: boolean }>`
  min-width: 100px;
  max-width: 300px;
  border-radius: 10px;
  border: 2px solid var(--primary2);
  background-color: ${({ isSelected }) =>
    isSelected ? "var(--primary3)" : "var(--primary1)"};
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
`;
