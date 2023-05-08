import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
const MotionBox = motion(Box);
const Hero = () => {
    return <Box className="w-full flex  px-5 md:px-20 py-20 md:py-10">
        <Grid container>
            <Grid item xs={12} md={7} className="flex justify-center items-center  flex-col gap-5  h-auto  sm:gap-10 ">
                <Typography sx={{
                    letterSpacing: {
                        xs: '0.1rem',
                        md: '0.2rem'
                    },
                    lineHeight: {
                        xs: '1.2',
                        md: '3.5rem !important'
                    },
                }} className="font-aleg font-[500] text-[40px] md:text-[50px] xl:text-[75px]  text-center md:text-start">
                    Crafting visually appealing digital experiences
                </Typography>
                <Typography className="font-jost text-xl text-start xl:text-4xl ">
                    Combining my passion for design and development with hardwork, I bring creativity and technical skills to crafting digital experiences for web and mobile platforms.
                </Typography>
                <div className="flex gap-4">
                    <MotionBox component="a" href="mailto:chari.rightson@gmail.com" target='="_blank' className="bg-black cursor-pointer p-3 flex items-center justify-center rounded-lg"
                        whileHover={{ scale: 1.1 }}
                    >
                        <EmailIcon className='text-white' />
                    </MotionBox>
                    <MotionBox component="a" href="https://github.com/rightson1" target='="_blank' className="bg-black cursor-pointer p-3 flex items-center justify-center rounded-lg"
                        whileHover={{ scale: 1.1 }}
                    >
                        <GitHubIcon className='text-white' />
                    </MotionBox>
                    <MotionBox component="a" href="https://api.whatsapp.com/send?phone=254778749554" target='="_blank' className="bg-black cursor-pointer p-3 flex items-center justify-center rounded-lg"
                        whileHover={{ scale: 1.1 }}
                    >
                        <WhatsAppIcon className='text-white' />
                    </MotionBox>
                </div>
            </Grid>
            <Grid item xs={12} md={5} className=" py-10 md:p-20 flex justify-center items-center overflow-hidden">
                <Box component="img" src="hero-img.gif" className=" h-[250px]  md:h-auto md:max-w-[500px]" />
            </Grid>
        </Grid>


    </Box>;
};

export default Hero;
