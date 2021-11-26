import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyle } from "../themes";

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <header className="header">
        <h1 className="header__heading">devfinder</h1>
        <section onClick={() => themeToggler()} style={theme === 'light' ? {display:"none"} : {display:"flex"}} className="header__light">
          <p>LIGHT</p>
          <img
            className="header__light__image"
            src="/assets/icon-sun.svg"
            alt=""
          />
        </section>
        <section onClick={() => themeToggler()} style={theme === 'light' ? {display:"flex"} : {display:"none"}} className="header__dark">
          <p>DARK</p>
          <img
            className="header__dark__image"
            src="/assets/icon-moon.svg"
            alt=""
          />
        </section>
      </header>
    </ThemeProvider>
  );
};
