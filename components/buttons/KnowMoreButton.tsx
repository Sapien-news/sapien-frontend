import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function KnowMoreButton() {
  return (
    <Button
      leftIcon={<AiOutlineInfoCircle color="white" />}
      bg="white"
      color="white"
      background="rgba(255, 255, 255, 0.3)"
    >
      Know more
    </Button>
  );
}
