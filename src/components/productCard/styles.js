export let styles = {
  card: {
    backgroundColor: (theme) =>
      theme.palette.mode === "dark" ? "#141517" : "#f8f8f8",
    color: (theme) => (theme.palette.mode === "dark" ? "#eeeeeef5" : "#141517"),
  },
  cardMedia: { height: 300 },
 price: { fontSize: "1.8em", paddingTop: "20px", textAlign: "end" }
};
