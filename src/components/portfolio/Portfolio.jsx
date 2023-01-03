import React, { useState, useEffect, useRef, useContext } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ProjectModal from "../UI/ProjectModal";

import classes from "./Portfolio.module.css";
import { changeValue } from "../store/function";

import { projectData } from "../store/data";
import Authcontext from "../store/Authcontext";

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const [isHeadingExecuted, setIsHeadingExecuted] = useState(false);
  const [isProjectExecuted, setIsProjectExecuted] = useState(false);

  const { setPortfolioHeight } = useContext(Authcontext);

  let portfolioRef = useRef(null);

  useEffect(() => {
    setPortfolioHeight(portfolioRef.current.offsetHeight);
  }, []);

  return (
    <>
      {isOpen && <ProjectModal content={content} setIsOpen={setIsOpen} />}
      <Flex
        as="section"
        id="portfolio"
        direction="column"
        placeItems="center"
        minH="100vh"
        w="80%"
        mx="auto"
        ref={portfolioRef}
      >
        <Heading
          as="h1"
          size="2xl"
          pb="20px"
          pos="relative"
          transform={changeValue(
            "translateX(-200px)",
            "translateX(0)",
            1400,
            isHeadingExecuted,
            setIsHeadingExecuted
          )}
          opacity={changeValue(
            "0",
            "1",
            1400,
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
              1400,
              isHeadingExecuted,
              setIsHeadingExecuted
            )}`,
            opacity: `${changeValue(
              "0",
              "1",
              1400,
              isHeadingExecuted,
              setIsHeadingExecuted
            )}`,
          }}
        >
          Projects
        </Heading>
        <SimpleGrid columns={{ sm: "1", md: "2" }} w="full" mt="50px">
          {projectData.map((data, i) => (
            <Flex
              className={classes.card}
              direction="column"
              justify="space-evenly"
              overflowY="hidden"
              backgroundImage={`url('img/${data.content.img[0]}.png')`}
              backgroundSize="cover"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              // bgColor="green.500"
              minW="1/4"
              minH={{ sm: "200px", md: "300px" }}
              pos="relative"
              transform={changeValue(
                "translateY(200px)",
                "translateY(0)",
                1550,
                isProjectExecuted,
                setIsProjectExecuted
              )}
              opacity={changeValue(
                "0",
                "1",
                1550,
                isProjectExecuted,
                setIsProjectExecuted
              )}
              transition="1s ease"
              transitionProperty="transform opacity"
              transitionDelay={`${(i + 1) * 0.2}s`}
            >
              <VStack
                w="full"
                pos="relative"
                transform="translateY(-210px)"
                transition="transform .5s ease"
              >
                <Heading>{data.content.title}</Heading>
                <Text>{data.content.tools}</Text>
              </VStack>
              <Flex
                justify="center"
                w="full"
                transform="translateY(110px)"
                transition="transform .5s ease"
              >
                <Button
                  colorScheme="blue"
                  variant="outline"
                  borderRadius="none"
                  _hover={{
                    color: "white",
                    bgColor: "blue",
                    borderColor: "blue",
                  }}
                  onClick={() => {
                    setContent((prev) => {
                      return { data: data.content, index: i };
                    });
                    setIsOpen(true);
                  }}
                >
                  LEARN MORE
                </Button>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default Portfolio;
