import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import classes from "./Carousel.module.css";

function Carousel({ content }) {
  return (
    <div className={classes.container} w="fit-content">
      <div className={classes.slider}>
        {content.data.img.map((img, i) => (
          <a href={`#slide-${i + 1}`}>{i + 1}</a>
        ))}

        <div className={classes.slides}>
          {content.data.img.map((img, i) => (
            <Box
              id={`slide-${i + 1}`}
              backgroundImage={`url(img/${img}.png)`}
              backgroundSize="contain"
              backgroundRepeat="space no-repeat"
              backgroundPosition="center"
              w="300px"
              h="300px"
            ></Box>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
