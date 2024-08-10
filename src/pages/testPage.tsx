import React, { useState, useEffect } from "react";

interface NodeProps {
  title: string;
  x: number;
  y: number;
  width: number;
  height: number;
  isMain: boolean;
  isRounded: boolean;
}

const Node: React.FC<NodeProps> = ({
  title,
  x,
  y,
  width,
  height,
  isMain,
  isRounded,
}): JSX.Element => {
  const backgroundColor = isMain ? "#6366F1" : isRounded ? "white" : "#F3F4F6";
  const textColor = isMain ? "white" : "black";
  const fontSize = isMain ? "16px" : "14px";
  const fontWeight = isMain ? "bold" : "normal";
  const borderRadius = isRounded ? height / 2 : 8;

  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        width={width}
        height={height}
        rx={borderRadius}
        ry={borderRadius}
        fill={backgroundColor}
        stroke="#E5E7EB"
        strokeWidth="1"
      />
      <text
        x={width / 2}
        y={height / 2}
        dominantBaseline="middle"
        textAnchor="middle"
        fill={textColor}
        fontSize={fontSize}
        fontWeight={fontWeight}
      >
        {title}
      </text>
    </g>
  );
};

const Line = ({ start, end }) => {
  const path = `M ${start.x} ${start.y} 
                L ${start.x} ${(start.y + end.y) / 2} 
                L ${end.x} ${(start.y + end.y) / 2} 
                L ${end.x} ${end.y}`;
  return <path d={path} stroke="#D1D5DB" strokeWidth="1" fill="none" />;
};

const TestPage = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const calculateNodeSize = (
      title: string,
      isMain = false,
      isRounded = false
    ) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context!.font = isMain ? "bold 16px Arial" : "14px Arial";
      const metrics = context!.measureText(title);
      const width = Math.max(metrics.width + 40, isMain ? 180 : 140);
      const height = isMain ? 50 : 40;
      return { width, height };
    };

    const newNodes = [
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
    { start: "html", end: "backend" },
    { start: "frontend", end: "vue" },
    { start: "backend", end: "node" },
    { start: "backend", end: "database" },
    { start: "frontend", end: "security" },
    { start: "backend", end: "devops" },
    { start: "security", end: "security-fundamentals" },
    { start: "devops", end: "ci-cd" },
  ];

  return (
    <svg width="800" height="650">
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
