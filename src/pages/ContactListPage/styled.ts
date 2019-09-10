import styled from "styled-components";
import { device } from "constants/breakpoints";

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 90%;
  }
`;

export const Header = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 1em 0;
  text-align: center;
`;

export const HeaderTitle = styled.span`
  margin-right: 1rem;
`;
