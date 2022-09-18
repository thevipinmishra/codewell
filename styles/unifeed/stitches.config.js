import { createStitches } from "@stitches/react";

export const { styled, globalCss, keyframes } = createStitches({
  theme: {
    fonts: {
      body: "Manrope",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  },
});
