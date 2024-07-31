export let styles = {
  container: { maxWidth: "80%", display: "flex", justifyContent: "center" },
  box1: {
    backgroundColor: (theme) =>
      theme.palette.mode === "dark" ? "#141517" : "#f8f8f8",
    borderRadius: "10px",
    margin: "50px",
    width: "50%",
    padding: "10px",
  },
  box2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  textField: { padding: "7px" },
  boxButton: { padding: "10px", display: "flex", justifyContent: "center" },
};
