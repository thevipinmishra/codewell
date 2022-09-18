import { globalStyles } from "../styles/global";

const MyApp = ({ Component, pageProps }) => {
  globalStyles();
  return <Component {...pageProps} />;
};

export default MyApp;
