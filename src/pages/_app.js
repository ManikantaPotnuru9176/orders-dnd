import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={"dark"} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
