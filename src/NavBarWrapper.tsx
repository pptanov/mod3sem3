import "./App.css";
import { Link } from "react-router-dom";
import AuthorizeButton from "./Authorize.tsx";
import styled from "styled-components";
import ButtonStyled from "./buttonModule.tsx";
import { useState } from "react";

export const NavbarWrapper = styled.nav`
  text-align: center;
  background: transparent;
  margin-top: var(--navTopMargin);
  padding: 0.25em 1em;
  margin-bottom: 5%;
`;

const Navbar = () => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");

  const changeTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <NavbarWrapper>
      <ol>
        <li className="page">
          <ButtonStyled>
            <Link to="/page1">Главная</Link>
          </ButtonStyled>
        </li>
        <li className="page">
          <ButtonStyled>
            <Link to="/page2">Не оч главная</Link>
          </ButtonStyled>
        </li>
        <li className="page">
          <ButtonStyled>
            <Link to="/page3">Совсем не главная</Link>
          </ButtonStyled>
        </li>
        <li className="page">
          <ButtonStyled>
            <Link to="/table">Таблица</Link>
          </ButtonStyled>
        </li>

        <li className="page">
          <ButtonStyled>
            <Link to="/forms">Формы</Link>
          </ButtonStyled>
        </li>

        <li className="page">
          <AuthorizeButton />
        </li>

        <li className="page">
          <ButtonStyled onClick={() => changeTheme()}>Тема</ButtonStyled>
        </li>
      </ol>
    </NavbarWrapper>
  );
};

export default Navbar;
