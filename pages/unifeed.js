import Head from "next/head";
import { globalCss } from "../styles/unifeed/stitches.config";
// Components
import Box from "../components/unifeed/Box";
import Navbar from "../components/unifeed/Navbar";
import Container from "../components/unifeed/Container";
import BlogPost from "../components/unifeed/BlogPost";
import Footer from "../components/unifeed/Footer";
// Images
import A1Thumb from "../starter-files/unifeed/Assets/main-thumb.png";
import A2Thumb from "../starter-files/unifeed/Assets/one-thumb.png";
import A3Thumb from "../starter-files/unifeed/Assets/two-thumb.png";
import A4Thumb from "../starter-files/unifeed/Assets/three-thumb.png";
import A1AuthorImage from "../starter-files/unifeed/Assets/User Avatar.png";
import A2AuthorImage from "../starter-files/unifeed/Assets/User Avatar-1.png";
import A3AuthorImage from "../starter-files/unifeed/Assets/User Avatar-2.png";
import A4AuthorImage from "../starter-files/unifeed/Assets/User Avatar-3.png";
// Fonts
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

// Blog Posts Data

const posts = [
  {
    image: A1Thumb,
    title: "Weekly Newsletter: Tweets from Higher Engagement",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dictatemporibus aut distinctio maiores aliquam voluptate consequatur quibusdam totam natus laborum!'",
    authorImage: A1AuthorImage,
    authorName: "Jessica Andrews",
    authorRole: "Content Manager",
  },

  {
    image: A2Thumb,
    title: "7 Tips for Organic Traffic",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dictatemporibus aut distinctio maiores aliquam voluptate consequatur quibusdam totam natus laborum!'",
    authorImage: A2AuthorImage,
    authorName: "Spencer David",
    authorRole: "SEO Specialist",
  },

  {
    image: A3Thumb,
    title: "How to Start Your Own Business",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dictatemporibus aut distinctio maiores aliquam voluptate consequatur quibusdam totam natus laborum!'",
    authorImage: A3AuthorImage,
    authorName: "Sara Frey",
    authorRole: "Business Leader",
  },

  {
    image: A4Thumb,
    title: "5 Tips for Better Branding",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dictatemporibus aut distinctio maiores aliquam voluptate consequatur quibusdam totam natus laborum!'",
    authorImage: A4AuthorImage,
    authorName: "David Suns",
    authorRole: "Brand Manager",
  },
];

// Global Styles for the App
const globalStyles = globalCss({
  body: {
    fontFamily: "$body",
  },
  img: {
    display: "block",
    maxInlineSize: "100%",
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
});

// Page
export default function Unifeed() {
  globalStyles();
  return (
    <>
      <Head>
        <title>Unifeed</title>
      </Head>
      <Box>
        <Navbar />

        <Box>
          <Container>
            <Box
              css={{
                display: "grid",
                gap: "2rem",
                "@lg": {
                  gap: "1.75rem",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  "& .blog-post:first-child": {
                    gridColumn: "1 / -1",
                    display: "flex",
                    alignItems: "flex-start",
                    marginBlockEnd: "2.5rem",
                    "& > img": {
                      marginInlineEnd: "3.5rem",
                      marginBlockEnd: 0,
                    },
                  },
                },
              }}
            >
              {posts.map((post) => (
                <BlogPost
                  image={post.image}
                  title={post.title}
                  description={post.description}
                  authorImage={post.authorImage}
                  authorName={post.authorName}
                  authorRole={post.authorRole}
                />
              ))}
            </Box>
          </Container>
          <Footer />
        </Box>
      </Box>
    </>
  );
}
