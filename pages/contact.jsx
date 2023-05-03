import { Box, Button, Collapse, Grid, IconButton, Typography } from "@mui/material";

import React from "react";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { useGlobalProvider } from "../utils/themeContext";
import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
const contact = () => {
    const { colors } = useGlobalProvider();

    return <Box className="py-10 ">
        <div className="flex flex-col px-5 py-5 gap-5">
            <Typography className="text-center md:text-start font-quicksand font-[500] text-[40px] md:text-4xl ">
                Contact Us
            </Typography>
            <Typography className="text-center md:text-start font-jost text-xl md:text-2xl">
                Home / Contact
            </Typography>
        </div>
        <div className="h-[1px] w-screen bg-black my-5 opacity-30"></div>
        <div className="flex p-5 py-10">
            <Typography className="text-start tracking-wide md:text-start font-quicksand text-4xl md:text-[70px]  font-[400] md:leading-[4rem]">
                Love to hear from you,<br />
                Get in Touch
            </Typography>
        </div>
        <Grid container className="p-5" spacing={5}>
            <Grid item xs={12} md={6} className="flex flex-col items-start gap-2">
                <Typography className="text-start tracking-wide font-quicksand text-xl">
                    Your name
                </Typography>
                <input type="text" placeholder="Enter Your Name" className="w-full p-4 bg-gray-100 font-quest rounded-md outline-none" />

            </Grid>
            <Grid item xs={12} md={6} className="flex flex-col items-start gap-2">
                <Typography className="text-start tracking-wide font-quicksand text-xl">
                    Your Email
                </Typography>
                <input type="text" placeholder="Enter Your Email" className="w-full p-4 bg-gray-100 font-quest rounded-md outline-none" />

            </Grid>
            <Grid item xs={12} md={6} className="flex flex-col items-start gap-2 ">
                <Typography className="text-start tracking-wide font-quicksand text-xl">
                    What you are interested? *
                </Typography>
                <select type="text" className="w-full p-4 bg-gray-100 font-quest rounded-md outline-none " >
                    <option className="p-2 font-jost text-xl">Web Development</option>
                    <option className="p-2 font-jost text-xl">Mobile Development</option>
                    <option className="p-2 font-jost text-xl">E-commerce</option>
                    <option className="p-2 font-jost text-xl">Mobile Development</option>
                </select>
            </Grid>
            <Grid item xs={12} md={6} className="flex flex-col items-start gap-2 ">
                <Typography className="text-start tracking-wide font-quicksand text-xl">
                    Project budget *
                </Typography>
                <select type="text" className="w-full p-4 bg-gray-100 font-quest rounded-md outline-none " >
                    <option className="p-2 font-jost text-xl">1000-2999 ksh</option>
                    <option className="p-2 font-jost text-xl">3000-4900 ksh</option>
                    <option className="p-2 font-jost text-xl">5000-6999 ksh</option>
                    <option className="p-2 font-jost text-xl">7000-10000 ksh</option>

                </select>
            </Grid>
            <Grid item xs={12} md={12} className="flex flex-col items-start gap-2 ">
                <Typography className="text-start tracking-wide font-quicksand text-xl">
                    Message
                </Typography>

                <textarea type="text" placeholder="Let Me Know About Your Project" className="w-full p-4 bg-gray-100 font-quest rounded-md outline-none h-[150px]" />
            </Grid>
            <Grid item xs={12} md={12} className="flex flex-col items-start gap-2 ">
                <Button className="p-4 text-white text-2xl  font-quicksand bg-black hover:text-black hover:bg-white duration-300 transition-all">
                    Just Send
                </Button>

            </Grid>

        </Grid>
    </Box>
};

export default contact;
