import { useState, useRef, useEffect } from "react";
import RoadmapList from "../components/roadmaplist";
import { roadmap } from "../data";
import TopicList from "../components/topiclist";
import styled from "styled-components";
import { TopicData } from "../types/type";
import Modal from "../components/modal";

export default function TestPage() {
  const [selectedRoadmapIndex, setSelectedRoadmapIndex] = useState<
    number | null
  >(null);
  const [selectedTopic, setSelectedTopic] = useState<TopicData | null>(null);
  const topicListRef = useRef<HTMLDivElement | null>(null);
  const roadmapItemRef = useRef<HTMLDivElement[]>([]);

  const handleRoadmapClick = (index: number) => {
    setSelectedRoadmapIndex(index);
    setSelectedTopic(null); // 로드맵 선택 시, 토픽 선택 해제
  };

  const handleTopicClick = (topic: TopicData) => {
    setSelectedTopic(topic);
  };

  const handleCloseModal = () => {
    setSelectedTopic(null);
  };

  useEffect(() => {
    if (
      selectedRoadmapIndex !== null &&
      roadmapItemRef.current[selectedRoadmapIndex] &&
      topicListRef.current
    ) {
      const roadmapItemRect =
        roadmapItemRef.current[selectedRoadmapIndex]?.getBoundingClientRect();

      if (roadmapItemRect && topicListRef.current) {
        const topicListElement = topicListRef.current;

        topicListElement.style.position = "absolute";
        topicListElement.style.top = `${roadmapItemRect.top}px`;
        topicListElement.style.left = `${roadmapItemRect.right + 20}px`; // 필요한 경우 조정
      }
    }
  }, [selectedRoadmapIndex]);

  return (
    <Rowww>
      <RoadmapList
        roadmap={roadmap}
        onRoadmapClick={handleRoadmapClick}
        selectedRoadmap={selectedRoadmapIndex}
        roadmapItemRef={roadmapItemRef} // Add ref passing
      />
      {selectedRoadmapIndex !== null && (
        <TopicList
          ref={topicListRef} // TopicList에 ref 전달
          topics={roadmap[selectedRoadmapIndex].topics}
          onTopicClick={handleTopicClick}
        />
      )}
      {selectedTopic && (
        <div>
          <Modal
            isOpen={Boolean(selectedTopic)}
            onClose={handleCloseModal}
            title={selectedTopic.title}
            description={selectedTopic.description}
            learningGoals={selectedTopic.learning_goals}
            recommendations={selectedTopic.recommendations}
            latestTrends={selectedTopic.latest_trends}
            projects={selectedTopic.projects}
          />
        </div>
      )}
    </Rowww>
  );
}

const Rowww = styled.div`
  display: flex;
`;
