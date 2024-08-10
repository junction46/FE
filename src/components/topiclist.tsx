import { forwardRef } from "react";
import styled from "styled-components";
import { TopicData } from "../types/type";
import { Title } from "./Typo";

interface TopicListProps {
  topics: TopicData[];
  onTopicClick: (topic: TopicData) => void;
}

// forwardRef를 사용하여 ref 전달을 가능하게 합니다.
const TopicList = forwardRef<HTMLDivElement, TopicListProps>(
  ({ topics, onTopicClick }, ref) => {
    return (
      <TopicListContainer ref={ref}>
        {topics.map((topic, index) => (
          <TopicItem key={index} onClick={() => onTopicClick(topic)}>
            <Title $bold>{topic.title}</Title>
          </TopicItem>
        ))}
      </TopicListContainer>
    );
  }
);

export default TopicList;

const TopicListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TopicItem = styled.div`
  padding: 10px;
  border: 2px solid var(--primary2);
  border-radius: 15px;
`;
