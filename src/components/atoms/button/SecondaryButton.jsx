import styled from "styled-components";

export const SecondaryButton = (props) => {
  const { children } = props;

  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
  background-color: #40514e;
  color: #ffffff;
  padding: 8px 40px;
  border: none;
  border-radius: 1000px;
  outline: none;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
