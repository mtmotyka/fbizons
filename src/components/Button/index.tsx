import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.common.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadiuses.small};
  padding: 15px 24px;
  font-size: ${({ theme }) => theme.fontSizes.normal};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  display: inline-block;
  width: max-content;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Button: React.FC<Props> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
