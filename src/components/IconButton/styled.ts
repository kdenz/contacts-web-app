import styled, { CSSProperties } from "styled-components";

export interface ContainerProps {
  color: CSSProperties["color"];
  size: CSSProperties["fontSize"];
}
export const Container = styled.span<ContainerProps>`
  color: ${props => props.color};
  font-size: ${props => props.size};

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    opacity: 1;
  }
`;
