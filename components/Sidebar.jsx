import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useGlobalProvider } from '../utils/themeContext';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { ColoredSocials } from './Socials';
export default function Sidebar({ open, setOpen }) {
    const { colors } = useGlobalProvider()

    const router = useRouter()
    const { pathname } = router;
    React.useEffect(() => {
        setOpen(false)
    }, [pathname])


    const MotionBox = motion(Box)

    const list = () => (
        <Box className="px-2 bg-transparent flex flex-col justify-center items-center "
            sx={{
                py: 2,
                pb: 5,
            }}
            role="presentation"
            onClick={() => setOpen(false)}
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
            <div className="flex gap-4 ">
                <MotionBox component="a" href="mailto:chari.rightson@gmail.com" target='_blank' className=" cursor-pointer p-2 flex items-center justify-center rounded-lg"
                    sx={{
                        bgcolor: "#3e65cf"

                    }}
                    whileHover={{ scale: 1.1 }}
                >
                    <EmailIcon className='text-white' />
                </MotionBox>
                <MotionBox component="a" href="https://github.com/rightson1" target='_blank' sx={{
                    bgcolor: colors.blueish[500]
                }} className=" cursor-pointer p-2 flex items-center justify-center rounded-lg"
                    whileHover={{ scale: 1.1 }}
                >
                    <GitHubIcon className='text-white' />
                </MotionBox>
                <MotionBox component="a" href="https://api.whatsapp.com/send?phone=254778749554" target="_blank" sx={{
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
                            Tole
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
                <AnimatePresence>
                    {
                        open && <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Drawer
                                onClose={() => setOpen(false)}
                                anchor="top"
                                className='bg-[rgba(0,0,0,0.5)]]'
                                open={open}
                            >
                                {list()}
                            </Drawer>
                        </motion.div>

                    }

                </AnimatePresence>



            </React.Fragment>

        </div>
    );
}

