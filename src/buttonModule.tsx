import styled from "styled-components";
import { Button } from "antd";

const ButtonStyled = styled(Button)`
  border-color: transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.04);
  background-color: var(--theme);
  color: var(--textTheme);
  border-radius: 10px;
  :hover {
    border-color: transparent;
  }
`;

export default ButtonStyled;
