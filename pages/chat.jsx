import { Box, Button, Collapse, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Meeting from "../components/Meeting"
import Chat from "../components/Chat"
const RightBPT = () => {
    return <Box className="py-10 bg-white">
        <div className="flex flex-col px-5 py-5 gap-5">
            <Typography className="text-center md:text-start  font-[500] text-[40px] md:text-4xl  " fontFamily="Alegreya">
                RightGpt
            </Typography>
            <Typography className="text-center md:text-start font-jt text-xl md:text-2xl">
                Home / Rightgpt
            </Typography>
        </div>
        <div className="h-[1px] w-screen bg-black my-5 opacity-30"></div>
        <div className="flex p-5 py-10">
            <Typography className="text-start tracking-wide md:text-start text-4xl md:text-[60px]   font-[400] md:leading-[4rem]  "
                fontFamily="Alegreya"
            >
                What do you want to know,<br />
                Ask you question
            </Typography>
        </div>
        <div className="h-[1px] w-screen bg-black my-5 opacity-30"></div>
        <Chat />

        <Meeting />
    </Box>
};

export default RightBPT;
