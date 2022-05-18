import { Flex, Grid } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Flex flexDirection={"column"}>
        <Navbar />
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
