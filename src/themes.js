import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F5F8FF",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#141C2F",
  fontColor: "#fff",
};

export const GlobalStyle =  createGlobalStyle`
body {
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.fontColor};
}
`