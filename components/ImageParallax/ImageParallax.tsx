import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

interface ParallaxProps {
  strength?: number;
  height?: number;
  blur?: boolean;
  imageUrl?: string | React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const ImageParallax = ({
  strength = 300,
  height = 500,
  blur = false,
  imageUrl = "",
  title = "",
  children,
}: ParallaxProps) => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transform = `translateY(${offsetY * strength}px)`;

  return (
    <Box
      backgroundImage={`${imageUrl}`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      width="100%"
      height={`${height}px`}
      position="relative"
      overflow="hidden"
      filter={blur ? "blur(3000px)" : ""}
      data-testid="image-parallax"
    >
      <Text
        color="white"
        textAlign="center"
        fontSize={42}
        fontWeight={600}
        margin="0 auto"
        position="absolute"
        top="50%"
        left="50%"
        transform=" translate(-50%, -50%)"
        data-testid="parallax-title"
      >
        {title}
      </Text>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        transform={transform}
        data-testid="image-parallax2"
      >
        {children}
      </Box>
    </Box>
  );
};

export default ImageParallax;
