import {
  Box,
  HStack,
  Grid,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import NextLink from "next/link";
import React from "react";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <nav style={{ width: "100%" }}>
      <Grid
        templateColumns="1fr 1fr 2fr"
        gap={6}
        bg="brand.greyDark"
        width={"100%"}
        padding={6}
      >
        <div></div>
        <InputGroup>
          <Input placeholder="Basic usage" />
          <InputRightElement children={<Icon as={MdSettings} />} />
        </InputGroup>
        <HStack>
          <NextLink href="/" passHref>
            <Link color={"brand.white"}> Read</Link>
          </NextLink>
          <NextLink color="brand.white" href="/">
            <Link color="brand.white"> Write </Link>
          </NextLink>
          <NextLink color="brand.white" href="/publish">
            <Link color="brand.white"> Publish</Link>
          </NextLink>
          {/* <Link>Connect</Link> */}
        </HStack>
      </Grid>
    </nav>
  );
};

export default Navbar;
