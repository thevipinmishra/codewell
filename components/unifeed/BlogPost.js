import Box from "./Box";
import Typography from "./Typography";

const BlogPost = ({
  image,
  title,
  description,
  authorImage,
  authorName,
  authorRole,
}) => {
  return (
    <Box
      className="blog-post"
      css={{ borderRadius: "6px", overflow: " hidden" }}
    >
      <Box
        as="img"
        src={image.src}
        css={{
          marginBlockEnd: "1.75rem",
          "@lg": {
            height: "240px",
            objectFit: "cover",
          },
        }}
      />
      <Box
        className="blog-content"
        css={{
          display: "grid",
          gap: "1rem",
        }}
      >
        <Typography
          variant="title"
          as="a"
          href="#"
          css={{
            transition: "color 150ms ease",
            display: "inline-flex",
            alignSelf: "start",
            "&:hover": {
              color: "#d9480f",
            },
          }}
        >
          {title}
        </Typography>
        <Typography variant="description">{description}</Typography>
        <Box
          css={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            as="img"
            src={authorImage.src}
            css={{
              height: "60px",
              width: "60px",
              borderRadius: "50%",
              marginInlineEnd: "1.2rem",
            }}
          />
          <Box>
            <Typography
              css={{ fontWeight: 600, color: "#212529", fontSize: "1rem" }}
            >
              {authorName}
            </Typography>
            <Typography variant="description" css={{ fontSize: ".9rem" }}>
              {authorRole}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPost;
