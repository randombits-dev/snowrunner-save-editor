import styled from "styled-components";

const Arrow = styled.div`
  width: 10px;
  height: 10px;
  border-right: 1px solid var(--color-content);
  border-top: 1px solid var(--color-content);
`;

export const RightArrow = styled(Arrow)`
  transform: rotate(45deg);
`;

export const DownArrow = styled(Arrow)`
  transform: rotate(135deg) translate(-5px);
`;
