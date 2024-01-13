import styled, { css } from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const fontSize = css`
  font-size: ${({ font }) => SIZES[font] ?? SIZES["medium"]}px;
`;

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
  ${fontSize}

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

export default StyledButton;
