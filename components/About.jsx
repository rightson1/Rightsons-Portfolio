import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
                <Typography className="text-4xl sm:text-[3rem] md:text-[3.8rem] xl:text-[5rem] text-center  blogTitle py-10 font-[600] tracking-[10px] font-aleg " sx={{ wordSpacing: "25px " }}>
                    About Me
                </Typography>
                <div className="flex flex-col gap-8 opacity-90">
                    <Typography className="font-jost text-xl text-center text-white ">
                        Kenyan web developer living in Nairobi, Am passionate about using technology to make a positive impact on the world. With expertise in Mongo db, React, Node.js, Next.js, Firebase, WordPress, and PHP, I am committed to developing innovative solutions that meet the needs of today&aposs ever-changing digital landscape.
                    </Typography>
                    <Typography className="font-jost text-xl text-center text-white ">
                        Am in second-year  at Riara University, I am constantly seeking out new challenges and opportunities to grow my skills as a developer.
                    </Typography>
                    <Typography className="font-jost text-xl text-center text-white ">
                        Beyond my technical skills, I am an avid reader, music lover,
                        and 3D modeling enthusiast.  With a passion for innovation
                        and a commitment to excellence, I am excited to continue my
                        journey as a web developer and make a positive impact on the world.
                    </Typography>

                </div>
                <div className="flex justify-center py-10">
                    <Socials />
                </div>
            </Grid>
            <Grid item xs={12} md={4} className="flex justify-center items-center flex-col">
                <Typography className="text-4xl sm:text-[3rem] md:text-[3.8rem] xl:text-[5rem] text-center font-aleg text-white py-10 font-[600] md:pb-20">
                    About Me
                </Typography>
                <SingleAbout title="10 +" description="Projects Complete" />
                <SingleAbout title="3 +" description="Years of Experience" />
                <SingleAbout title="10 +" description="Technology Skills" />

            </Grid>

        </Grid>

    </Box>;
};

export default About;
