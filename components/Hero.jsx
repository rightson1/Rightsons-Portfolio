import React, { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography, Box, Grid } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
const MotionBox = motion(Box);
const Hero = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                scale: 1,

                filter: 'blur(0)',
                transition: { duration: 1 },
            });
        } else {
            controls.start({
                opacity: 0.5,
                scale: 0.8,
                filter: 'blur(5px)',
                transition: { duration: 1 },
            });
        }
    }, [controls, inView]);

    return <MotionBox ref={ref} animate={controls} className="w-full flex  px-5 md:px-20 py-20 md:py-10">
        <Grid container>
            <Grid item xs={12} md={7} className="flex justify-center items-center  flex-col gap-5  h-auto">
                <Typography sx={{
                    letterSpacing: {
                        xs: '0.1rem',
                        md: '0.2rem'
                    },
                    lineHeight: {
                        xs: '1.2',
                        md: '3.5rem !important'
                    },
                }} className="font-jost font-[500] text-4xl md:text-[50px]  text-center md:text-start">
                    Crafting visually appealing digital experiences
                </Typography>
                <Typography className="font-jost text-xl text-start">
                    Combining my passion for design and development with my education, I bring creativity and technical skills to crafting digital experiences for web and mobile platforms.
                </Typography>
                <div className="flex gap-4">
                    <motion.div className="bg-black cursor-pointer p-3 flex items-center justify-center rounded-lg"
                        whileHover={{ scale: 1.1 }}
                    >
                        <EmailIcon className='text-white' />
                    </motion.div>
                    <motion.div className="bg-black cursor-pointer p-3 flex items-center justify-center rounded-lg"
                        whileHover={{ scale: 1.1 }}
                    >
                        <GitHubIcon className='text-white' />
                    </motion.div>
                    <motion.div className="bg-black cursor-pointer p-3 flex items-center justify-center rounded-lg"
                        whileHover={{ scale: 1.1 }}
                    >
                        <WhatsAppIcon className='text-white' />
                    </motion.div>
                </div>
            </Grid>
            <Grid item xs={12} md={5} className=" py-10 md:p-20 flex justify-center items-center overflow-hidden">
                <Box component="img" src="hero-img.gif" className=" h-[250px]  md:h-auto md:max-w-[500px]" />
            </Grid>
        </Grid>


    </MotionBox>;
};

export default Hero;