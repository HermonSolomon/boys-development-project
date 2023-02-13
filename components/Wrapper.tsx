import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

const Wrapper = (props: BoxProps) => {
  return (
    <Box
      mx="auto"
      py={{ base: "2rem", lg: "48px" }}
      px={{ base: "2rem", lg: "2.5rem" }}
    >
      {props.children}
    </Box>
  );
};

export default Wrapper;
