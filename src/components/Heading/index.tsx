import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode;
  noMargin?: TextProps["noMargin"];
};

type TextProps = {
  noMargin?: boolean;
};

const Text = styled.h2<TextProps>`
  color: ${({ theme }) => theme.colors.common.text};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ noMargin }) => (noMargin ? 0 : "10px")};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const Heading: React.FC<Props> = ({ children, noMargin }) => {
  return <Text noMargin={noMargin}>{children}</Text>;
};

export default Heading;
