import React, {
  useEffect,
  useRef,
  useContext,
  useState,
  useReducer,
} from "react";
import Authcontext from "../store/Authcontext";
import { changeValue } from "../store/function";
import {
  Flex,
  Heading,
  VStack,
  Text,
  FormLabel,
  Input,
  Box,
  Button,
  HStack,
  FormControl,
  Textarea,
  Center,
} from "@chakra-ui/react";

const initialValue = {
  username: "",
  email: "",
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "textInput":
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function Contact() {
  let contactRef = useRef(null);
  const { setContactHeight } = useContext(Authcontext);
  const [isHeadingExecuted, setIsHeadingExecuted] = useState(false);
  const [isExecuted, setIsExecuted] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialValue);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state.username);
    console.log(state.email);
    console.log(state.message);
  };

  useEffect(() => {
    setContactHeight(contactRef.current.offsetHeight);
  }, []);

  return (
    <VStack
      as="section"
      id="contact"
      my="30px"
      ref={contactRef}
      w="80%"
      spacing="50px"
    >
      <Heading
        as="h1"
        size="2xl"
        pb="20px"
        pos="relative"
        transform={changeValue(
          "translateX(-200px)",
          "translateX(0)",
          2230,
          isHeadingExecuted,
          setIsHeadingExecuted
        )}
        opacity={changeValue(
          "0",
          "1",
          2230,
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
            2230,
            isHeadingExecuted,
            setIsHeadingExecuted
          )}`,
          opacity: `${changeValue(
            "0",
            "1",
            2230,
            isHeadingExecuted,
            setIsHeadingExecuted
          )}`,
        }}
      >
        Contact
      </Heading>
      <Box
        as="form"
        minW="50%"
        maxW="75%"
        onSubmit={submitHandler}
        transition="opacity 1.5s ease-out"
        opacity={changeValue("0", "1", 2370, isExecuted, setIsExecuted)}
      >
        <Text textAlign="center" mb="12px">
          Have a question or want to work together?
        </Text>
        <FormControl display="flex" flexDirection="column" rowGap="10px">
          <Input
            type="text"
            placeholder="Username"
            value={state.username}
            onChange={(event) =>
              dispatch({
                type: "textInput",
                payload: { key: "username", value: event.target.value },
              })
            }
          />
          <Input
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={(event) =>
              dispatch({
                type: "textInput",
                payload: { key: "email", value: event.target.value },
              })
            }
          />
          <Box>
            <Textarea
              placeholder="Write your message here"
              _placeholder={{ fontSize: "1rem" }}
              size="sm"
              resize="both"
              value={state.message}
              onChange={(event) =>
                dispatch({
                  type: "textInput",
                  payload: { key: "message", value: event.target.value },
                })
              }
            />
          </Box>
          <Center>
            <Button
              type="submit"
              colorScheme="blue"
              variant="outline"
              _hover={{
                bgColor: "blue",
                color: "white",
              }}
            >
              Submit
            </Button>
          </Center>
        </FormControl>
      </Box>
    </VStack>
  );
}

export default Contact;
