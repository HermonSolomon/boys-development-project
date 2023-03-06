import { Box, Flex, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

type HeroProps = {
  autoPlay?: boolean;
  autoPlayInterval?: number;
  // images: string[];
};

const images = [
  "/hero-boy-img.jpg",
  "/hero-boy-img-2.jpg",
  "/hero-boy-img-3.jpg",
];

export const Hero = ({
  autoPlay = true,
  autoPlayInterval = 5000,
}: HeroProps) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (autoPlay) {
      intervalId = setInterval(() => {
        setActiveSlide((prevActive) =>
          prevActive === images.length - 1 ? 0 : prevActive + 1
        );
      }, autoPlayInterval);
    }
    return () => clearInterval(intervalId!);
  }, [autoPlay, autoPlayInterval, images.length]);

  const handleNextClick = () => {
    if (activeSlide === images.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeSlide === 0) {
      setActiveSlide(images.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <Box position="relative">
      <Text
        as="h1"
        fontSize="2rem"
        fontWeight={600}
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
        data-testid="slider-heading"
      >
        Boys Development Project
      </Text>
      <Box position="relative">
        <Flex overflow="hidden">
          {images.map((image, index) => (
            <Box
              key={index}
              w="100%"
              flexShrink={0}
              transform={`translateX(${(index - activeSlide) * 100}%)`}
              transition="transform 0.5s ease"
            >
              <Image
                src={image}
                alt={`Slide ${index}`}
                object-fit="cover"
                height="768px"
                width="100%"
              />
            </Box>
          ))}
        </Flex>
        <ChevronLeftIcon
          fontSize={42}
          paddingLeft="1rem"
          color="white"
          position="absolute"
          top="50%"
          left={0}
          transform="translateY(-50%)"
          aria-label="Previous slide"
          onClick={handlePrevClick}
          cursor="pointer"
          role="button"
        />
        <ChevronRightIcon
          fontSize={42}
          paddingRight="1rem"
          color="white"
          position="absolute"
          top="50%"
          right={0}
          transform="translateY(-50%)"
          aria-label="Next slide"
          onClick={handleNextClick}
          cursor="pointer"
          role="button"
        />
        <Stack
          direction="row"
          justifyContent="center"
          position="absolute"
          bottom={4}
          left="50%"
          transform="translateX(-50%)"
          spacing={2}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              w={3}
              h={3}
              borderRadius="50%"
              bg={index === activeSlide ? "gray.500" : "gray.300"}
              cursor="pointer"
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
