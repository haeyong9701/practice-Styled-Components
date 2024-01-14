import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Button from "./Button";
import TermsOfService from "./TermsOfService";
import Placeholder, { PlaceholderItem } from "./Placeholder";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const StyledTermsOfService = styled(TermsOfService)`
  background-color: #ededed;
  border-radius: 8px;
  padding: 16px;
  margin: 40px auto;
  width: 400px;
`;

const SubmitButton = styled(Button)`
  background-color: ${({ theme }) => theme.primaryColor};
  display: block;
  margin: 0 auto;
  width: 200px;

  &:hover {
    background-color: #f5070f;
  }
`;

const A = styled(PlaceholderItem)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const B = styled(PlaceholderItem)`
  width: 400px;
`;

const C = styled(PlaceholderItem)`
  width: 200px;
`;

const theme = {
  primaryColor: "#1da1f2",
};

function App() {
  return (
    <div>
      <GlobalStyle />
      <StyledTermsOfService />

      <ThemeProvider theme={theme}>
        <SubmitButton>계속하기</SubmitButton>
      </ThemeProvider>

      <Placeholder>
        <A />
        <B />
        <C />
      </Placeholder>
    </div>
  );
}

export default App;
