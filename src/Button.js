import styled from "styled-components";
import facebook from "./facebook.svg";

const Icon = styled.img`
  width: 16px;
  height: 16px;
  background-color: blue;
`;

const StyledButton = styled.button`
  background-color: #6750a4;
  border: none;
  color: #ffffff;
  padding: 16px;

  ${Icon} {
    margin-right: 4px;
    background-color: red;
  }

  &:hover,
  &:active {
    background-color: #463770;

    ${Icon} {
      opacity: 0.2;
    }
  }
`;

const Button = ({ children }) => {
  return (
    <>
      <StyledButton>
        <Icon src={facebook} alt="facebook icon" />
        {children}
      </StyledButton>
      <Icon src={facebook} alt="facebook icon" />
    </>
  );
};

export default Button;
