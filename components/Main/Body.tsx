import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

type Props = {};

const Body = () => {
  return (
    <>
      <Flex px={44} flex="1 1 768px">
        <Box bgColor="#653cf0" color="white" textAlign="center">
          <Text color="white" mt={16} mb={12} fontWeight="600" fontSize="32px">
            About Our <br /> Organization
          </Text>
          <Text px={12} lineHeight={8}>
            The Boys Development Project develops, designs and delivers
            programmes targeting children (but primarily boys) and their
            families, within schools, children’s centres and other community
            settings.
          </Text>
          <Text mt={5} px={12} lineHeight={8}>
            Our primary focus is educational achievement. We target those
            characteristics that can lead to underachievement (for boys and
            girls), and address these as children come into reception classes,
            and with parents before they arrive in school.
          </Text>
        </Box>
        <Box w="100%">
          <Image
            src="/main-brothers-img.jpg"
            width="770px"
            height="644px"
            object-fit="cover"
            object-position="50% 50%"
            alt={""}
          />
        </Box>
      </Flex>
      {/* Approach */}
      <Box px={100}>
        <Text
          my={8}
          color="#653cf0"
          fontSize="32px"
          fontWeight={600}
          textAlign="center"
        >
          Approach
        </Text>
        <Flex
          px={44}
          gap={24}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Flex flexDirection="column" w="24%" position="relative">
            <Text as="span" fontSize={200} color="#ffeae8" fontWeight={800}>
              01
            </Text>
            <Text
              as="span"
              fontSize={28}
              position="absolute"
              z-index="5"
              top="6rem"
              left="30%"
              fontWeight={600}
            >
              A primary focus on boys, because they represent the majority of
              underachievers.
            </Text>
          </Flex>
          <Flex flexDirection="column" w="24%" position="relative">
            <Text as="span" fontSize={200} color="#ecdbff" fontWeight={800}>
              02
            </Text>
            <Text
              fontSize={28}
              position="absolute"
              z-index="5"
              top="6rem"
              left="30%"
              fontWeight={600}
            >
              A primary focus on boys, because they represent the majority of
              underachievers.
            </Text>
          </Flex>
          <Flex flexDirection="column" w="24%" position="relative" mb={12}>
            <Text as="span" fontSize={200} color="#d4edee" fontWeight={800}>
              03
            </Text>
            <Text
              as="span"
              fontSize={28}
              position="absolute"
              z-index="5"
              top="6rem"
              left="30%"
              fontWeight={600}
            >
              A primary focus on boys, because they represent the majority of
              underachievers.
            </Text>
          </Flex>
          <Flex flexDirection="column" w="24%" position="relative">
            <Text as="span" fontSize={200} color="#ecdbff" fontWeight={800}>
              04
            </Text>
            <Text
              as="span"
              fontSize={28}
              position="absolute"
              z-index="5"
              top="6rem"
              left="30%"
              fontWeight={600}
            >
              A primary focus on boys, because they represent the majority of
              underachievers.
            </Text>
          </Flex>
          <Flex flexDirection="column" w="24%" position="relative">
            <Text as="span" fontSize={200} color="#d4edee" fontWeight={800}>
              05
            </Text>
            <Text
              as="span"
              fontSize={28}
              position="absolute"
              z-index="5"
              top="6rem"
              left="30%"
              fontWeight={600}
            >
              A primary focus on boys, because they represent the majority of
              underachievers.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Body;
