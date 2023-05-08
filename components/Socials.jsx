import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { IoLogoWhatsapp } from "react-icons/io";
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from "@mui/material/Box"
import { useGlobalProvider } from "../utils/themeContext";
const MotionBox = motion(Box)
const Socials = () => {

    return <div className="flex gap-4">
        <MotionBox component="a" href="mailto:chari.rightson@gmail.com" target='_blank' className="bg-white w-[60px] h-[60px] cursor-pointer  flex items-center justify-center rounded-lg"
            whileHover={{ scale: 1.1 }}
        >
            <EmailIcon className='text-black' />
        </MotionBox>
        <MotionBox component="a" href="https://github.com/rightson1" target='_blank' className="bg-white w-[60px] h-[60px] cursor-pointer  flex items-center justify-center rounded-lg"
            whileHover={{ scale: 1.1 }}
        >
            <GitHubIcon className='text-black' />
        </MotionBox>
        <MotionBox component="a" href="https://api.whatsapp.com/send?phone=254791568168" target="_blank" className="bg-white w-[60px] h-[60px] cursor-pointer  flex items-center justify-center rounded-lg"
            whileHover={{ scale: 1.1 }}
        >
            <IoLogoWhatsapp className='text-black text-xl' />
        </MotionBox>
    </div>

};
export const ColoredSocials = () => {
    const { colors } = useGlobalProvider();
    return <div className="flex gap-4 sm:py-10">
        <MotionBox className=" cursor-pointer p-2 flex items-center justify-center rounded-lg"
            sx={{
                bgcolor: "#3e65cf"

            }} component="a" href="mailto:chari.rightson@gmail.com" target='_blank'
            whileHover={{ scale: 1.1 }}
        >
            <EmailIcon className='text-white' />
        </MotionBox>
        <MotionBox sx={{
            bgcolor: colors.blueish[500]
        }} className=" cursor-pointer p-2 flex items-center justify-center rounded-lg"
            whileHover={{ scale: 1.1 }}
            component="a" href="https://github.com/rightson1" target='_blank'
        >
            <GitHubIcon className='text-white' />
        </MotionBox>
        <MotionBox sx={{
            bgcolor: "#25D366"
        }} component="a" href="https://api.whatsapp.com/send?phone=254778749554" target="_blank"
            className="cursor-pointer p-2 flex items-center justify-center rounded-lg"
            whileHover={{ scale: 1.1 }}
        >
            <WhatsAppIcon className='text-white' />
        </MotionBox>
    </div>

}

export default Socials;
