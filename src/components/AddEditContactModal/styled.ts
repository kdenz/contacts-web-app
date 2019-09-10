import styled from "styled-components";
import { device } from "constants/breakpoints";

export const Form = styled.form`
  padding: 1em;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const FieldLabel = styled.div``;

export const Input = styled.input`
  display: block;
  margin: 10px 0 20px;
  font-size: 1rem;
  padding: 0.2em;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

export const SubmitButton = styled.button`
  margin-top: 20px;
  width: 100%;
  font-size: 1rem;
  padding: 1em 2em;
  text-decoration: none;
  background: #668ad8;
  color: #fff;
  border-radius: 3px;
  border: none;
`;

export const ErrorLabel = styled.span`
  font-size: 0.8rem;
  color: #ff0000;
`;
