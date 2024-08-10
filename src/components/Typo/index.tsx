import styled from "styled-components";
import { TypoProps } from "../../types/type";

const Typo = styled.div<TypoProps>`
  color: ${(p) => (p.color ? `var(${p.color})` : `var(--black)`)};
  font-weight: ${(p) => (p.$bold ? "600" : "400")};
  text-decoration: ${(p) => (p.$underline ? "underline" : "")};
  word-break: break-all;
`;

export const Display = styled(Typo)`
  font-size: 48px;
`;

export const Title = styled(Typo)`
  font-size: 24px;
`;

export const Heading = styled(Typo)`
  font-size: 20px;
`;

export const Body = styled(Typo)`
  font-size: 16px;
`;

export const Label = styled(Typo)`
  font-size: 14px;
`;

export const Footnote = styled(Typo)`
  font-size: 12px;
`;

export const Caption = styled(Typo)`
  font-size: 10px;
`;
