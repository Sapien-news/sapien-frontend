import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ReadCard from "../components/home/ReadCard";
import ReadButton from "../components/buttons/ReadButton";
import KnowMoreButton from "../components/buttons/KnowMoreButton";
import { Box } from "@chakra-ui/react";
import SaveButton from "../components/buttons/SaveButton";
import PostButton from "../components/buttons/PostButton";

const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;
const author = "Author 1";

const Home: NextPage = () => {
  return (
    <Box h="100vh" bg="brand.primaryBG" className={styles.container}>
      <ReadCard heading="Heading" author={author} content={content} />
      <Box p="5">
        <ReadButton />
      </Box>
      <Box p="5">
        <KnowMoreButton />
      </Box>
      <Box p="5">
        <SaveButton />
      </Box>
      <Box p="5">
        <PostButton />
      </Box>
    </Box>
  );
};

export default Home;
