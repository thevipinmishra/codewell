import { styled, keyframes } from "../../styles/unifeed/stitches.config";
import Box from "./Box";
import Container from "./Container";
import Logo from "../../starter-files/unifeed/Assets/Logo.svg";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import Hamburger from "../../starter-files/unifeed/Assets/Hamburger Menu.svg";
import MenuItem from "./MenuItem";

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const StyledContent = styled(PopoverPrimitive.Content, {
  borderRadius: 4,
  padding: ".75rem",
  width: 140,
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: "white",
});

function Content({ children, ...props }) {
  return (
    <PopoverPrimitive.Portal>
      <StyledContent {...props}>
        {children}
        <StyledArrow />
      </StyledContent>
    </PopoverPrimitive.Portal>
  );
}

const Navbar = () => {
  return (
    <Box
      as="nav"
      css={{
        paddingBlock: "2rem",
        "@lg": {
          marginBlockEnd: "3rem",
        },
      }}
    >
      <Container>
        <Box
          css={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box as="img" src={Logo.src} alt="" css={{ width: "120px" }} />

          {/* Mobile Menu  */}
          <Box
            css={{
              "@md": {
                display: "none",
              },
            }}
          >
            <PopoverPrimitive.Root>
              <PopoverPrimitive.Trigger asChild>
                <Box
                  as="button"
                  css={{
                    height: "36px",
                    width: "36px",
                    border: 0,
                    outline: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "transparent",
                  }}
                >
                  <img src={Hamburger.src} alt="" />
                </Box>
              </PopoverPrimitive.Trigger>
              <Content sideOffset={5}>
                <Box css={{ display: "grid", gap: ".5rem" }}>
                  <MenuItem>Home</MenuItem>
                  <MenuItem>Features</MenuItem>
                  <MenuItem>Pricing</MenuItem>
                  <MenuItem variant="subscribe">Subscribe</MenuItem>
                </Box>
              </Content>
            </PopoverPrimitive.Root>
          </Box>

          {/* Desktop Menu  */}
          <Box
            css={{
              display: "none",
              gap: "1rem",
              "@md": {
                display: "flex",
              },
            }}
          >
            <MenuItem>Home</MenuItem>
            <MenuItem>Features</MenuItem>
            <MenuItem>Pricing</MenuItem>
            <MenuItem variant="subscribe">Subscribe</MenuItem>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
