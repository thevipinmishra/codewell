import { globalCss } from "../stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    minBlockSize: "100vh",
    fontSize: "1rem",
    lineHeight: "1.55",
    overflowX: "hidden",
  },
});
