import React from "react";
import styled from "styled-components";

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dcc5e0;
  margin: 15px 0;
`;

const Divider: React.FC = () => {
  return <StyledDivider />;
};

export default Divider;
