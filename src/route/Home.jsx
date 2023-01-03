import React, { useState, useEffect, useRef } from "react";
import HomePage from "../components/home/HomePage";
import { Box, Center, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import About from "../components/about/About";
import Navbar from "../components/navbar/Navbar";
import Portfolio from "../components/portfolio/Portfolio";
import Authcontext from "../components/store/Authcontext";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import { UilAngleUp } from "@iconscout/react-unicons";

import "./Home.css";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [homeHeight, setHomeHeight] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [aboutHeight, setAboutHeight] = useState(0);
  const [portfolioHeight, setPortfolioHeight] = useState(0);
  const [contactHeight, setContactHeight] = useState(0);
  const [isOffside, setIsOffside] = useState(false);
  let homeRef = useRef(null);

  const setOffsideHandler = () => {
    setScrollY(window.scrollY);
    if (window.scrollY < homeHeight) {
      setIsOffside(false);
    } else {
      setIsOffside(true);
    }
  };
  // console.log(scrollY);

  useEffect(() => {
    window.addEventListener("scroll", setOffsideHandler);
  }, [homeHeight, navbarHeight, scrollY]);

  // console.log(contactHeight);

  return (
    <Authcontext.Provider
      value={{
        setNavbarHeight,
        setAboutHeight,
        setPortfolioHeight,
        setContactHeight,
        homeHeight,
        navbarHeight,
        aboutHeight,
        portfolioHeight,
        contactHeight,
      }}
    >
      <Box
        className="home"
        overflow="hidden"
        position="relative"
        height="fit-content"
      >
        <HomePage setHomeHeight={setHomeHeight} />
        <Navbar isOffside={isOffside} />
        <VStack
          pos="relative"
          top={{ md: `${isOffside ? navbarHeight + "px" : ""}` }}
          pb="100px"
          spacing="100px"
        >
          <About />
          <Portfolio />
          <Contact />
        </VStack>
        <Footer />
        <Center
          display={{ sm: "block", md: "none" }}
          bgColor="green.500"
          rounded="full"
          cursor="pointer"
          w="80px"
          h="80px"
          pos="fixed"
          bottom="50px"
          right="50px"
          onClick={() => window.scrollTo({ top: "640", behavior: "smooth" })}
        >
          <Box
            w="fit-content"
            pos="absolute"
            rounded="full"
            transition="transform .8s ease"
            transform={
              window.scrollY < homeHeight ? "rotate(180deg)" : "rotate(0)"
            }
          >
            <UilAngleUp size="80" color="#fff" />
          </Box>
        </Center>
      </Box>
    </Authcontext.Provider>
  );
}

export default Home;
