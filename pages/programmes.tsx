import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import ImageParallax from "@/components/ImageParallax/ImageParallax";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Box, Button, Flex, Link, Text, Image } from "@chakra-ui/react";

const Programmes = () => {
  return (
    <>
      <Header />
      <ImageParallax
        imageUrl="/hero-boy-img-2.jpg"
        height={500}
        blur={false}
        strength={300}
        children={undefined}
        title="Programmes"
      />
      <Box
        textAlign="center"
        w="100%"
        margin="0 auto"
        bg="#653cf0"
        color="white"
        px={32}
      >
        <Wrapper>
          <Flex justifyContent="center" mb={8}>
            <Flex
              bg="white"
              color="black"
              w="50%"
              px={24}
              flexDirection="column"
              textAlign="left"
              py="8.3rem"
            >
              <Text color="#653cf0" fontWeight={600} mb={6}>
                Stand Out Boys Project
              </Text>
              <Text mb={6}>
                SOBP targets children (but mainly boys) in reception, who are
                finding it difficult to settle into school. The aim is to help
                them develop the skills they need to get the most from the
                classroom, and reduce their risk of underachievement.
              </Text>
              <Button>Read More</Button>
            </Flex>
            <Box>
              <Image src="/programmes-boy-img-1.jpg" alt="" />
            </Box>
          </Flex>
          <Flex justifyContent="center" mb={8}>
            <Flex
              bg="white"
              color="black"
              w="50%"
              px={24}
              flexDirection="column"
              textAlign="left"
              py="8.3rem"
            >
              <Text color="#653cf0" fontWeight={600} mb={6}>
                Stand Out Boys Project
              </Text>
              <Text mb={6}>
                SOBP targets children (but mainly boys) in reception, who are
                finding it difficult to settle into school. The aim is to help
                them develop the skills they need to get the most from the
                classroom, and reduce their risk of underachievement.
              </Text>
              <Button>Read More</Button>
            </Flex>
            <Box>
              <Image src="/programmes-boy-img-2.jpg" alt="" />
            </Box>
          </Flex>
          <Flex justifyContent="center" mb={8}>
            <Flex
              bg="white"
              color="black"
              w="50%"
              px={24}
              flexDirection="column"
              textAlign="left"
              py="8.3rem"
            >
              <Text color="#653cf0" fontWeight={600} mb={6}>
                Stand Out Boys Project
              </Text>
              <Text mb={6}>
                SOBP targets children (but mainly boys) in reception, who are
                finding it difficult to settle into school. The aim is to help
                them develop the skills they need to get the most from the
                classroom, and reduce their risk of underachievement.
              </Text>
              <Button>Read More</Button>
            </Flex>
            <Box>
              <Image src="/programmes-boy-img-3.jpg" alt="" />
            </Box>
          </Flex>
        </Wrapper>
      </Box>
      <Footer />
    </>
  );
};

export default Programmes;
