import React from "react";
import { Avatar, Box, Button, Collapse, Grid, IconButton, Typography } from "@mui/material";
import { ColoredSocials } from "../../components/Socials";
import { client } from "../../utils/client";
import { format } from "timeago.js";
import RichText from "../../components/RichText";
import Title from "../../components/Title";
import Images from "../../components/Images";
import Link from "next/link";
const Blog = ({ post }) => {
    if (!post) return <div>loading...</div>;
    const { title, link, description, coverImage: { fields: { file: { url } } }, content, date, images } = post.fields
    return <Box className="py-10 ">
        <Title title={title} description={"Rightson Tole"} />
        <div className="flex flex-col px-5 py-5 gap-5">
            <Typography className="text-center md:text-start  font-[500] text-[40px] md:text-4xl  " fontFamily="Alegreya">
                Single Project
            </Typography>
            <Typography className="text-center md:text-start font-jost text-xl ">
                Home / Projects/ {title}
            </Typography>
        </div>
        <div className="h-[1px] w-screen bg-black my-5 opacity-30"></div>

        <Grid container className="p-5 py-20" rowSpacing={5}>
            <Grid item xs={12} md={4} className="flex flex-col items-center gap-3">
                <Box sx={{
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: { xs: 'center', md: 'start' },
                    alignItems: { xs: 'center' },
                }} className="flex w-full gap-3 ">
                    <Avatar sx={{ width: 56, height: 56 }}></Avatar>
                    <Typography className="text-center md:text-start font-jt text-xl md:text-2xl">
                        Rightson
                    </Typography>
                </Box>
                <Typography sx={{
                    my: { xs: undefined, md: '50px' },
                    textAlign: { xs: 'center', md: 'end' },
                }} className="text-center md:text-start font-jt text-xl  font-aleg md:text-2xl py-10 opacity-90">
                    {
                        format(date)
                    }
                </Typography>

                <Box sx={{
                    my: { xs: undefined, md: '50px' },
                }}>
                    <Box sx={{
                        transform: { xs: undefined, md: "rotate(90deg)" },
                    }}>
                        <ColoredSocials />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={8} className="w-full" sx={{
                my: { xs: "50px", md: undefined },
            }}>
                <Typography className="text-start tracking-wide md:text-start text-4xl md:text-[50px]   font-[500] md:leading-[4rem]  "
                    fontFamily="Alegreya"
                >
                    {title}
                </Typography>

                <a className="flex items-center  mt-2 text-blue-400 self-start  cursor-pointer" target="_blank" rel="noreferrer" href={link}>
                    <Typography variant="h1" fontFamily="Questrial" className=" text-blue-500 font-jost text-xl font-[500] underline" >
                        {link}
                    </Typography>
                </a>
                <div className="py-10">
                    <img src={url} className="h-[300px] w-full md:h-[400px] md:w-3/4 object-cover" alt="" />
                </div>
                <div className="flex flex-col gap-8 opacity-90">
                    <div className='max-w-none prose my-5'>
                        <div className='max-w-none prose my-5'>
                            <RichText content={content} />
                        </div>
                    </div>
                </div>
                <Images {...{ images }} />
            </Grid>


        </Grid>
        <div className="h-[1px] w-screen bg-black my-5 opacity-30"></div>
    </Box>
};

export const getStaticProps = async ({ params }) => {
    const cfClient = client

    const { slug } = params
    const response = await cfClient.getEntries({
        content_type: 'projects',
        'fields.slug': slug
    })

    if (!response?.items?.length > 0) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            post: response?.items?.[0],
            revalidate: 60
        },
        revalidate: 60
    }
}

export const getStaticPaths = async () => {
    const response = await client.getEntries({ content_type: 'projects' })
    const paths = response.items.map(item => ({
        params: { slug: item.fields.slug }
    }))

    return {
        paths,
        fallback: true
    }
}

export default Blog;
