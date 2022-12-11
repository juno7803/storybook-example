import styled from "@emotion/styled";
import React from "react";

const Button = () => {
  return <StyledButton>Button</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.zigzagPink};
`;
