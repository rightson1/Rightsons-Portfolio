import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
const Services = () => {
    const [width, setWidth] = useState(10);
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const newWidth = 16 + scrollTop / 10;
        setWidth(newWidth);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return <Box className="w-full flex flex-col">
        <div className="flex">
            <motion.div
                animate={{ width: `${width}vw` }}
                className="h-[1px] bg-black"></motion.div>
        </div>

        <Grid container className="py-10 px-5 md:px-20" rowSpacing={5}>
            <Grid item md={3} xs={12} className="flex justify-center md:justify-start   md:min-h-[50vh] ">
                <Typography className="text-center font-jost text-4xl md:text-[60px]  font-[500] md:-rotate-[90deg]  tracking-[2px] md:leading-[4rem]">
                    Services I <br className="hidden md:block" />
                    Provide
                </Typography>
            </Grid>
            <Grid item md={3} xs={12} className="flex items-center  flex-col">
                <img src="/code.gif" alt="" className="w-[70px]" />
                <Typography className="text-center font-jost text-[30px] text-[700]">
                    Development
                </Typography>
                <div className="flex py-5 flex-col gap-4">
                    {
                        coding.map((item, index) => (
                            <Typography key={index} className="text-center font-jost text-[16px] text-[500]">
                                {item}
                            </Typography>
                        ))
                    }
                </div>
            </Grid>
            <Grid item md={3} xs={12} className="flex items-center  flex-col">
                <img src="/play.gif" alt="" className="w-[70px]" />
                <Typography className="text-center font-jost text-[30px] text-[700]">
                    Skills
                </Typography>
                <div className="flex py-5 flex-col gap-4">
                    {
                        skills.map((item, index) => (
                            <Typography key={index} className="text-center font-jost text-[16px] text-[500]">
                                {item}
                            </Typography>
                        ))
                    }
                </div>
            </Grid>
            <Grid item md={3} xs={12} className="flex items-center  flex-col">
                <img src="/education.gif" alt="" className="w-[70px]" />
                <Typography className="text-center font-jost text-[30px] text-[700]">
                    School And Certificates
                </Typography>
                <div className="flex py-5 flex-col gap-4">
                    {
                        school.map((item, index) => (
                            <Typography key={index} className="text-center font-jost text-[16px] text-[500]">
                                {item}
                            </Typography>
                        ))
                    }
                </div>
            </Grid>
        </Grid>
    </Box>;
};
const coding = [
    "Frontend (React js)",
    "Backend (Node js,PHP)",
    "Database (MongoDB,Firebase)",
    "Full Stack (Next js)",
    "CMS (Wordpress,contentful)",
]
const skills = [
    "Mobile Development (PWA)",
    "Web Development",
    "UI/UX Design",
    "Ecommerce",
]
const school = [
    "FreeCodeCamp",
    "Chavakali High School",
    "Riara University",
]
export default Services;
