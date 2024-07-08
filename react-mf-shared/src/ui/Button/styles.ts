import styled from "styled-components";

export const StyledButton = styled.button`
  background: inherit;
  border: ${(props) =>
    props.disabled
      ? "1px solid rgb(183 183 183)"
      : "1px solid rgb(248 130 255)"};
  font-size: 16px;
  padding: 8px 16px;
  color: ${(props) =>
    props.disabled ? "rgb(183 183 183)" : "rgb(248 130 255)"};
  transition-duration: 0.2s;
  cursor: ${(props) => (props.disabled ? "initial" : "pointer")};

  &:hover {
    border-color: ${(props) =>
      props.disabled ? "rgb(183 183 183)" : "rgb(0 170 74)"};
    color: ${(props) =>
      props.disabled ? "rgb(183 183 183)" : "rgb(0 170 74)"};
  }
`;
