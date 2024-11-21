import "../styles/globals.css";
import CustomCursor from "../components/common/CustomCursor";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
