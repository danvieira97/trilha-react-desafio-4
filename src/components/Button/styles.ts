import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #81259d;
  color: #fff;

  border: 1px solid #81259d;
  border-radius: 21px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  :disabled {
    background-color: #81259d;
    opacity: 0.5;
    cursor: none;
  }
`;
