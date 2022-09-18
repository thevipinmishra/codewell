import Box from "./Box";
import Typography from "./Typography";
import Logo from "../../starter-files/unifeed/Assets/Logo.svg";
import Container from "./Container";

const Footer = () => {
  return (
    <Box
      as="footer"
      css={{
        paddingBlock: "1.5rem",
        marginBlockStart: "2rem",
        "@lg": {
          marginBlockStart: "3.5rem",
        },
      }}
    >
      <Container>
        <Box
          css={{
            "@md": {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <Box
            as="img"
            src={Logo.src}
            css={{
              width: "100px",
              marginBlockEnd: "1rem",
              "@md": {
                marginBlockEnd: 0,
              },
            }}
          />
          <Typography variant="description">
            Unifeed © {new Date().getFullYear()} All Copyrights Not Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
