import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  return <Component key={route.asPath} {...pageProps} />;
}

export default MyApp;
