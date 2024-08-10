import React, { useState, useEffect } from "react";
import { NodeProps } from "../types/type";
import { Line, Node } from "../components/Nodes";

interface Connection {
  start: string;
  end: string;
}

interface Point {
  x: number;
  y: number;
}

interface LineProps {
  start: Point;
  end: Point;
}

// 노드 크기 계산 함수
const calculateNodeSize = (
  title: string,
  isMain: boolean = false,
  isRounded: boolean = false
): { width: number; height: number } => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    return { width: 0, height: 0 };
  }
  context.font = isMain ? "bold 16px Arial" : "14px Arial";
  const metrics = context.measureText(title);
  const width = Math.max(metrics.width + 40, isMain ? 180 : 140);
  const height = isMain ? 50 : 40;
  return { width, height };
};

// 노드 자동 배치 알고리즘
function autoLayoutNodes(nodes: NodeProps[]): {
  nodes: NodeProps[];
  connections: Connection[];
} {
  const verticalSpacing = 100; // 노드 간 수직 간격
  const horizontalSpacing = 300; // 좌우 노드 간 수평 간격
  const svgWidth = 1000; // SVG의 전체 너비

  // 노드 위치 설정
  const layoutedNodes = nodes.map((node, index) => {
    const isEven = index % 2 === 0;
    return {
      ...node,
      x: isEven
        ? svgWidth / 2 - horizontalSpacing - (node.width || 0)
        : svgWidth / 2 + horizontalSpacing,
      y: index * verticalSpacing,
    };
  });

  // 연결 생성 (각 노드를 바로 아래 노드와 연결)
  const connections: Connection[] = layoutedNodes
    .slice(0, -1)
    .map((node, index) => ({
      start: node.id,
      end: layoutedNodes[index + 1].id,
    }));

  return { nodes: layoutedNodes, connections };
}

// TestPage 컴포넌트
const TestPage: React.FC = () => {
  const [nodes, setNodes] = useState<NodeProps[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    // API로부터 노드 데이터를 받아왔다고 가정
    const fetchedNodes: NodeProps[] = [
      { id: "web", title: "Web programming", isMain: true },
      { id: "js", title: "JavaScript" },
      { id: "html", title: "HTML & CSS" },
      { id: "dom", title: "DOM Manipulation" },
      { id: "git", title: "Version Control with Git" },
      { id: "html-basics", title: "HTML basics", isRounded: true },
      { id: "css-basics", title: "CSS basics", isRounded: true },
      { id: "frontend", title: "Frontend Frameworks" },
      { id: "backend", title: "Backend Development" },
      { id: "vue", title: "Vue.js", isRounded: true },
      { id: "node", title: "Node.js", isRounded: true },
      { id: "database", title: "Database", isRounded: true },
      { id: "security", title: "Web security" },
      { id: "devops", title: "DevOps & Deployment" },
      {
        id: "security-fundamentals",
        title: "Security Fundamentals",
        isRounded: true,
      },
      { id: "ci-cd", title: "CI/CD", isRounded: true },
    ];

    // 노드 크기 계산
    const nodesWithSize = fetchedNodes.map((node) => ({
      ...node,
      ...calculateNodeSize(node.title, node.isMain, node.isRounded),
    }));

    // 자동 레이아웃 적용
    const { nodes: layoutedNodes, connections: newConnections } =
      autoLayoutNodes(nodesWithSize);

    setNodes(layoutedNodes);
    setConnections(newConnections);
  }, []);

  return (
    <svg width="1000" height={nodes.length * 100 + 100}>
      {connections.map((connection, index) => {
        const startNode = nodes.find((node) => node.id === connection.start);
        const endNode = nodes.find((node) => node.id === connection.end);
        if (startNode && endNode) {
          return (
            <Line
              key={index}
              start={{
                x: startNode.x! + (startNode.width || 0) / 2,
                y: startNode.y! + (startNode.height || 0),
              }}
              end={{
                x: endNode.x! + (endNode.width || 0) / 2,
                y: endNode.y!,
              }}
            />
          );
        }
        return null;
      })}
      {nodes.map((node) => (
        <Node key={node.id} {...node} />
      ))}
    </svg>
  );
};

export default TestPage;
