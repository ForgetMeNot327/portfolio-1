import { Box, Flex, HStack, Link } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import Authcontext from "../store/Authcontext";
import { changeValue } from "../store/function";

function Navbar({ ref, isOffside }) {
  const {
    setNavbarHeight,
    homeHeight,
    navbarHeight,
    aboutHeight,
    portfolioHeight,
  } = useContext(Authcontext);
  const [scrollValue, setScrollValue] = useState(0);
  let navbarRef = useRef(null);

  let scrollContents = [
    { value: 0, left: 0 },
    { value: 610, left: 160 },
    { value: 1500, left: 340 },
    { value: 2370, left: 525 },
  ];

  const navbarLineHandler = (minus = 0) => {
    let container = "";
    for (const scrollContent of scrollContents) {
      if (window.scrollY >= scrollContent.value) {
        container = scrollContent.left;
        if (container !== 0) {
          container -= minus;
        }
      }
    }
    return container;
  };

  const scrollHandler = (scrollY) => {
    window.scrollTo({
      top: scrollY,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setNavbarHeight(navbarRef.current.offsetHeight);
  }, []);
  // console.log(navbarLineHandler());

  return (
    <Box
      bgColor={{ sm: "blue.500", md: `${isOffside ? "blue.500" : "#1b242f"}` }}
      color="white"
      position={{ sm: "static", md: `${isOffside ? "fixed" : "static"}` }}
      w="full"
      top="0"
      zIndex="99"
      ref={navbarRef}
    >
      <Flex
        mx={{ md: "6rem" }}
        columnGap={{ md: "", lg: "4rem" }}
        justify="space-evenly"
        w={{ sm: "full", md: "50%" }}
        py="20px"
        pos="relative"
        _before={{
          content: "''",
          pos: "absolute",
          bottom: "0",
          left: "0",
          transform: {
            md: `translateX(${navbarLineHandler(50) / 1.5}px)`,
            lg: `translateX(${navbarLineHandler(50) / 1.2}px)`,
            xl: `translateX(${navbarLineHandler()}px)`,
          },
          width: { md: "20%", xl: "20%" },
          height: "6px",
          bgColor: "white",
          transition: "transform .8s ease",
          clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <Link
          onClick={() => scrollHandler(0)}
          style={{ textDecoration: "none" }}
        >
          HOME
        </Link>
        <Link
          onClick={() => scrollHandler(610)}
          style={{ textDecoration: "none" }}
        >
          ABOUT
        </Link>
        <Link
          onClick={() => scrollHandler(1560)}
          // onClick={() => scrollHandler(aboutHeight)}
          style={{ textDecoration: "none" }}
        >
          PORTFOLIO
        </Link>
        <Link
          onClick={() => scrollHandler(2370)}
          style={{ textDecoration: "none" }}
        >
          CONTACT
        </Link>
      </Flex>
    </Box>
  );
}

export default Navbar;
