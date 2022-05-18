import { Box, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Box>
        <HStack>
          <Link>Read</Link>
          <Link>Write</Link>
          <Link>Publish</Link>
          <Link>Connect</Link>
        </HStack>
      </Box>
    </nav>
  );
};

export default Navbar;
