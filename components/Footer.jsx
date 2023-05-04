import { Box, Button, Collapse, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Link from 'next/link';
const Footer = () => {
    const { colors } = useGlobalProvider();

    return <Box className="py-10 ">
        <Grid container className="p-5" spacing={5}>
            <Grid item xs={12} md={6} className="flex flex-col justify-start md:items-start items-center gap-2">



                <Box className="flex items-center gap-2 cursor-pointer w-full  justify-center md:justify-start">


                    <Box className='flex gap-2 items-center'>
                        <Typography fontFamily={"Alegreya"} className='text-3xl  md:text-4xl  font-[400]'>
                            Chari
                        </Typography>
                        <Typography fontFamily={"Alegreya"} className='text-3xl  md:text-4xl  font-[500]'>
                            Rightson
                        </Typography>
                    </Box>
                </Box>


                <Typography className="font-jost text-[19px] text-center md:text-start opacity-70 ">
                    Combining my passion for design and development with my education, I bring creativity and technical skills to crafting digital experiences for web and mobile platforms.
                </Typography>
            </Grid>
            <Grid item xs={12} md={3} className="flex flex-col justify-center items-center md:items-start gap-2">
                <Typography className="font-quicksand text-[30px] text-start font-[600]">
                    Important Links
                </Typography>
                <Link href="/home">
                    <Button className='font-jost font-[400] opacity-70 text-[18px] text-black capitalize'>
                        Home
                    </Button>
                </Link>
                <Link href="/home">
                    <Button className='font-jost font-[400] opacity-70 text-[18px] text-black capitalize'>
                        Projects
                    </Button>
                </Link>
                <Link href="/home">
                    <Button className='font-jost font-[400] opacity-70 text-[18px] text-black capitalize'>
                        About
                    </Button>
                </Link>
                <Link href="/home">
                    <Button className='font-jost font-[400] opacity-70 text-[18px] text-black capitalize'>
                        Contact
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} md={3} className="flex flex-col justify-start items-center md:items-start gap-2">
                <Typography className="font-quicksand text-[30px] text-start font-[600]">
                    Information
                </Typography>
                <Typography className="font-jost text-[19px] text-center opacity-70  md:text-start">
                    Mixing simplicity and elegance to create user-centric designs.
                </Typography>

            </Grid>

        </Grid>
        <div className="h-[1px] w-screem bg-black my-5 opacity-50"></div>
        <div className="flex justify-center items-center">
            <Typography className="font-jost text-[19px] text-start opacity-70">
                © 2023 Chari Rightson. All rights reserved.
            </Typography>
        </div>
    </Box >
};

export default Footer;
