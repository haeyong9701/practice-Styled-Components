import styled from "styled-components";
import Button from "./Button";

const SubmitButton = styled(Button)`
  background-color: #de117d;
  display: block;
  margin: 0 auto;
  width: 200px;

  &:hover {
    background-color: #f5070f;
  }
`;

const App = () => {
  return (
    <div>
      <SubmitButton>Hello World!</SubmitButton>
      <Button>Hello World!</Button>
    </div>
  );
};

export default App;
