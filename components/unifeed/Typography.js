import { styled } from "../../styles/unifeed/stitches.config";

const Typography = styled("p", {
  fontSize: "1rem",
  color: "#212529",

  variants: {
    variant: {
      title: {
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: "1.265",
      },

      description: {
        color: "#495057",
        lineHeight: "1.7",
      },
    },
  },
});

export default Typography;
