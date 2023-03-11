import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { Grid, GridItem, Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { resourcesContent, ResourcesI } from "../staticData";

const Resources = () => {
  return (
    <>
      <Header />
      <Box bg="#653cf0" pb={32}>
        <Text
          as="h1"
          color="white"
          fontSize={42}
          textAlign="center"
          py={12}
          fontWeight={600}
        >
          Resources
        </Text>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr" }}
          gap={6}
          px={{ base: 4, md: "24%" }}
        >
          {resourcesContent.map((item: ResourcesI) => (
            <GridItem
              bg="white"
              key={item.title}
              colSpan={{ sm: 1, md: 1 }}
              p={8}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Text
                as="h2"
                fontSize={24}
                color="#653cf0"
                fontWeight={600}
                mb={6}
              >
                {item.title}
              </Text>
              <Text mb={6}>{item.description}</Text>
              <Button
                variant="outline"
                color="#653cf0"
                border="solid 2px #653cf0"
                borderRadius="20px"
                px="1.5rem"
              >
                Read More
              </Button>
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Resources;
