import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Circle, Stack, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import myimg from '../assects/myimg.jpg';
import resume from '../assects/Harini K-Resume..pdf'


const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Stack>
      {isNotSmallerScreen && (
        <Circle
          position="absolute"
          bg="blue.100"
          opacity="0.1"
          w="350px"
          h="350px"
          alignSelf="flex-end"
        />
      )}
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : 0}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? 0 : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold"
           bgGradient="linear(to-r, cyan.500, pink.500)"
           bgClip="text">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, purple.400, pink.500)"
            bgClip="text"
          >
            Harini K
          </Text>
          <Text fontSize={"x-large"} color={isDark ? "gray.200" : "gray.500"}>
            Mentor, Developer and Freelancer, Mentor by Day and Freelancer by
            Night.  
          </Text>
          <Button fontSize={"x-large"} variant='solid' component="label" mt={8} colorScheme="purple"
             href={resume} target="_blank" download>
               Hire Me
            
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src={myimg}
          zIndex={1}
        />
      </Flex>
    </Stack>
  );
};

export default Header;