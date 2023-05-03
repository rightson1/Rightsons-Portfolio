import React, { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography, Box, Grid, Button } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
const Blogs = () => {
    const TypoAnimate = motion(Typography)
    const { colors } = useGlobalProvider();

    const Single = ({ project }) => {
        return <Grid item xs={12} md={4} className="flex justify-center flex-col">
            <Box className="flex justify-center  relative ">
                <Typography className="absolute top-1/2  font-jost blog font-[600] text-[30px] px-10 text-center -translate-y-1/2">
                    {project.description}
                </Typography>
                <img src={project.img} alt="hfoods" className="w-full h-[350px] md:h-[250px]" />
            </Box>
            <Box className="flex flex-col   py-5">
                <Typography variant="h2" className="font-[500]  text-start font-jost text-2xl" sx={{
                    color: colors.blueish[500]

                }}>
                    {project.title}
                </Typography>

            </Box>
        </Grid>
    }
    return <Box className="w-full flex  px-5 py-20 md:py-20 flex-col">
        <TypoAnimate variant="h2" className="font-[600]  text-center font-quicksand pb-10 blogTitle text-4xl md:text-[50px]"
            initial={{
                scale: 0,
            }}
            whileInView={{
                scale: 1,
            }}
        >
            Feature Blogs
        </TypoAnimate>


        <Grid container className="py-5" spacing={5}>
            {
                blogs.map((project, index) => (
                    <Single key={index} {...{ project, index }} />
                ))

            }
        </Grid>


    </Box>;
};
const blogs = [
    {
        title: "My Coding Journey",
        description: "A food delivery app that allows users to order food from ",
        img: "/blog.png"
    },
    {
        title: "Rightson Tole",
        description: "A voting website that allows users to vote for",
        img: "/blog.png"
    },
    {
        title: "About Riara University",
        description: "A voting website that allows users to vote for.",
        img: "/blog.png"
    }

]
export default Blogs;
