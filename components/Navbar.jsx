import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';
import Sidebar from './Sidebar';
const pages = ['Home', 'Dashboard'];
function Navbar({ homepage }) {
    const { router } = useRouter()
    const [open, setOpen] = React.useState(false);

    const display = (size) => {
        if (size === 'xs') {
            return {
                xs: 'flex ', md: 'none'
            }
        } else
            return {
                xs: 'none ', md: 'flex'
            }

    }

    const Menu = () => (
        <Box onClick={() => setOpen(true)} sx={{
            display: display('xs'),
            "& > span": {
                height: '4px',
                borderRadius: '10px',
            }
        }}
            className="w-10 h-[26px] flex-col justify-between items-center   cursor-pointer"
        >
            <span className=" w-10 s bg-black "></span>
            <span className="w-[30px]  bg-black "></span>
            <span className=" w-10 h-1 bg-black "></span>
        </Box>
    );

    const Pages = () => {
        return (
            <Box className="justify-center items-center gap-5 " sx={{
                display: display('md'),
                flexGrow: 1,
            }}
            >
                <Link href="/">
                    <Button className='font-jost font-[400] text-[18px] text-black capitalize'>
                        Home
                    </Button>
                </Link>

                <Link href="/chat">
                    <Button className='font-jost font-[400] text-[18px] text-black capitalize'>
                        Rightgpt
                    </Button>
                </Link>
                <Link href="/projects">
                    <Button className='font-jost font-[400] text-[18px] text-black capitalize'>
                        Projects
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button className='font-jost font-[400] text-[18px] text-black capitalize'>
                        Contact
                    </Button>
                </Link>

            </Box>
        )
    }
    return (
        <AppBar className=' shadow-none relative  flex justify-center items-center border-b-[1px] border-black z-[5]'
            sx={{
                backgroundColor: 'white',
                color: 'black',
                height: { xs: "80px", sm: "100px", md: '80px' }
            }}
        >
            <Container maxWidth="xl" className='bg-transparent  z-[5]'

            >
                <Toolbar disableGutters className='justify-between items-center z-[5]'
                >
                    <Link href={"/"}>
                        <Box className="flex items-center gap-2 cursor-pointer">


                            <Box className='flex gap-2 items-center '>
                                <Typography fontFamily={"Alegreya"} className='text-3xl md:text-4xl font-[400]'>
                                    Chari
                                </Typography>
                                <Typography fontFamily={"Alegreya"} className='text-3xl md:text-4xl font-[500]'>
                                    Rightson
                                </Typography>
                            </Box>
                        </Box>

                    </Link>
                    <Pages />
                    <Menu />


                    <Box className="justify-center items-center gap-3" sx={{
                        display: display('md'),
                    }}>
                        <Box className="bg-black p-2 flex items-center justify-center rounded-lg" component="a" href="mailto:chari.rightson@gmail.com" target='="_blank'>
                            <EmailIcon className='text-white' />
                        </Box>
                        <Typography className='text-[18px]  font-jost font-[600]' >
                            chari.rightson@gmail.com
                        </Typography>

                    </Box>
                </Toolbar>
            </Container>
            <Sidebar {...{ open, setOpen }} />
        </AppBar>
    );
}
export default Navbar;