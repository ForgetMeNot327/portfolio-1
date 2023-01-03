import React, { useRef, useEffect, useContext, useState } from "react";
import {
  SimpleGrid,
  Heading,
  VStack,
  Image,
  Box,
  Text,
  Grid,
  Flex,
  Center,
} from "@chakra-ui/react";
import profileImage from "../../assets/foto-profil.jpg";
import { education, skills } from "../store/data";
import Authcontext from "../store/Authcontext";

import "./../UI/general.css";
import classes from "./About.module.css";
import { changeValue } from "../store/function";

function About() {
  const { setAboutHeight } = useContext(Authcontext);
  let aboutRef = useRef(null);

  const [isHeadingExecuted, setIsHeadingExecuted] = useState(false);
  const [isEducationExecuted, setIsEducationExecuted] = useState(false);
  const [isProfileExecuted, setIsProfileExecuted] = useState(false);

  useEffect(() => {
    setAboutHeight(aboutRef.current.offsetHeight);
    // window.addEventListener("scroll", () => {
    //   console.log(window.scrollY);
    // });
  }, []);

  return (
    <Flex
      placeItems="center"
      direction="column"
      as="section"
      id="about"
      minH="100vh"
      w="80%"
      mx="auto"
      my="24px"
      ref={aboutRef}
    >
      <Heading
        as="h1"
        size="2xl"
        pb="20px"
        pos="relative"
        transform={changeValue(
          "translateX(-200px)",
          "translateX(0)",
          400,
          isHeadingExecuted,
          setIsHeadingExecuted
        )}
        opacity={changeValue(
          "0",
          "1",
          400,
          isHeadingExecuted,
          setIsHeadingExecuted
        )}
        transition="1s ease"
        transitionProperty="transform opacity"
        _before={{
          content: "''",
          pos: "absolute",
          w: "full",
          h: "4px",
          rounded: "2px",
          bottom: "0",
          left: "0",
          transition: "1s ease",
          transitionProperty: "transform opacity",
          transitionDelay: ".4s",
          bgColor: "black",
          transform: `${changeValue(
            "translateX(-200px)",
            "translate(0)",
            400,
            isHeadingExecuted,
            setIsHeadingExecuted
          )}`,
          opacity: `${changeValue(
            "0",
            "1",
            400,
            isHeadingExecuted,
            setIsHeadingExecuted
          )}`,
        }}
        // className={leftToRight}
      >
        About
      </Heading>

      <Flex
        // columns={{ sm: "2", md: "3" }}
        flexWrap="wrap"
        my="4.5rem"
        justify={{ sm: "center", md: "space-evenly" }}
        w="full"
        bgColor="blue.300"
        // rounded="3rem"
        clipPath={{
          sm: "",
          md: "polygon(7% 0, 93% 0, 100% 50%, 93% 100%, 7% 100%, 0% 50%)",
        }}
        pb="1.5rem"
        p={{ sm: "20px 10px" }}
        transition="1s ease"
        transitionProperty="transform opacity"
        transform={changeValue(
          "translateY(200px)",
          "translateY(0)",
          460,
          isEducationExecuted,
          setIsEducationExecuted
        )}
        opacity={changeValue(
          "0",
          "1",
          460,
          isEducationExecuted,
          setIsEducationExecuted
        )}
      >
        {education.map((data) => (
          <VStack color="white">
            <Center
              className={classes.hexagon}
              my="25px"
              pos="relative"
              padding="5px"
              bgColor="white"
            >
              <Box
                backgroundImage={`url(img/${data.img})`}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                w="full"
                h="full"
                transform="rotate(-90deg)"
              ></Box>
            </Center>
            <Heading as="h2" size="md" textAlign="center">
              {data.title}
            </Heading>
            <Text textAlign="center">{data.text}</Text>
          </VStack>
        ))}
      </Flex>
      <SimpleGrid columns={{ sm: "1", md: "2" }} spacingY="40px">
        <Flex
          direction="column"
          justify="space-between"
          transition="1s ease"
          transitionProperty="transform opacity"
          transform={changeValue(
            "translateX(-200px)",
            "translateX(0)",
            850,
            isProfileExecuted,
            setIsProfileExecuted
          )}
          opacity={changeValue(
            "0",
            "1",
            850,
            isProfileExecuted,
            setIsProfileExecuted
          )}
        >
          <Center>
            <Box h="200px" w="250px" pos="relative">
              <Image
                clipPath="polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
                src={profileImage}
                // boxSize="200px"
                objectFit="cover"
                w="full"
                h="full"
              />
            </Box>
          </Center>
          <VStack spacing="5">
            <Heading as="h1" size="lg">
              Who's this guy?
            </Heading>
            <Text>
              Saya adalah Nandi Irawan, alumni Studi Independen Kampus Merdeka
              Ruangguru CAMP program Frontend Engineering. Saya memiliki passion
              dalam membuat website yang dinamis.
            </Text>
          </VStack>
        </Flex>
        <VStack
          spacing="16px"
          color="white"
          transition="1s ease"
          transitionProperty="transform opacity"
          transform={changeValue(
            "translateX(200px)",
            "translateX(0)",
            850,
            isProfileExecuted,
            setIsProfileExecuted
          )}
          opacity={changeValue(
            "0",
            "1",
            850,
            isProfileExecuted,
            setIsProfileExecuted
          )}
        >
          {skills.map((skill) => (
            <Flex bgColor="red" h="2rem" w="90%">
              <Center bgColor="blue" w="20%">
                <Text fontSize={{ sm: "xs", md: "small", lg: "sm" }}>
                  {skill.title}
                </Text>
              </Center>
              <Flex
                bgColor="gray.300"
                w="80%"
                justify="space-between"
                // alignItems="center"
              >
                <Box
                  bgColor="blue.200"
                  transition="width 1s ease"
                  transitionDelay="1.5s"
                  w={`${isProfileExecuted ? skill.score : "0"}`}
                ></Box>
                <Text
                  fontSize="xs"
                  alignSelf="center"
                  mr="5px"
                  color="blue.500"
                >
                  {skill.score}
                </Text>
              </Flex>
            </Flex>
          ))}
        </VStack>
      </SimpleGrid>
    </Flex>
  );
}

export default About;
