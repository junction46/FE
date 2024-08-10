// Typo 타입 정의
interface TypoProps {
  color?: string;
  margin?: string;
  $bold?: boolean;
  $underline?: boolean;
}

// NodeProps 타입 정의
export interface NodeProps {
  id: string;
  title: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  isMain?: boolean;
  isRounded?: boolean;
}

// Line 컴포넌트의 Props 타입 정의
export interface LineProps {
  start: { x: number; y: number };
  end: { x: number; y: number };
}
