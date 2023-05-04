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
    const { pathname } = router;
    React.useEffect(() => {
        setOpen(false)
    }, [pathname])

    const toggleDrawer = (click) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(click);
    };
    const MotionBox = motion(Box)

    const list = () => (
        <Box className="px-2 bg-transparent flex flex-col justify-center items-center "
            sx={{
                py: 2,
                pb: 5,
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}

        >
            <Button className='sm:py-5'>
                <img src="/close.png" alt="" className='w-[35px]' />
            </Button>
            <Box className=" flex flex-col justify-center items-center my-5 sm:gap-5 sm:py-10"

            >
                <Link href="/">
                    <Button className='font-aleg w-[90vw]  font-[300] text-[25px] text-black capitalize'>
                        Home
                    </Button>
                </Link>
                <Link href="/chat">
                    <Button className='font-aleg w-[90vw] font-[300] text-[25px] text-black capitalize'>
                        rightgpt
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button className='font-aleg w-[90vw] font-[300] text-[25px] text-black capitalize'>
                        Contact
                    </Button>
                </Link>
                <Link href="/projects">
                    <Button className='font-aleg w-[90vw] font-[300] text-[25px] text-black capitalize'>
                        Projects
                    </Button>
                </Link>
            </Box>
            <div className="flex gap-4 sm:py-10">
                <MotionBox className=" cursor-pointer p-2 flex items-center justify-center rounded-lg"
                    sx={{
                        bgcolor: "#3e65cf"

                    }}
                    whileHover={{ scale: 1.1 }}
                >
                    <EmailIcon className='text-white' />
                </MotionBox>
                <MotionBox sx={{
                    bgcolor: colors.blueish[500]
                }} className=" cursor-pointer p-2 flex items-center justify-center rounded-lg"
                    whileHover={{ scale: 1.1 }}
                >
                    <GitHubIcon className='text-white' />
                </MotionBox>
                <MotionBox sx={{
                    bgcolor: "#25D366"
                }}
                    className="cursor-pointer p-2 flex items-center justify-center rounded-lg"
                    whileHover={{ scale: 1.1 }}
                >
                    <WhatsAppIcon className='text-white' />
                </MotionBox>
            </div>
            <Link href={"/home"}>
                <Box sx={{
                    flexGrow: {
                        xs: 1,
                        md: 0,
                    }
                }} className="flex items-center gap-2 cursor-pointer py-10">


                    <Box className='hidden sm:flex gap-2 items-center '>
                        <Typography fontFamily={"Alegreya"} className='text-3xl md:text-4xl font-[400]'>
                            Chari
                        </Typography>
                        <Typography fontFamily={"Alegreya"} className='text-3xl md:text-4xl font-[500]'>
                            Rightson
                        </Typography>
                    </Box>
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

