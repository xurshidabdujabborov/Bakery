import React from 'react'
import { Container } from 'react-bootstrap'
import "./People.css"
import { Swiper, SwiperSlide } from "swiper/react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Grid, Pagination } from "swiper";
import oval from "../../assets/img/Oval.png"
import oval1 from "../../assets/img/Oval (1).png"
import oval2 from "../../assets/img/Oval (2).png"
export default function People() {

    const [value, setValue] = React.useState(2);


    return (

        <div className='People'>

            <Container maxWidth="lg">

                <div className="Peopletext">

                    <p className="text">
                        Testimonials
                    </p>
                    <h2 className="title">
                        People Say About <br />
                        Our Bakery
                    </h2>
                </div>
                <div className="Swipers">




                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{

                            dynamicBullets: true,
                            clickable: true

                        }}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@1.00": {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            "@1.50": {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}

                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <Grid Container >
                            <Grid item md={12}>

                                <SwiperSlide>
                                    <div className="boxcard">
                                        <div className="top">

                                            <div className="topleft">
                                                <Box
                                                    sx={{
                                                        '& > legend': { mt: 2 },
                                                    }}
                                                >

                                                    <Rating
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                </Box>

                                            </div>

                                            <div className="topright">
                                                <img src={oval} alt="" />
                                            </div>
                                        </div>

                                        <h3 className='comment'>
                                            Very, Very <br />
                                            Delicious
                                        </h3>
                                        <span className="com">
                                            "Nothing the copy said could convince <br /> her and so it didn't take long. A small <br /> river named Duden flows by their"
                                        </span>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="boxcard">
                                        <div className="top">

                                            <div className="topleft">
                                                <Box
                                                    sx={{
                                                        '& > legend': { mt: 2 },
                                                    }}
                                                >

                                                    <Rating
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                </Box>

                                            </div>

                                            <div className="topright">
                                                <img src={oval1} alt="" />
                                            </div>
                                        </div>

                                        <h3 className='comment'>
                                            Best Bakery <br />
                                            in Town
                                        </h3>
                                        <span className="com">
                                            "Copy Writers ambushed her, made her <br /> drunk with Longe and Parole. A small river <br /> named Duden flows by their place"
                                        </span>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="boxcard">
                                        <div className="top">

                                            <div className="topleft">
                                                <Box
                                                    sx={{
                                                        '& > legend': { mt: 2 },
                                                    }}
                                                >

                                                    <Rating
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                </Box>

                                            </div>

                                            <div className="topright">
                                                <img src={oval2} alt="" />
                                            </div>
                                        </div>

                                        <h3 className='comment'>
                                            Well <br />
                                            Organized
                                        </h3>
                                        <span className="com">
                                            «And if she hasn't been rewritten, then <br /> they are still using her. A small river <br /> named Duden flows by their place"
                                        </span>
                                    </div>

                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="boxcard">
                                        <div className="top">

                                            <div className="topleft">
                                                <Box
                                                    sx={{
                                                        '& > legend': { mt: 2 },
                                                    }}
                                                >

                                                    <Rating
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                </Box>

                                            </div>

                                            <div className="topright">
                                                <img src={oval} alt="" />
                                            </div>
                                        </div>

                                        <h3 className='comment'>
                                            Very, Very <br />
                                            Delicious
                                        </h3>
                                        <span className="com">
                                            "Nothing the copy said could convince <br /> her and so it didn't take long. A small <br /> river named Duden flows by their"
                                        </span>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="boxcard">
                                        <div className="top">

                                            <div className="topleft">
                                                <Box
                                                    sx={{
                                                        '& > legend': { mt: 2 },
                                                    }}
                                                >

                                                    <Rating
                                                        name="simple-controlled"
                                                        value={value}
                                                        onChange={(event, newValue) => {
                                                            setValue(newValue);
                                                        }}
                                                    />
                                                </Box>

                                            </div>

                                            <div className="topright">
                                                <img src={oval1} alt="" />
                                            </div>
                                        </div>

                                        <h3 className='comment'>
                                            Very, Very <br />
                                            Delicious
                                        </h3>
                                        <span className="com">
                                            "Nothing the copy said could convince <br /> her and so it didn't take long. A small <br /> river named Duden flows by their"
                                        </span>
                                    </div>

                                </SwiperSlide>

                            </Grid>


                        </Grid>

                    </Swiper>
                </div>



            </Container>


        </div>
    )
}
