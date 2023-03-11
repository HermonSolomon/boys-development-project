import React from "react";
import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

type Props = {};

const Body = () => {
  return (
    <>
      <Flex
        flex="1 1 768px"
        flexWrap="wrap"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          bgColor="#653cf0"
          color="white"
          textAlign="center"
          w={{ base: "100%", md: "50%" }}
        >
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
        <Box w={{ base: "100%", md: "50%" }}>
          <Image
            src="/main-brothers-img.jpg"
            width="770px"
            // height="644px"
            object-fit="cover"
            object-position="50% 50%"
            alt={""}
          />
        </Box>
      </Flex>
      {/* Approach */}
      <Box>
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
          px={{ base: 4 }}
          gap={{ base: 4, md: 24 }}
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
        >
          <Flex
            flexDirection="column"
            w={{ base: "100%", md: "24%" }}
            position="relative"
          >
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
          <Flex
            flexDirection="column"
            w={{ base: "100%", md: "24%" }}
            position="relative"
          >
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
          <Flex
            flexDirection="column"
            w={{ base: "100%", md: "24%" }}
            position="relative"
            mb={12}
          >
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
          <Flex
            flexDirection="column"
            w={{ base: "100%", md: "24%" }}
            position="relative"
          >
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
          <Flex
            flexDirection="column"
            w={{ base: "100%", md: "24%" }}
            position="relative"
          >
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
      {/* What's new */}
      <Box>
        <Text
          fontSize="32px"
          fontWeight={600}
          color="#653cf0"
          my={12}
          textAlign="center"
        >
          What's New
        </Text>
        <Flex
          justifyContent="center"
          gap="2.5rem"
          flexWrap="wrap"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box textAlign="center">
            <Image
              src="/whats-new-img-1.jpg"
              objectFit="cover"
              objectPosition="50% 50%"
            />
            <Text fontSize="24px" fontWeight="600" textAlign="center" my="1rem">
              Screens and under 5's
            </Text>
            <Button
              variant="outline"
              color="#653cf0"
              border="solid 2px #653cf0"
              borderRadius="20px"
              px="1.5rem"
            >
              Download
            </Button>
          </Box>
          <Box textAlign="center">
            <Image
              src="/whats-new-img-2.jpg"
              objectFit="cover"
              objectPosition="50% 50%"
            />
            <Text fontSize="24px" fontWeight="600" textAlign="center" my="1rem">
              Screens and under 5’s (with references)
            </Text>
            <Button
              variant="outline"
              color="#653cf0"
              border="solid 2px #653cf0"
              borderRadius="20px"
              px="1.5rem"
            >
              Download
            </Button>
          </Box>
        </Flex>
      </Box>
      {/* Our Consultants*/}
      <Box bg="#653cf0" w="100%" my={14}>
        <Text
          fontSize="32px"
          fontWeight={600}
          color="white"
          textAlign="center"
          py={12}
        >
          Our Consultants
        </Text>
        <Flex
          color="white"
          gap={{ base: 6, md: 16 }}
          px={{ base: 4 }}
          //   py={8}
          textAlign="left"
          justifyContent="center"
          flexWrap="wrap"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box flex=" 1 1 30%">
            <Text
              fontSize="24px"
              fontWeight="600"
              my={{ base: 4, md: "1.5rem" }}
            >
              Trefor Lloyd
            </Text>
            <Text>
              Trefor Lloyd has a long experience of carrying out research and
              investigations (usually leading to projects). He has over the
              years researched, developed and delivered a range of programmes
              targeting boys and young men, primarily in schools, but also youth
              services, criminal justice and community settings.{" "}
            </Text>
            <Button
              variant="outline"
              color="white"
              border="solid 2px white"
              borderRadius="20px"
              px="1.5rem"
              my={{ base: 4, md: "1.5rem" }}
              _hover={{
                color: "#653cf0",
                bg: "white",
              }}
            >
              Learn More
            </Button>
          </Box>
          <Box flex=" 1 1 30%">
            <Text
              fontSize="24px"
              fontWeight="600"
              my={{ base: 4, md: "1.5rem" }}
            >
              Neil Davidson
            </Text>
            <Text>
              Neil Davidson trained as a youth worker, and has been involved in
              developing work with boys and young men since 1982, with a focus
              on sex and relationships education. He was a co-founder of Working
              With Men, and then a full-time consultant for Working with Men
              from 1991 to 2006.
            </Text>
            <Button
              variant="outline"
              color="white"
              border="solid 2px white"
              borderRadius="20px"
              px="1.5rem"
              my={{ base: 4, md: "1.5rem" }}
              _hover={{
                color: "#653cf0",
                bg: "white",
              }}
            >
              Learn More
            </Button>
          </Box>
          <Box flex=" 1 1 30%">
            <Text
              fontSize="24px"
              fontWeight="600"
              my={{ base: 4, md: "1.5rem" }}
            >
              Simon Forrest
            </Text>
            <Text>
              Simon Forrest is Principal of the College of St Hild & St Bede and
              a Professor of Sociology at Durham University. He is a trustee of
              AVERT (The AIDS Education and Research Trust). He has previously
              been Director of the Sex Education Forum, a Research Fellow in the
              Department of Sexually Transmitted Diseases at University College
              London.
            </Text>
            <Button
              variant="outline"
              color="white"
              border="solid 2px white"
              borderRadius="20px"
              px="1.5rem"
              my={{ base: 4, md: "1.5rem" }}
              _hover={{
                color: "#653cf0",
                bg: "white",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Body;
