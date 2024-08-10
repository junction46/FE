import React, { useState, useEffect } from "react";
import { NodeProps } from "../types/type";
import { Line, Node } from "../components/Nodes";

const TestPage: React.FC = () => {
  // nodes 상태의 타입 정의
  const [nodes, setNodes] = useState<NodeProps[]>([]);

  useEffect(() => {
    // calculateNodeSize 함수의 반환 타입 정의
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

    const newNodes: NodeProps[] = [
      { id: "web", title: "Web programming", x: 300, y: 50, isMain: true },
      { id: "js", title: "JavaScript", x: 150, y: 150 },
      { id: "html", title: "HTML & CSS", x: 450, y: 150 },
      { id: "dom", title: "DOM Manipulation", x: 150, y: 220 },
      { id: "git", title: "Version Control with Git", x: 150, y: 290 },
      {
        id: "html-basics",
        title: "HTML basics",
        x: 400,
        y: 220,
        isRounded: true,
      },
      {
        id: "css-basics",
        title: "CSS basics",
        x: 550,
        y: 220,
        isRounded: true,
      },
      { id: "frontend", title: "Frontend Frameworks", x: 150, y: 360 },
      { id: "backend", title: "Backend Development", x: 450, y: 360 },
      { id: "vue", title: "Vue.js", x: 150, y: 430, isRounded: true },
      { id: "node", title: "Node.js", x: 400, y: 430, isRounded: true },
      { id: "database", title: "database", x: 550, y: 430, isRounded: true },
      { id: "security", title: "Web security", x: 150, y: 500 },
      { id: "devops", title: "DevOps & Deployment", x: 450, y: 500 },
      {
        id: "security-fundamentals",
        title: "Security Fundamentals",
        x: 150,
        y: 570,
        isRounded: true,
      },
      {
        id: "ci-cd",
        title: "Continuous Integration & Continuous Deployment (CI/CD)",
        x: 450,
        y: 570,
        isRounded: true,
      },
    ].map((node) => ({
      ...node,
      ...calculateNodeSize(node.title, node.isMain, node.isRounded),
    }));

    setNodes(newNodes);
  }, []);

  const lines = [
    { start: "web", end: "js" },
    { start: "web", end: "html" },
    { start: "js", end: "dom" },
    { start: "dom", end: "git" },
    { start: "html", end: "html-basics" },
    { start: "html", end: "css-basics" },
    { start: "git", end: "frontend" },
    { start: "git", end: "backend" },
    { start: "html", end: "backend" },
    { start: "frontend", end: "vue" },
    { start: "backend", end: "node" },
    { start: "backend", end: "database" },
    { start: "git", end: "security" },
    { start: "backend", end: "devops" },
    { start: "security", end: "security-fundamentals" },
    { start: "devops", end: "ci-cd" },
  ];

  return (
    <svg width="1000" height="800">
      {lines.map((line, index) => {
        const startNode = nodes.find((node) => node.id === line.start);
        const endNode = nodes.find((node) => node.id === line.end);
        if (startNode && endNode) {
          return (
            <Line
              key={index}
              start={{
                x: startNode.x + startNode.width / 2,
                y: startNode.y + startNode.height,
              }}
              end={{
                x: endNode.x + endNode.width / 2,
                y: endNode.y,
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
