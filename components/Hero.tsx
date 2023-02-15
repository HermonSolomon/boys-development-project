import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

export const Hero = () => {
  return (
    <Box position="relative">
      <Text
        as="h1"
        fontSize="2rem"
        fontWeight={600}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
      >
        Boys Development Project
      </Text>
      <Image
        src="/hero-boy-img.jpg"
        width="1920px"
        height="760px"
        object-fit="cover"
        object-position="50% 50%;"
      />
    </Box>
  );
};
