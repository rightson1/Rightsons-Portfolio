import React, { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Typography, Box, Grid, Button } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import { useGlobalProvider } from "../utils/themeContext";
import Link from "next/link";
const Blogs = ({ posts }) => {
    const TypoAnimate = motion(Typography)
    const { colors } = useGlobalProvider();
    const [page, setPage] = useState(1);
    const [blogsPerPage, setBlogsPerPage] = useState(3);
    const totalBlogs = posts?.length;

    useEffect(() => {
        setPage(1);
    }, [posts]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const displayedPosts = posts?.slice(startIndex, endIndex);

    const Single = ({ project }) => {
        const { fields: { title, slug, featuredImage: { fields: { file: { url } } }, description } } = project

        return <Grid item xs={12} md={4} className="cursor-pointer">
            <Link href={`/blog/${slug}`}>
                <Box className="flex justify-center  relative ">
                    <img src={url} alt="hfoods" className="w-full h-[300px] sm:h-[350px] md:h-[250px] object-cover" />
                </Box>
            </Link>
            <Box className="flex flex-col   py-5">
                <Typography variant="h2" className="font-[500]  text-start font-jost text-2xl " sx={{
                    color: colors.blueish[500]

                }}>
                    {title}
                </Typography>

            </Box>
            {/* <Box
                className="absolute top-0 left-0 w-full z-[1] h-full object-cover bg-[rgba(0,0,0,1)]"

            /> */}
        </Grid>

    }
    return <Box className="w-full flex  py-20 md:py-20 flex-col">
        <TypoAnimate variant="h2" className="font-[600]  text-center font-aleg pb-10 blogTitle text-4xl sm:text-[3.1rem]"
            initial={{
                scale: 0,
            }}
            whileInView={{
                scale: 1,
            }}
        >
            Feature Blogs
        </TypoAnimate>


        <Grid container className="py-5  px-5 overflow-hidden" spacing={5}>
            {
                displayedPosts.map((project, index) => (
                    <Single key={index} {...{ project, index }} />
                ))

            }
        </Grid>
        <div className="flex w-full  justify-center">
            <Pagination
                count={Math.ceil(totalBlogs / blogsPerPage)}
                page={page}
                onChange={handlePageChange}
            />
        </div>
    </Box>;
};
const blogs = [
    {
        title: "My Tech Journey",
        description: "A food delivery app that allows users to order food from ",
        img: "/minutes.png"
    },
    {
        title: "Rightson Tole",
        description: "A voting website that allows users to vote for",
        img: "/art.png"
    },
    {
        title: "About School Life",
        description: "A voting website that allows users to vote for.",
        img: "/school.png"
    }

]
export default Blogs;
