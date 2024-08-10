import React, { useState } from "react";
import { TopicData } from "../types/type";
import styled from "styled-components";
import { Title } from "./Typo";
import Modal from "./modal";

interface TopicListProps {
  topics: TopicData[];
}

const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  const [selectedTopic, setSelectedTopic] = useState<TopicData | null>(null);
  const handleTopicClick = (topic: TopicData) => {
    setSelectedTopic(topic);
  };

  const handleCloseModal = () => {
    setSelectedTopic(null);
  };
  return (
    <div>
      {topics.map((topic, index) => (
        <SecondaryList key={index} onClick={() => handleTopicClick(topic)}>
          <Title $bold>{topic.title}</Title>
        </SecondaryList>
      ))}
      {selectedTopic && (
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
      )}
    </div>
  );
};

const SecondaryList = styled.div`
  min-width: 100px;
  max-width: 300px;
  background-color: var(--white);
  border: 1px solid var(--primary2);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px 20px;
`;

export default TopicList;
