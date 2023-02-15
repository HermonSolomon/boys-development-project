import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import Wrapper from "./Wrapper";

const Header = () => {
  return (
    <Wrapper px="20px" py="10rem" pt="20px">
      <Flex justifyContent="space-between">
        <Box>Logo</Box>
        <Flex gap="20px">
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

export default Header;
