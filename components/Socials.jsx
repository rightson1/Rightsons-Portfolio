import React, { useEffect } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { IoLogoWhatsapp } from "react-icons/io";
import GitHubIcon from '@mui/icons-material/GitHub';
const Socials = () => {

    return <div className="flex gap-4">
        <motion.div className="bg-white w-[60px] h-[60px] cursor-pointer  flex items-center justify-center rounded-lg"
            whileHover={{ scale: 1.1 }}
        >
            <EmailIcon className='text-black' />
        </motion.div>
        <motion.div className="bg-white w-[60px] h-[60px] cursor-pointer  flex items-center justify-center rounded-lg"
            whileHover={{ scale: 1.1 }}
        >
            <GitHubIcon className='text-black' />
        </motion.div>
        <motion.div className="bg-white w-[60px] h-[60px] cursor-pointer  flex items-center justify-center rounded-lg"
            whileHover={{ scale: 1.1 }}
        >
            <IoLogoWhatsapp className='text-black text-xl' />
        </motion.div>
    </div>

};

export default Socials;
