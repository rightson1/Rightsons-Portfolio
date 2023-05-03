import React, { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography, Box, Grid, Button } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
const Projects = () => {
    const [fontSize, setFontSize] = useState(16); // initial font size
    const { colors } = useGlobalProvider()
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        setFontSize(scrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const Single = ({ project }) => {

        const variants = {
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
        };
        return <Grid item xs={12} md={4} className="flex justify-center flex-col">

            <Box className="flex justify-center ">
                <img src={project.img} alt="hfoods" className="w-full h-[280px]" />
            </Box>
            <Box className="flex flex-col   py-5">
                <Typography variant="h2" className="font-[600]  text-start font-quicksand md:text-start text-2xl md:text-[30px]" sx={{
                    color: colors.blueish[500]

                }}>
                    {project.title}
                </Typography>
                <Typography variant="h2" className="font-[400]  text-center font-quicksand md:text-start text-xl md:text-[20px]" sx={{
                    color: colors.grey[500]

                }}>
                    {project.description}
                </Typography>
            </Box>
        </Grid>
    }
    return <Box className="w-full flex  px-5 py-20 md:py-20 flex-col">
        <Grid container>
            <Grid item xs={12} md={6} className="flex flex-col justify-center">
                <Typography variant="h2" className="font-[600]  text-center font-quicksand md:text-start text-4xl md:text-[50px]" sx={{
                    color: colors.blueish[500]

                }}>
                    Feature Projects
                </Typography>
            </Grid>
            <Grid item xs={12} md={6} className="flex  justify-end md:justify-center px-4">
                <Button variant="h2" className="font-[400]  underline  text-jost text-xl capitalize md:self-end" >
                    View All
                </Button>
            </Grid>

        </Grid>
        <Grid container className="py-5" spacing={5}>
            {
                projects.map((project, index) => (
                    <Single key={index} {...{ project, index }} />
                ))

            }
        </Grid>


    </Box>;
};
const projects = [
    {
        title: "H FOODS",
        description: "H Foods is a food delivery app that allows users to order food from their favorite restaurants and have it delivered to their doorsteps.",
        img: "/hfoods.png"
    },
    {
        title: "Voting Website",
        description: "A voting website that allows users to vote for their favorite candidates and view the results in real time.",
        img: "/voting.png"
    }

]
export default Projects;
