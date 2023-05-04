import Box from "@mui/material/Box";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Meeting from "../components/Meeting";
import Chat from "../components/Chat";
import About from "../components/About";
import Blogs from "../components/Blogs"
import { client } from "../utils/client";
const Index = ({ posts }) => {
  const { colors } = useGlobalProvider();

  return (
    <Box className="bg-white">
      <Hero />
      <Services />
      <Meeting />
      <Blogs {...{ posts }} />
      {/* <Chat /> */}
      <About />
    </Box>
  )

};
export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'blogs' })

  return {
    props: {
      posts: response.items,
      revalidate: 60
    },
    revalidate: 60
  }
}
export default Index;
