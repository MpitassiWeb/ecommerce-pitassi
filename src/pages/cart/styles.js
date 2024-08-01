export let styles = {
  paper: {
    margin: "10px",
    p: 2,
    maxWidth: 1000,
    flexGrow: 1,
    color: (theme) => (theme.palette.mode === "dark" ? "#eeeeee" : "#141517"),
    backgroundColor: (theme) =>
      theme.palette.mode === "dark" ? "#141517" : "#f8f8f8",
  },
  buttonBase: { width: 128 },
  buttonDelette: {
    color: (theme) => (theme.palette.mode === "dark" ? "#01fefd" : "#464646"),
  },
};
