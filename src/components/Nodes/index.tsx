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
  // isMain: 최상위 노드, !isMain, !isRounded: 중간, !iwMain, !isRounded: 최하위
  const backgroundColor = isMain
    ? "#6366F1"
    : isRounded
    ? "white"
    : "var(--primary1)";
  const textColor = isMain ? "white" : "black";
  const fontSize = isMain ? "16px" : "14px";
  const fontWeight = "600";
  const borderRadius = isRounded ? height / 2 : 8;
  const stroke = isMain ? "var(--primary5)" : "var(--primary2)";

  return (
    <g transform={`translate(${x},${y})`}>
      <rect
        width={width}
        height={height}
        rx={borderRadius}
        ry={borderRadius}
        fill={backgroundColor}
        stroke={stroke}
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
