import { createTheme } from "@mui/material";

export const light = createTheme({
  palette: {
    mode: "light",
    common: {
      black: "#1b1b1b",
      white: "#eeeeee",
    },
    primary: {
      main: "#01fefd",
      contrastText: "#141517",
    },
    secondary: {
      main: "#ffe22b",
      contrastText: "#1b1b1b",
    },
    background: {
      default: "#f8f8f8",
    },
    text: {
      primary: "#000000bf",
      secondary: "#000000",
    },
  },
  typography: {
    fontFamily: "system-ui, sans-serif",
    h1: {
      fontWeight: 500,
      textShadow: "1px 1px 5px 808080",
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1.3em",
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      textTransform: "none",
    },
  },
});

export const dark = createTheme({
  palette: {
    mode: "dark",
    common: {
      black: "#1b1b1b",
      white: "#eeeeee",
    },
    primary: {
      main: "#01fefd",
      contrastText: "#1b1b1b",
    },
    secondary: {
      main: "#ffe22b",
      contrastText: "#1b1b1b",
    },
    background: {
      default: "#141517",
    },
    text: {
      primary: "#eeeeeef5",
      secondary: "#dcdcdc",
    },
  },
  typography: {
    fontFamily: "system-ui, sans-serif",
    h1: {
      fontWeight: 500,
      textShadow: "1px 1px 5px 808080",
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1.3em",
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
      textTransform: "none",
    },
  },
});
