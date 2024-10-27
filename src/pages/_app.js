import "../styles/globals.css";
import CustomCursor from "../components/common/CustomCursor";
// import Template from "./tempelate";
import LoadingScreen from "./LoadingScreen";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
