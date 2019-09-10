import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

const activeGradient = "linear-gradient(to right, #8e2de2, #4a00e0)";

interface TabButtonProps {
  isActive: boolean;
}
export const TabButton = styled.div<TabButtonProps>`
  font-size: 1.2rem;
  padding: 1em 2em;
  flex: 1;
  text-align: center;
  border-radius: 20px;
  background: ${props => (props.isActive ? activeGradient : "#f2f2f2")};
  color: ${props => (props.isActive ? "#fff" : "#000")};

  & + & {
    margin-left: 2%;
  }

  &:hover,
  &:focus {
    cursor: pointer;
    background: ${activeGradient};
    opacity: 0.5;
    color: #fff;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5);
  }

  &:active {
    opacity: 1;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
  }

  ${props => props.isActive && `opacity: 1!important`}
`;
