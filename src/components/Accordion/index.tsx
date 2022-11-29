import React, { useState } from "react";
import styled from "styled-components";
import AnimateHeight from "react-animate-height";

import Divider from "../Divider";

type Props = {
  children: React.ReactNode;
  title: string;
  text?: React.ReactNode;
  expandedOnStart?: boolean;
};

const StyledAccordion = styled.div``;

const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;
`;

const TextContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Content = styled.div`
  padding: 16px 24px 0;
`;

const Arrow = styled.div<{ expanded: boolean }>`
  width: 11px;
  height: 11px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
  border-left: 2px solid ${({ theme }) => theme.colors.secondary};
  transition: transform 0.2s ease-in-out;
  position: relative;
  top: -3px;
  ${({ expanded }) =>
    expanded ? "transform: rotate(-225deg);" : "transform: rotate(-45deg);"}
`;

const Accordion: React.FC<Props> = ({
  children,
  title,
  text,
  expandedOnStart = false,
}) => {
  const [height, setHeight] = useState<"auto" | number>(
    expandedOnStart ? "auto" : 0
  );

  return (
    <StyledAccordion>
      <HeaderContainer
        onClick={() => {
          setHeight(height === 0 ? "auto" : 0);
        }}
      >
        <TextContainer>
          <Title>{title}</Title>
          {text}
        </TextContainer>
        <Arrow expanded={height !== 0} />
      </HeaderContainer>
      <AnimateHeight height={height} duration={500}>
        <Content>{children}</Content>
      </AnimateHeight>
      <Divider />
    </StyledAccordion>
  );
};

export default Accordion;
