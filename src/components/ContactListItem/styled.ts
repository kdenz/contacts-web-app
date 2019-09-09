import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 1rem;
  padding: 1em;
`;

export const InfoSection = styled.div`
  flex: 1;
`;

interface InfoRowProps {
  isBold?: boolean;
}
export const InfoRow = styled.div<InfoRowProps>`
  color: ${props => (props.isBold ? "#000" : "#a9a9a9")};
  font-weight: ${props => (props.isBold ? "bold" : "regular")};

  & + & {
    margin-top: 5px;
  }
`;

export const ActionSection = styled.div`
  display: flex;
  width: 3.5rem;
  font-size: 1.3rem;
  justify-content: space-between;
  color: #a9a9a9;
`;
