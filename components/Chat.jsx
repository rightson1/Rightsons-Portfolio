import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import React from "react";
import { useState } from "react";
import { useGlobalProvider } from "../utils/themeContext";
import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";


const Chat = () => {
    const { colors } = useGlobalProvider();
    const [text, setText] = useState(null);
    const [food, setFood] = useState([])
    const [foodRes, setFoodRes] = useState(null)
    const [messages, setMessages] = useState([])
    const [last, setLast] = useState(null)
    const [paddding, setPaddding] = useState(0)
    const [loading, setLoading] = useState(false)

    const submit = (e) => {
        e.preventDefault(0);
        if (!text) return;
        setLoading(true)

        const data = [{ text, own: true }]
        axios.post('/api/nlp', { name: text }).then((res) => {
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
    return <Grid container className="" spacing={3}>

        <Grid item xs={12} md={6} className="">

            <Box >
                <Box className="flex flex-col  h-[70vh] " >
                    {
                        messages.length > 0 ? <Box className="h-full flex flex-col overflow-auto gap-2 pt-2 pb-8 p-3" ref={chatWindowRef}

                        >
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
                        </Box> :
                            <Box className=" flex justify-center flex-col items-center h-3/4">
                                <img src="/hello.gif" alt="" className=" w-full md:w-[300px] overflow-hidden" />
                                <Typography className=" w-full text-center  text-aleg text-xl pb-10" variant="h6" fontFamily="Questrial" >
                                    E,g. What are your skills?
                                </Typography>
                            </Box>

                    }
                    <Box className="flex  gap-2   shadow-lg rounded-md bg-white  py-3 mb-5 px-4 border-[1px] border-[rgba(0,0,0,.1)]" component="form" onSubmit={submit}>
                        <input type="text" autoComplete="off" value={text} onChange={(e) => setText(e.target.value)} placeholder="Ask me anything , e.g what are your skills " id="name" className="rounded-md p-2 outline-none w-full " />
                        <Button type="submit" className="text-white text-xl text">
                            {loading ? <CircularProgress className="text-black" />
                                : "Send"}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} className="flex-col items-center gap-3" sx={
            {
                display: display('ms')
            }
        }>

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
