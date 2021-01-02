import * as React from "react";
import { ChakraProvider, CSSReset, Box } from "@chakra-ui/react";
import theme from "@chakra-ui/theme";
import backgroundImage from "images/app-root-background.jpg";

const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box
      backgroundImage={`url(${backgroundImage})`}
      backgroundPosition="50%"
      backgroundSize="cover"
      height="100vh"
      position="relative"
    >
      Heloo joo!
    </Box>
  </ChakraProvider>
);

export default App;
