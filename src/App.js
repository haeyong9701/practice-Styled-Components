import styled, { createGlobalStyle } from "styled-components";
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
  background-color: #de117d;
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

function App() {
  return (
    <div>
      <GlobalStyle />
      <StyledTermsOfService />
      <SubmitButton>계속하기</SubmitButton>
      <Placeholder>
        <A />
        <B />
        <C />
      </Placeholder>
    </div>
  );
}

export default App;
