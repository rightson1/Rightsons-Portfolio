import React, { useEffect, useRef, useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import Socials from "./Socials";
const Meeting = () => {
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
    return <Box className="w-full  bg-black py-20 flex flex-col justify-center items-center gap-8 md:gap-[50px]  px-[10px]">
        <Typography className="font-aleg font-[500] text-4xl sm:text-[3rem] md:text-[4.5rem] xl:text-[5rem] text-center  text-white md:leading-[5rem] ">
            Let’s set a <span className="text"> meeting </span>
            with calendly
        </Typography>
        <Typography className="font-jost text-2xl md:text-3xl xl:text-[3rem] text-center md:text-start text-white ">
            You are one step away from growing your business!
        </Typography>
        <div className="flex col flex-col md:flex-row items-center gap-2 md:gap-8">
            <Button target="_blank" href="https://calendly.com/rightson-tole/30min" className="text-black rouded-lg p-2 px-3 md:py-3 md:px-4 font-jost text-xl bg-white hover:bg-black hover:text-white ">
                Click For Schedule
            </Button>
            <Typography className="font-outfit font-[500] text-4xl  my-5 text-center  text-white">
                Or
            </Typography>
            <Socials />
        </div>

    </Box>;
};

export default Meeting;
