import React, { useEffect, useRef, useState } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
const Fun = () => {
    return <Grid item xs={12} md={6}>
        {/* <img src="/person.gif" alt="" className="h-[250px]" />
            <Box className="flex items-center  flex-col h-[50vh]">
                <Typography className="text-center font-jost text-[30px] text-[700]">
                    Sample Question
                </Typography>
                <div className="flex py-5 flex-col gap-4">
                    {
                        sample.map((item, index) => (
                            <Typography className="text-center font-jost text-[16px] text-[500]" key={index}>
                                {item}
                            </Typography>
                        ))
                    }
                </div>

            </Box> */}

        <Box
            sx={{
                "& .swiper-pagination-bullet": {
                    backgroundColor: "white !important"
                }
            }}>   <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                slidesPerView={1}
            >
                {
                    items.map((item, index) => {
                        const { title, img } = item
                        return (
                            <SwiperSlide key={index}>

                                <Box

                                    className="h-[70vh]  rounded-md flex flex-col justify-center items-center gap-8 text-white relative  z-10 ">
                                    <div className="flex flex-col gap-5 p-10">
                                        <Typography fontFamily="Questrial" variant="h1" className="uppercase" textAlign="center"
                                            fontSize={{
                                                xs: '2.5rem',
                                                md: '3.5rem'
                                            }}>{
                                                title
                                            }</Typography>

                                    </div>
                                    <Box
                                        component="img"

                                        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] rounded-md"
                                        src={img}
                                    />
                                    <Box
                                        className="absolute top-0 left-0 w-full z-[-1] h-full object-cover bg-[rgba(0,0,0,0.8)] rounded-md"

                                    />

                                </Box>

                            </SwiperSlide>
                        )
                    }

                    )
                }
            </Swiper>
        </Box>
    </Grid>
};
const items = [
    {
        img: "/die.png",
        title: "Veronika Dicides To Die"
    },
    {
        img: "/minutes.png",
        title: "11 Minutes"
    },
    {
        img: "/art.png",
        title: "Art Of Seduction"
    },

]

export default Fun;
