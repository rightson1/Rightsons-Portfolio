import Box from "@mui/material/Box";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Meeting from "../components/Meeting";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Chat from "../components/Chat";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import About from "../components/About";
const Index = () => {
  const { colors } = useGlobalProvider();

  return (
    <Box className="bg-white">
      <Hero />
      <Services />
      <Meeting />
      <Chat />
      <About />
      {/* <Projects /> */}
      {/* <Blogs /> */}
      {/* <div className="h-[1px] w-screem bg-black my-5 opacity-50"></div> */}
      {/* <Contact /> */}
    </Box>
  )

};
Index.homepage = true;

export default Index;
