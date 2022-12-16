import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}
const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <Link href="/">
      <StyledButton variant={variant} {...props}>
        {children}
      </StyledButton>
      ;
    </Link>
  );
};

export default Button;

const StyledButton = styled.button<Required<Pick<ButtonProps, "variant">>>`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.zigzagPink};
  border: 1px solid ${({ theme }) => theme.colors.black};
  padding: 12px 24px;
  border-radius: 12px;

  ${({ variant, theme }) =>
    variant === "secondary" &&
    css`
      background-color: ${theme.colors.kakaoYellow};
    `}
`;
