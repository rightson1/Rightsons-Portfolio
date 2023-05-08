import React from "react";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PaginationMui from '@mui/material/Pagination';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import { usePagination } from "./Slicer";

const Images = ({ images }) => {
    const [open, setOpen] = React.useState(null);
    const handleClose = () => setOpen(null);
    const { displayedItems, handlePageChange, page, totaltems, itemsPerPage } = usePagination(images, 3)
    const Single = ({ image }) => {
        const { fields: { file: { url } } } = image

        return <Grid item xs={12} md={4} className="">
            <Box className="flex justify-center  relative  cursor-pointer" onClick={() => setOpen(url)}>
                <img src={url} alt="hfoods" className="w-full  h-[200px]" />

            </Box>

        </Grid>

    }
    return <Box className="w-full flex  py-20 md:py-20 flex-col " sx={{
        "& .swiper-pagination-bullet": {
            backgroundColor: "white !important"
        }
    }}>
        <Typography variant="h2" className="font-[600]  text-center font-aleg pb-10 blogTitle text-4xl sm:text-[3.1rem]"
        >
            Project Images
        </Typography>


        <Grid container className="py-5   md:px-5 overflow-hidden " spacing={3}>
            {
                displayedItems.map((image, index) => (
                    <Single key={index} {...{ image, index }} />
                ))

            }
        </Grid>
        <Typography className="text-center my-5 font-aleg flex justify-center hidden md:flex">
            Click Image to view in full screen
        </Typography>
        <Modal
            className="w-full h-full flex justify-center items-center md:p-[100px] z-[6]"
            open={!!open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                bgcolor: 'rgba(0,0,0,0.8)',
                "& .swiper-pagination-bullet": {
                    backgroundColor: "white !important",
                }
            }}
        >
            {/* 
            <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                autoplay={{
                    delay: 3000,

                    disableOnInteraction: false
                }}
                slidesPerView={1}
            // pagination={{ clickable: true }}
            >
                {
                    images.map((item, index) => {
                        const { fields: { file: { url } } } = item;
                        return (
                            <SwiperSlide key={index} className="bg-red h-full w-full flex justify-center items-center bg-red-200">

                 

                            </SwiperSlide>
                        )
                    }

                    )
                }
            </Swiper> */}
            <img src={open} className="w-full h-full object-contain " alt="" />


        </Modal>
        {
            open && <Button onClick={handleClose} className='fixed text-white top-0 right-5 cursor-pointer z-10 ' >
                <CloseIcon fontSize='large' />
            </Button>
        }
        <div className="flex w-full  justify-center">
            <PaginationMui
                count={Math.ceil(totaltems / itemsPerPage)}
                page={page}
                onChange={handlePageChange}
            />
        </div>

    </Box >;

};

export default Images;
