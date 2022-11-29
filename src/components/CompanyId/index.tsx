import React from "react";
import styled from "styled-components";

type Props = {
  id: string;
  name: string;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Circle = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.common.green};
`;

const Number = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 0 8px 0 4px;
`;

const CompanyId: React.FC<Props> = ({ id, name }) => {
  return (
    <Container>
      <Circle />
      <Number>{id}</Number>
      <div>{name}</div>
    </Container>
  );
};

export default CompanyId;
