// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { Box, Flex, Text } from "@chakra-ui/react";
// import Wrapper from "../Wrapper/Wrapper";

// interface MenuToggleProps {
//   toggle?: () => void;
//   isOpen: boolean;
// }

// export const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     setIsOpen(!isOpen);
//   }, []);

//   return (
//     <Wrapper px="20px" py="10rem" pt="20px">
//       <Flex justifyContent="space-between">
//         <Box data-testid="logo">Logo</Box>
//         <MenuToggle toggle={toggle} isOpen={isOpen} />
//         <MenuLinks isOpen={isOpen} />
//       </Flex>
//     </Wrapper>
//   );
// };

// const CloseIcon = () => (
//   <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
//     <Text>Close</Text>
//     <path
//       fill="black"
//       d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
//     />
//   </svg>
// );

// const MenuIcon = () => (
//   <svg
//     width="24px"
//     viewBox="0 0 20 20"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="black"
//   >
//     <Text color="black">Menu</Text>
//     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//   </svg>
// );

// const MenuLinks = ({ isOpen }: MenuToggleProps) => {
//   return (
//     <Box
//       display={{ base: isOpen ? "block" : "none", md: "block" }}
//       flexBasis={{ base: "100%", md: "auto" }}
//     >
//       <Flex as="nav" gap="20px" data-testid="Nav">
//         <Link href="">Home</Link>
//         <Link href="">About</Link>
//         <Link href="">Programs</Link>
//         <Link href="">Resources</Link>
//         <Link href="">Blog</Link>
//         <Link href="">Contact</Link>
//       </Flex>
//     </Box>
//   );
// };

// const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
//   return (
//     <Box display={{ base: "block", md: "none" }} onClick={toggle}>
//       {isOpen ? <CloseIcon /> : <MenuIcon />}
//     </Box>
//   );
// };

import React, { useState } from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";

export const Header: React.FC = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Text data-testid="logo">Logo</Text>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon: React.FC = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon: React.FC = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

type MenuToggleProps = {
  toggle: () => void;
  isOpen: boolean;
};

const MenuToggle: React.FC<MenuToggleProps> = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

interface MenuItemProps {
  children: React.ReactNode;
  to: string | "/";
}

const MenuItem = ({ children, to }: MenuItemProps) => {
  return (
    <Link href={to}>
      <Text display="block" color="black">
        {children}
      </Text>
    </Link>
  );
};

type MenuLinksProps = {
  isOpen: boolean;
};

const MenuLinks = ({ isOpen }: MenuLinksProps) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/programme">Programme </MenuItem>
        <MenuItem to="/resources">Resources</MenuItem>
        <MenuItem to="/blog">Blog</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
      </Stack>
    </Box>
  );
};

interface NavBarContainerProps {
  children: React.ReactNode;
}

const NavBarContainer = ({ children, ...props }: NavBarContainerProps) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};
