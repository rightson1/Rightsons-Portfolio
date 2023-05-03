import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";

import Socials from "./Socials";
const SingleAbout = ({ title, description }) => {
    return <div className="flex flex-col gap-4  my-5">
        <Typography className="text-4xl md:text-[45px] text-center  text-white font-[600]">
            {title}
        </Typography>
        <Typography className="font-jost text-xl text-center text-white ">
            {description}
        </Typography>

    </div>;
};
const About = () => {
    return <Box className="w-full  bg-black py-10 md:py-20 flex flex-col justify-center items-center gap-8 md:gap-[50px]  px-[10px]">
        <Grid container>
            <Grid item xs={12} md={8}>
                <Typography className="text-4xl md:text-[60px] text-center  blogTitle py-10 font-[600] tracking-widest">
                    About Me
                </Typography>
                <div className="flex flex-col gap-8 opacity-90">
                    <Typography className="font-jost text-xl text-center text-white ">
                        Combining my passion for design and development with my education, I bring creativity and technical skills to crafting digital experiences for web and mobile platforms.
                    </Typography>
                    <Typography className="font-jost text-xl text-center text-white ">
                        Combining my passion for design and development with my education, I bring creativity and technical skills to crafting digital experiences for web and mobile platforms.
                    </Typography>
                    <Typography className="font-jost text-xl text-center text-white ">
                        Combining my passion for design and development with my education, I bring creativity and technical skills to crafting digital experiences for web and mobile platforms.
                    </Typography>
                </div>
                <div className="flex justify-center py-10">
                    <Socials />
                </div>
            </Grid>
            <Grid item xs={12} md={4} className="flex justify-center items-center flex-col">
                <Typography className="text-4xl md:text-[60px] text-center  text-white py-10 font-[600] md:pb-20">
                    About Me
                </Typography>
                <SingleAbout title="256 +" description="Projects Complete" />
                <SingleAbout title="3 +" description="Years of Experience" />
                <SingleAbout title="10 +" description="Technology Skills" />

            </Grid>

        </Grid>

    </Box>;
};

export default About;
