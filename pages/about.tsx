import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import ImageParallax from "@/components/ImageParallax/ImageParallax";
import Wrapper from "@/components/Wrapper/Wrapper";
import { Box, Link, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Header />
      <ImageParallax
        imageUrl="/blog-boy-img-1.jpg"
        height={500}
        blur={false}
        strength={300}
        children={undefined}
      />
      <Box
        bg="#653cf0"
        color="white"
        mx={24}
        px={24}
        py={24}
        textAlign="center"
      >
        <Text fontSize={24} mb={4}>
          Our Organisation
        </Text>
        <Text mb={4}>
          The Boys’ Development Project (CIC) is a registered Social Enterprise
          and a company limited by guarantee (Number 7174935).
        </Text>
        <Text mb={4}>
          <strong>Trefor Lloyd:</strong> tlloydBDP@mail.com and 07744741759
        </Text>
        <Text mb={4}>
          <strong>Neil Davidson:</strong> neildavid55@gmail.com
        </Text>
        <Text mb={4}>
          <strong>Simon Forrest:</strong> simon.forrest@durham.ac.uk
        </Text>
      </Box>
      <Box textAlign="center">
        <Wrapper w="50%">
          <Text color="#653cf0" fontSize={24}>
            What we offer
          </Text>
          <Text mb={4}>
            Two projects have driven our approach. The About Boys Course (ABC
            0-5), is a 4-session programme, targeting parents who have sons.
            These are offered in Children's Centres, where we have trained over
            300 people to deliver courses throughout England{" "}
            <Link>Read More</Link>.
          </Text>
          <Text mb={4}>
            The second (and our main focus now), is our Stand Out Boys Project
            that targets children in reception who struggle to settle into their
            learning (read more). While there are several spin-off initiatives,
            these two projects continue to be our main offering.
          </Text>
          <Text mb={4}>
            This website’s primary purpose is to disseminate information to
            professionals and parents, what we do, and what we have learnt from
            our work. There are links to more detailed information on the
            ‘resources page and follow our blog for regular updates.
          </Text>
        </Wrapper>
      </Box>
      <Footer />
    </>
  );
};

export default About;
