import { styled } from "../../styles/unifeed/stitches.config";
import Box from "./Box";

const Container = styled(Box, {
  width: "100%",
  paddingInline: "1rem",
  marginInline: "auto",

  "@sm": {
    maxInlineSize: "540px",
  },
  "@sm": {
    maxInlineSize: "720px",
  },
  "@lg": {
    maxInlineSize: "960px",
  },
  "@xl": {
    maxInlineSize: "1140px",
  },
});

export default Container;
