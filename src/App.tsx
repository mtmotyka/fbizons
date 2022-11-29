import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import DetailsBox from "./components/DetailsBox";

import GlobalStyles from "./styles/globalStyles";
import { defaultTheme } from "./theme";

const MainArea = styled.div`
  background-color: ${({ theme }) => theme.colors.common.background};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <MainArea>
        <DetailsBox />
      </MainArea>
    </ThemeProvider>
  );
};

export default App;
