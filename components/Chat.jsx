import { Box, Button, Collapse, Grid, IconButton, Typography } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React from "react";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { useGlobalProvider } from "../utils/themeContext";
import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { motion } from "framer-motion";


const Chat = () => {
    const { colors } = useGlobalProvider();
    const [text, setText] = useState(null);
    const [food, setFood] = useState([])
    const [foodRes, setFoodRes] = useState(null)
    const [messages, setMessages] = useState([])
    const [last, setLast] = useState(null)
    const [mic, setMic] = useState(false)
    const [loading, setLoading] = useState(false)

    const submit = (e) => {
        setLoading(true)
        e.preventDefault(0);
        const data = [{ text, own: true }]
        axios.post('/api/nlp', { name: text || transcript }).then((res) => {
            data.push({ text: res.data.answer, own: false, doubts: res.data.doubts })
            setLast(res.data.answer)
            setMessages([...messages, ...data]);
            setLoading(false)
        }).catch((e) => {
            console.log(e)
            setLoading(false)
        })
        setText(null)
        e.target.reset();
    }
    const chatWindowRef = useRef();
    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages])


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
    const MotionBox = motion(Box)
    return <Grid container className="p-5 " spacing={3}>
        <Grid item xs={12} md={6} className=" gap-2 items-center  "
            display={display('md')}

        >

            {/* <Box className="flex justify-center md:justify-center items-center">
                <Typography className="text-center font-jost text-4xl md:text-[60px]  font-[500] md:-rotate-[90deg]  tracking-[2px] md:leading-[4rem]">
                    Talk To <br className="hidden md:block" />
                    Rightson
                </Typography>
            </Box> */}
            <img src="/person.gif" alt="" className="h-[250px]" />
            <Box className="flex items-center  flex-col h-[50vh]">
                <Typography className="text-center font-jost text-[30px] text-[700]">
                    Sample Question
                </Typography>
                <div className="flex py-5 flex-col gap-4">
                    {
                        sample.map((item, index) => (
                            <Typography className="text-center font-jost text-[16px] text-[500]" key={index}>
                                {item}
                            </Typography>
                        ))
                    }
                </div>

            </Box>

        </Grid>


        <Grid item xs={12} md={6}>

            {/* <Typography className="font-outfit font-[500] text-4xl md:text-[50px]  text-center md:text-start  text-black gap-4">
                Let’s Have a <span className="te"> Chat </span>
            </Typography> */}
            <Box >
                <Box className="flex flex-col  h-[70vh] p-1 " >
                    {
                        messages.length > 0 ? <div className="h-full flex flex-col overflow-auto gap-2" ref={chatWindowRef}>
                            {
                                messages.map((item, index) => {
                                    return <Box key={index} sx={{
                                        alignSelf: item.own ? "end" : "start",
                                        bgcolor: "white",
                                    }}

                                        className={`flex p-5 shadow-lg   w-[70%] flex-col ${item.own ? "rounded-tl-lg rounded-bl-lg  rounded-br-lg" : "rounded-tr-lg rounded-bl-lg rounded-br-lg"}`}>
                                        <Typography>
                                            {item.text}
                                        </Typography>

                                    </Box>
                                })
                            }
                        </div> :
                            <Box className="h-full flex justify-center flex-col items-center ">
                                <img src="/hello.gif" alt="" className="w-[300px] w-full " />
                                <Typography className=" w-full text-center " variant="h6" fontFamily="Questrial" >
                                    Wanna know anything about me? Ask RightGPT
                                </Typography>
                            </Box>

                    }
                    <Box className="flex  gap-2  mt-10 shadow-lg p-2 rounded-md" component="form" onSubmit={submit}>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask me anything , e.g what are your skills " id="name" className="rounded-md p-2 outline-none w-full " />
                        <Button type="submit" className="text-white text-xl text">
                            {loading ? '....' : "Send"}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Grid>
    </Grid>
};
const sample = [
    "What are your skills?",
    "Which year are you?",
    "Are you a dating?",
    "How much do you charge?",
    "etc...."

]
export default Chat;
