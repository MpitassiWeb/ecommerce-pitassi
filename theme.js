import { createTheme } from "@mui/material";

export const light = createTheme({
  palette: {
    common: {
      black: "#1b1b1b",
      white: "#eeeeee",
    },
    primary: {
      main: "#393b40",
      contrastText: "#01fefd",
    },
    secondary: {
      main: "#ffe22b",
      contrastText: "#1b1b1b",
    },
    background: {
      paper: "#f8f8f8",
      default: "#f8f8f8",
    },
    text: {
      primary: "#000000bf",
      secondary: "#eeeeee",
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
      paper: "#393b40",
      default: "#141517",
    },
    text: {
      primary: "#eeeeee",
      secondary: "#141517",
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
