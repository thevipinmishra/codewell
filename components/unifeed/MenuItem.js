import { styled } from "../../styles/unifeed/stitches.config";

const MenuItem = styled("button", {
  border: 0,
  outline: 0,
  backgroundColor: "transparent",
  color: "#495057",
  fontFamily: "$body",
  display: "block",
  width: "100%",
  fontSize: ".85rem",
  borderRadius: "4px",
  padding: ".5rem",
  backgroundColor: "#f8f9fa",
  cursor: "pointer",
  "@md": {
    backgroundColor: "transparent",
    fontSize: "1rem",
    padding: ".5rem .75rem",
  },

  variants: {
    variant: {
      subscribe: {
        backgroundColor: "#d9480f",
        color: "#fff",
        fontWeight: 600,
      },
    },
  },
});

export default MenuItem;
