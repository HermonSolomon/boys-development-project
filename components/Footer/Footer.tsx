import { Box, HStack, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <Box>
      <HStack display="flex" justifyContent="center" flexDir="column" gap={2}>
        <Text>Boys' Development Project</Text>
        <Text>0208 693 7684</Text>
        <Text>270 Lordship Lane</Text>
        <Text>Dulwich, London SE22 8LY</Text>
        <Flex gap="1rem">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </Flex>
      </HStack>
    </Box>
  );
};
