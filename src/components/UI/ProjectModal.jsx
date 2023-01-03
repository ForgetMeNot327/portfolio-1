import React from "react";
import ReactDOM from "react-dom";

import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  ModalFooter,
  Link,
  Container,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Carousel from "./Carousel";

function MyModal({ content, setIsOpen }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal
        scrollBehavior="outside"
        isOpen={true}
        onClose={() => setIsOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{content.data.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody height="fit-content">
            <Carousel content={content} />
            <Text mt="10px">{content.data.text}</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => setIsOpen(false)}>
              Close
            </Button>
            <Link
              href={content.data.link}
              colorScheme="blue"
              color="blue.500"
              isExternal
            >
              Go to Project
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function ProjectModal({ content, setIsOpen }) {
  return (
    <>
      {ReactDOM.createPortal(
        <MyModal content={content} setIsOpen={setIsOpen} />,
        document.getElementById("modal")
      )}
    </>
  );
}

export default ProjectModal;
