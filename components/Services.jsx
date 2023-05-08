import React, { useEffect, useRef, useState } from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const Services = () => {

    return <Box className="w-full flex flex-col">
        <div className="flex">
            <div

                className="h-[1px] bg-black w-[80vw]"></div>
        </div>

        <Grid container className="py-10 px-5 md:px-20" rowSpacing={5}>
            <Grid item md={3} xs={12} className="flex  " sx={{
                minHeight: { xs: undefined, md: "50vh" },
                justifyContent: { xs: "center", md: "start" }
            }}>
                <Typography className="text-center font-aleg text-4xl sm:text-[3rem] md:text-[3.5rem]  md:text- font-[500]  tracking-[2px] md:leading-[4rem] overflow-hidden" sx={{
                    transform: { xs: "rotate(0deg)", md: "rotate(-90deg)" },
                }}>
                    Services & <br className="hidden md:block" />
                    Education
                </Typography>
            </Grid>
            <Grid item md={3} xs={12} className="flex items-center  flex-col">
                <img src="/code.gif" alt="" className="w-[70px]" />
                <Typography className="text-center font-jost text-2xl text-[700]">
                    Development
                </Typography>
                <div className="flex py-5 flex-col gap-4">
                    {
                        coding.map((item, index) => (
                            <Typography key={index} className="text-center font-jost text-[1rem] text-[500] ">
                                {item}
                            </Typography>
                        ))
                    }
                </div>
            </Grid>
            <Grid item md={3} xs={12} className="flex items-center  flex-col">
                <img src="/play.gif" alt="" className="w-[70px]" />
                <Typography className="text-center font-jost text-2xl text-[700]">
                    Skills
                </Typography>
                <div className="flex py-5 flex-col gap-4">
                    {
                        skills.map((item, index) => (
                            <Typography key={index} className="text-center font-jost text-[1rem] text-[500]">
                                {item}
                            </Typography>
                        ))
                    }
                </div>
            </Grid>
            <Grid item md={3} xs={12} className="flex items-center  flex-col">
                <img src="/education.gif" alt="" className="w-[70px]" />
                <Typography className="text-center font-jost text-2xl text-[700]">
                    School And Certificates
                </Typography>
                <div className="flex py-5 flex-col gap-4">
                    {
                        school.map((item, index) => (
                            <Typography key={index} className="text-center font-jost text-[1rem] text-[500]">
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
    "CMS (Wordpress,Contentful)",
    "Design (Figma)"
]
const skills = [
    "Mobile App Development",
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
