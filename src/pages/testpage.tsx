import { useState } from "react";
import RoadmapList from "../components/roadmaplist";
import { roadmap } from "../data";
import TopicList from "../components/topiclist";
import styled from "styled-components";

export default function TestPage() {
  const [selectedRoadmap, setSelectedRoadmap] = useState<number | null>(null);

  const handleRoadmapClick = (index: number) => {
    setSelectedRoadmap(index);
  };

  return (
    <Rowww>
      <RoadmapList
        roadmap={roadmap}
        onRoadmapClick={handleRoadmapClick}
        selectedRoadmap={selectedRoadmap}
      />
      {selectedRoadmap !== null && (
        <TopicList topics={roadmap[selectedRoadmap].topics} />
      )}
    </Rowww>
  );
}

const Rowww = styled.div`
  display: flex;
`;
