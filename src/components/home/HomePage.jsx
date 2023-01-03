import React, { useRef, useEffect, useContext } from "react";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { UilArrowRight } from "@iconscout/react-unicons";
import Authcontext from "../store/Authcontext";
import "./HomePage.css";

function HomePage({ setHomeHeight }) {
  let bubbleRef = useRef(null);
  const { homeHeight } = useContext(Authcontext);

  let array = [];
  for (let i = 1; i < 9; i++) {
    array.push([i]);
  }

  useEffect(() => {
    setHomeHeight(bubbleRef.current.offsetHeight);
  }, []);

  return (
    <Center
      as="section"
      id="home"
      h="100vh"
      w="full"
      overflow="hidden"
      background="radial-gradient(465px at -15.1% -25%, rgb(17, 130, 193) 0%, rgb(67, 166, 238) 49%, rgb(126, 203, 244) 90.2%)"
      // bgColor="whiteAlpha.50"
      ref={bubbleRef}
    >
      <VStack color="white" spacing="24px">
        <Heading
          as="h1"
          size="xl"
          w="full"
          textAlign="center"
          className="cloud"
        >
          Halo, Saya Nandi Irawan
        </Heading>
        <Flex
          className="home-scroll"
          bgColor="blue"
          p="0 5px 0 15px"
          justify="space-evenly"
          columnGap="10px"
          align="center"
          cursor="pointer"
          onClick={(event) => {
            window.scrollTo({ top: homeHeight, behavior: "smooth" });
          }}
        >
          <Text>Scroll ke Bawah</Text>
          <Box rounded="full">
            <UilArrowRight size="40" color="white" />
          </Box>
        </Flex>
      </VStack>
      <Box className="sunholder" pos="absolute" top="50px">
        <Box className="sun"></Box>
        {array.map((arr) => (
          <Box className={`raybase ray${arr}`}>
            <Box className="ray"></Box>
          </Box>
        ))}
      </Box>
      <div class="container">
        <div id="clouds">
          <div class="cloud1"></div>
          <div class="cloud2"></div>
          <div class="cloud3"></div>
        </div>
        <div id="clouds2">
          <div class="cloud1"></div>
          <div class="cloud2"></div>
          <div class="cloud3"></div>
        </div>
      </div>
    </Center>
  );
}

export default HomePage;
