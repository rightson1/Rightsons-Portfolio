import { Box, Button, Collapse, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import Meeting from "../components/Meeting"
const Contact = () => {
    return <Box className="py-10 ">
        <div className="flex flex-col px-5 py-5 gap-5">
            <Typography className="text-center md:text-start  font-[500] text-[40px] md:text-4xl  " fontFamily="Alegreya">
                Contact Us
            </Typography>
            <Typography className="text-center md:text-start font-jt text-xl md:text-2xl">
                Home / Contact
            </Typography>
        </div>
        <div className="h-[1px] w-screen bg-black my-5 opacity-30"></div>
        <div className="flex p-5 py-10">
            <Typography className="text-start tracking-wide md:text-start text-4xl md:text-[70px]   font-[400] md:leading-[4rem]  "
                fontFamily="Alegreya"
            >
                Love to hear from you,<br />
                Get in Touch
            </Typography>
        </div>
        <Grid container className="p-5" spacing={5}>
            <Grid item xs={12} md={6} className="flex flex-col items-start gap-2">
                <Typography className="text-start tracking-wide font-quicksand text-xl">
                    Your name *
                </Typography>
                <input type="text" placeholder="Enter Your Name" className="w-full p-4 bg-gray-100 font-quest rounded-md outline-none" />

            </Grid>
            <Grid item xs={12} md={6} className="flex flex-col items-start gap-2">
                <Typography className="text-start tracking-wide font-quicksand text-xl">
                    Your Email *
                </Typography>
                <input type="text" placeholder="Enter Your Email" className="w-full p-4 bg-gray-100 font-quest rounded-md outline-none" />

            </Grid>
            <Grid item xs={12} md={6} className="flex flex-col items-start gap-2 ">
                <Typography className="text-start tracking-wide font-quicksand text-xl">
                    What you are interested?
                </Typography>
                <select type="text" className="w-full p-4 bg-gray-100 font-quest rounded-md outline-none " >
                    <option className="p-2 font-jost ">Web Development</option>
                    <option className="p-2 font-jost ">Mobile Development</option>
                    <option className="p-2 font-jost ">E-commerce</option>
                    <option className="p-2 font-jost ">Mobile Development</option>
                </select>
            </Grid>
            <Grid item xs={12} md={6} className="flex flex-col items-start gap-2 ">
                <Typography className="text-start tracking-wide font-quicksand ">
                    Project budget
                </Typography>
                <select type="text" className="w-full p-4 bg-gray-100 font-quest rounded-md outline-none " >
                    <option className="p-2 font-jost ">1000-2999 ksh</option>
                    <option className="p-2 font-jost ">3000-4900 ksh</option>
                    <option className="p-2 font-jost ">5000-6999 ksh</option>
                    <option className="p-2 font-jost ">7000-10000 ksh</option>

                </select>
            </Grid>
            <Grid item xs={12} md={12} className="flex flex-col items-start gap-2 ">
                <Typography className="text-start tracking-wide font-quicksand text-xl">
                    Message
                </Typography>

                <textarea type="text" placeholder="Let Me Know About Your Project" className="w-full p-4 bg-gray-100 font-quest rounded-md outline-none h-[150px]" />
            </Grid>
            <Grid item xs={12} md={12} className="flex flex-col items-start gap-2 ">
                <Button className="p-4 text-white text-2xl  font-aleg bg-black hover:text-black hover:bg-white duration-300 transition-all">
                    Just Send
                </Button>

            </Grid>

        </Grid>
        <Meeting />
    </Box>
};

export default Contact;
