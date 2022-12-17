import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "small" | "large";
}
const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = "primary",
  size = "small",
  children,
  ...props
}) => {
  return (
    <StyledButton size={size} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.zigzagPink};
  border: 1px solid ${({ theme }) => theme.colors.black};

  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      background-color: ${theme.colors.kakaoYellow};
    `}
  ${({ size }) =>
    size === "small" &&
    css`
      padding: 12px 24px;
      border-radius: 12px;
    `}
  ${({ size }) =>
    size === "large" &&
    css`
      padding: 24px 48px;
      border-radius: 24px;
    `}
`;
