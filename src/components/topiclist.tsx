import React from "react";
import { TopicData } from "../types/type";
import styled from "styled-components";
import { Title } from "./Typo";

interface TopicListProps {
  topics: TopicData[];
}

const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  return (
    <div>
      {topics.map((topic, index) => (
        <SecondaryList key={index}>
          <Title $bold>{topic.title}</Title>
        </SecondaryList>
      ))}
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
