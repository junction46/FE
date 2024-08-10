import { NodeProps, LineProps } from "../../types/type";

export const Node: React.FC<NodeProps> = ({
  title,
  x,
  y,
  width,
  height,
  isMain = false,
  isRounded = false,
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

export const Line: React.FC<LineProps> = ({ start, end }) => {
  const path = `M ${start.x} ${start.y} 
                  L ${start.x} ${(start.y + end.y) / 2} 
                  L ${end.x} ${(start.y + end.y) / 2} 
                  L ${end.x} ${end.y}`;
  return <path d={path} stroke="#D1D5DB" strokeWidth="1" fill="none" />;
};
