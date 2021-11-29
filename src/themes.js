import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F5F8FF",
  headerFontColor: "#000",
  backgroundColor: "white",
  shadow: "0px 0px 10px #c2c2c2",
  autofillColor: "black",
};

export const darkTheme = {
  body: "#141C2F",
  headerFontColor: "#fff",
  backgroundColor: "#1f2a48",
  shadow: "none",
  autofillColor: "white",
};

export const GlobalStyle =  createGlobalStyle`
body {
  background-color: ${props => props.theme.body};
}

.header {
  color: ${props => props.theme.headerFontColor};
}

.search {
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: ${props => props.theme.shadow};

  &__input {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.headerFontColor};
    &::placeholder {
    color: ${props => props.theme.headerFontColor};
    }
    &:-webkit-autofill {
      -webkit-text-fill-color: ${props => props.theme.autofillColor};
    }
  }
}
`