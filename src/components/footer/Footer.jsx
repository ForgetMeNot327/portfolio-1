import { Center, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

import { changeValue } from "../store/function";

import {
  UilInstagram,
  UilFacebookF,
  UilGithub,
  UilLinkedin,
} from "@iconscout/react-unicons";

function Footer() {
  const [isExecuted, setIsExecuted] = useState(false);

  return (
    <VStack
      bgColor="black"
      h="50vh"
      w="full"
      pb="10px"
      justify="space-between"
      spacing="50px"
      clipPath="polygon(0 30%, 50% 0, 100% 30%, 100% 100%, 0% 100%)"
      transition="1.5s ease-out"
      transitionProperty="transform opacity"
      transform={changeValue(
        "translateY(500px)",
        "translateY(0)",
        2440,
        isExecuted,
        setIsExecuted
      )}
      opacity={changeValue("0", "1", 2440, isExecuted, setIsExecuted)}
    >
      <HStack spacing="50px" mt={{ md: "11%", sm: "32%" }}>
        <Link
          href="https://www.instagram.com/nandi_ir/?hl=id"
          isExternal
          rounded="10px"
          _hover={{
            background:
              "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);",
            color: "white",
          }}
        >
          <UilInstagram size="50" />
        </Link>
        <Link
          href="https://web.facebook.com/nandi.ajjah.5"
          isExternal
          _hover={{ color: "#4267B2" }}
        >
          <UilFacebookF size="50" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/nandi-irawan-120054244/"
          isExternal
          _hover={{ color: "#0077b5" }}
        >
          <UilLinkedin size="50" />
        </Link>
        <Link
          href="https://github.com/ForgetMeNot327"
          isExternal
          _hover={{ color: "white" }}
        >
          <UilGithub size="50" />
        </Link>
      </HStack>
      <Text>&#169; Nandi Irawan</Text>
    </VStack>
  );
}

export default Footer;
