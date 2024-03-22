import styled from "styled-components";
import { Button } from "antd";
import { useState } from "react";

const SignButtonStyled = styled(Button)`
  text-align: right;
  border-color: transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.04);
  background-color: #ba1d25;
  color: white;
  border-radius: 10px;
  :hover {
    border-color: transparent;
  }
`;

export default function AuthorizeButton() {
  const signButtonTitle = ["Войти", "Выйти"];
  const [index, setIndex] = useState(0);

  return (
    <SignButtonStyled onClick={() => setIndex((index + 1) % 2)}>
      {signButtonTitle[index]}
    </SignButtonStyled>
  );
}
