import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

interface ParallaxProps {
  strength?: number;
  height?: number;
  blur?: boolean;
  imageUrl?: string;
  children: React.ReactNode;
}

const ImageParallax = ({
  strength = 300,
  height = 500,
  blur = false,
  imageUrl = "",
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

  // const transform = `translateY(${offsetY * strength}px)`;

  return (
    <Box
      backgroundImage={`${imageUrl}`}
      backgroundSize="cover"
      backgroundPosition="center"
      width="100%"
      height={`${height}px`}
      position="relative"
      overflow="hidden"
      filter={blur ? "blur(3000px)" : ""}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        // style={{ transform }}
        transform={`translateY(${offsetY * strength}px)`}
      >
        {children}
      </Box>
    </Box>
  );
};

export default ImageParallax;
