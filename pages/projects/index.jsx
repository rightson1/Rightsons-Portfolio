import React, { useEffect, useState } from "react";
import { Typography, Box, Grid, Button } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import { useGlobalProvider } from "../../utils/themeContext";
import Link from "next/link";
import About from "../../components/About"
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { client } from "../../utils/client"
const Projects = ({ posts }) => {
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

            <Box className="flex justify-center  relative ">
                <img src={url} alt="hfoods" className="w-full h-[300px] sm:h-[350px] md:h-[250px] object-cover" />
                <Box
                    className="absolute top-0 left-0 w-full z-[1] h-full object-cover bg-[rgba(0,0,0,.5)]"

                />
            </Box>
            <Box className="flex  items-center justify-between   py-5 ">
                <Typography variant="h2" className="font-[500]  text-start font-jost text-2xl " sx={{
                    color: colors.blueish[500]

                }}>
                    {title}
                </Typography>
                <Link href={`/projects/${slug}`}>
                    <a className="flex items-center justify-center self-start">
                        <Typography variant="h1" fontFamily="Questrial" className=" text-black font-jost text-xl" >
                            Read More
                        </Typography>
                        <ArrowRightAltIcon className="text-black text-3xl" />
                    </a>
                </Link>
            </Box>

        </Grid>

    }
    return <Box className="py-10 ">
        <div className="flex flex-col px-5 py-5 gap-5">
            <Typography className="text-center md:text-start  font-[500] text-[40px] md:text-4xl  " fontFamily="Alegreya">
                My Projects
            </Typography>
            <Typography className="text-center md:text-start font-jt text-xl md:text-2xl">
                Home / Projects
            </Typography>
        </div>
        <div className="h-[1px] w-screen bg-black my-5 opacity-30"></div>
        <div className="flex p-5 py-10">
            <Typography className="text-start tracking-wide md:text-start text-4xl md:text-[70px]   font-[400] md:leading-[4rem]  "
                fontFamily="Alegreya"
            >
                let’s check out extraordinary<br />
                work by me
            </Typography>

        </div>

        <Grid container className="py-5  px-5 overflow-hidden" spacing={5}>
            {
                displayedPosts.map((project, index) => (
                    <Single key={index} {...{ project, index }} />
                ))

            }
        </Grid>
        <div className="flex w-full  justify-center py-10">
            <Pagination
                count={Math.ceil(totalBlogs / blogsPerPage)}
                page={page}
                onChange={handlePageChange}
            />
        </div>
        <About />
    </Box>
};
export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'projects' })

    return {
        props: {
            posts: response.items,
            revalidate: 60
        },
        revalidate: 60
    }
}

export default Projects;
