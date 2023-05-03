import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useGlobalProvider } from '../utils/themeContext';
import { Button, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';
export default function Sidebar({ open, setOpen }) {
    const { colors } = useGlobalProvider()

    const router = useRouter()

    const toggleDrawer = (click) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(click);
    };

    const list = () => (
        <Box className="px-2 bg-transparent flex flex-col justify-center items-center"
            sx={{
                py: 2,
                pb: 5,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}

        >
            <Button>
                <img src="/close.png" alt="" className='w-[35px]' />
            </Button>
            <Box className=" flex flex-col justify-center items-center my-5"
            >
                <Link href="/home">
                    <Button className='font-jost font-[400] text-[25px] text-black capitalize'>
                        Home
                    </Button>
                </Link>
                <Link href="/home">
                    <Button className='font-jost font-[400] text-[25px] text-black capitalize'>
                        Projects
                    </Button>
                </Link>
                <Link href="/home">
                    <Button className='font-jost font-[400] text-[25px] text-black capitalize'>
                        About
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button className='font-jost font-[400] text-[25px] text-black capitalize'>
                        Contact
                    </Button>
                </Link>
            </Box>
            <div className="flex gap-4">
                <motion.div className="bg-black cursor-pointer p-2 flex items-center justify-center rounded-lg"
                    whileHover={{ scale: 1.1 }}
                >
                    <EmailIcon className='text-white' />
                </motion.div>
                <motion.div className="bg-black cursor-pointer p-2 flex items-center justify-center rounded-lg"
                    whileHover={{ scale: 1.1 }}
                >
                    <GitHubIcon className='text-white' />
                </motion.div>
                <motion.div className="bg-black cursor-pointer p-2 flex items-center justify-center rounded-lg"
                    whileHover={{ scale: 1.1 }}
                >
                    <WhatsAppIcon className='text-white' />
                </motion.div>
            </div>
            <Link href={"/home"}>
                <Box className='flex gap-2 items-center my-10'>
                    <Typography fontFamily={"faito"} className='text-2xl md:text-3xl font-[500]'>
                        Chari
                    </Typography>
                    <Typography fontFamily={"faito"} className='text-3xl md:text-4xl '>
                        Rightson
                    </Typography>
                </Box>


            </Link>
        </Box>
    );

    return (
        <div>

            <React.Fragment >
                <Drawer
                    anchor="top"
                    open={open}


                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </React.Fragment>

        </div>
    );
}

