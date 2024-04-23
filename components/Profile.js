import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/icon";
import { DiReact, DiJava, DiPython } from "react-icons/di";

const Profile = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          6+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Months of Experience
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Product Developer and Freelancer. My expertise lies in Java,Python, .NET and JavaScript frameworks like React, Next, Angular . I've also built personal projects using the MERN stack, incorporating technologies like MongoDB, Express, React, and Node.js. I excel in CI/CD, Dockerization, authentication, and authorization. I've integrated GraphQL & RESTful APIs, message queues, and payment systems. Recently, I've developed a keen interest in AWS, EKS, serverless, and GCP.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "blue.400"}}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiReact} onClick={() => window.open("https://github.com/harry000524/Jobify-App-")} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold" >
              MERN(MongoDB, Express, React, Node) 
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "green.400"}} 
          >
            <Icon color="black" p="4" w="24" h="24" as={DiJava} onClick={() => window.open("https://github.com/harry000524/E-commerce-Website")}/>
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold" >
              Java
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="gray.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            ml={isNotSmallerScreen ? 4 : 0}
            _hover={{ bg: "yellow.400" }}
          >
            <Icon color="black" p="4" w="24" h="24" as={DiPython} onClick={() => window.open("https://github.com/harry000524/Breast-Cancer-Prediction-using-Machine-Learning")} />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold" >
              Python
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;