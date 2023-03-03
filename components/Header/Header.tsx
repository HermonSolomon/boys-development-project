import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";
export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  interface NavLink {
    link: string;
    path: string;
  }

  const navLinks: NavLink[] = [
    {
      link: "Home",
      path: "/",
    },
    {
      link: "About",
      path: "/about",
    },
    {
      link: "Programme",
      path: "/programme",
    },
    {
      link: "Blog",
      path: "/blog",
    },
    {
      link: "Resources",
      path: "/resources",
    },
    {
      link: "Contact",
      path: "/contact",
    },
  ];

  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={{ base: 2, md: 4 }}
        bg={useColorModeValue("gray.100", "gray.900")}
        // height={{ base: "100vh", sm: "auto", md: "auto" }}
        height="calc(var(--menu-height) -var(--wix-ads-height))"
        color={useColorModeValue("gray.800", "white")}
      >
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Box>
        <Flex
          align="center"
          justify={{ base: "center", md: "space-between" }}
          w="100%"
          py={{ base: 2, md: 0 }}
        >
          <Text fontSize="lg" fontWeight="bold">
            Logo
          </Text>
          <Box
            display={{ base: isOpen ? "block" : "none", md: "flex" }}
            flexBasis={{ base: "100%", md: "auto" }}
            flexGrow={1}
            alignItems="center"
            justifyContent="center"
            mt={{ base: 4, md: 0 }}
            borderTop={{ base: "1px", md: "none" }}
          >
            <Stack
              spacing={4}
              align="center"
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              {navLinks.map((link: NavLink) => (
                <Link href={{ pathname: link.path }} key={link.path}>
                  {link.link}
                </Link>
              ))}
            </Stack>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
