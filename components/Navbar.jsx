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
                <Link href="/home">
                    <Button className='font-jost font-[400] text-[18px] text-black capitalize'>
                        Home
                    </Button>
                </Link>
                <Link href="/home">
                    <Button className='font-jost font-[400] text-[18px] text-black capitalize'>
                        Projects
                    </Button>
                </Link>
                <Link href="/home">
                    <Button className='font-jost font-[400] text-[18px] text-black capitalize'>
                        About
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
        <AppBar position="static" className=' shadow-none relative h-[80px] flex justify-center items-center border-b-[1px] border-black'
            sx={{
                backgroundColor: 'white',
                color: 'black',
            }}
        >
            <Container maxWidth="xl" className='bg-transparent '

            >
                <Toolbar disableGutters className='justify-between items-center'
                >
                    <Link href={"/"}>
                        <Box sx={{
                            flexGrow: {
                                xs: 1,
                                md: 0,
                            }
                        }} className="flex items-center gap-2 cursor-pointer">

                            <Box component={"img"} src="/logo.png" className=' h-10'
                            />
                            <Box className='flex gap-2 items-center mt-2'>
                                <Typography fontFamily={"faito"} className='text-2xl md:text-3xl font-[500]'>
                                    Chari
                                </Typography>
                                <Typography fontFamily={"faito"} className='text-3xl md:text-4xl '>
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
                        <Box className="bg-black p-2 flex items-center justify-center rounded-lg">
                            <EmailIcon className='text-white' />
                        </Box>
                        <Typography className='text-[18px]  font-jost font-[600]' >
                            chari.rightson@gamil.com
                        </Typography>

                    </Box>
                </Toolbar>
            </Container>
            <Sidebar {...{ open, setOpen }} />
        </AppBar>
    );
}
export default Navbar;