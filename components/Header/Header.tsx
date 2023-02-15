import React from "react";
import Link from "next/link";
import { Box, Flex } from "@chakra-ui/react";
import Wrapper from "../Wrapper/Wrapper";

export const Header = () => {
  return (
    <Wrapper px="20px" py="10rem" pt="20px">
      <Flex justifyContent="space-between">
        <Box data-testid="logo">Logo</Box>
        <Flex as="nav" gap="20px" data-testid="Nav">
          <Link href="">Home</Link>
          <Link href="">About</Link>
          <Link href="">Programs</Link>
          <Link href="">Resources</Link>
          <Link href="">Blog</Link>
          <Link href="">Contact</Link>
        </Flex>
      </Flex>
    </Wrapper>
  );
};
