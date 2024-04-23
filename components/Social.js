import { IconButton } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import { SiLinkedin } from "react-icons/si";
import { PiCallBell } from "react-icons/pi";

const Social = () => {
  return (
    <HStack spacing={24}>
      <IconButton as={RxGithubLogo} boxSize={50}  color={"teal"} variant='outline' rounded={"xl"}
                onClick={() => window.open("https://github.com/harry000524")}>
      </IconButton >
      <IconButton as={SiLinkedin} boxSize={50} color={"teal"} variant='outline' rounded={"xl"}
          onClick={() =>
            window.open("https://www.linkedin.com/in/harini-k-2675b1215/")
          }>
      </IconButton>
      <IconButton as={ PiCallBell } boxSize={50} color={"teal"} variant='outline' rounded={"xl"}
          onClick={() =>
            window.open("mailto:hari.nikal.2455@gmail.com")
          }>
      </IconButton>
    </HStack>
  );
};

export default Social;