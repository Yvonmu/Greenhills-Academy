import RootLayout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
  );
}
