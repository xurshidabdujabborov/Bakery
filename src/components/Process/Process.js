import { CardContent, Container, Grid } from '@mui/material'
import React from 'react'
import "./Process.css"
import Card from '@mui/material/Card';


import AccessTimeIcon from '@mui/icons-material/AccessTime';

import bgpost from "../../assets/img/Bitmapbig.png"
import bgbred from "../../assets/img/Bitmap (bre4).png"
import bgbred1 from "../../assets/img/Bitmap (bre2).png"
import bgbred2 from "../../assets/img/Bitmap (bre3).png"
import bgbred3 from "../../assets/img/Bitmap (bre).png"
import Button from '@mui/material/Button';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Process() {
    return (
        <div className='Process'>
            <Container maxWidth={"lg"}>
                <div className="top">

                    <p className="text">
                        Our Process
                    </p>
                    <h2 className="title">
                        How We Work
                    </h2>
                </div>

                <Grid container>


                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        breakpoints={{
                            "@0.00": {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            "@0.75": {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            "@1.00": {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            "@1.50": {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                        }}

                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}


                        pagination={true}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper"


                    >
                        <SwiperSlide>
                            <Grid item xs={12} md={3}>
                                <div className="cards">
                                    <h4 className="number">
                                        01
                                    </h4>
                                    <h1 className='service'>
                                        Contact
                                    </h1>
                                    <p className='pharg'>
                                        Nothing the copy said could convince her and so it didn't take long.
                                    </p>
                                </div>
                            </Grid>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Grid item xs={12} md={3}>
                                <div className="cards">
                                    <h4 className="number">
                                        02
                                    </h4>
                                    <h1 className='service'>
                                        Baking
                                    </h1>
                                    <p className='pharg'>
                                        The copy said could convince her and so it didn’t take long.
                                    </p>
                                </div>
                            </Grid>
                        </SwiperSlide>
                        <SwiperSlide>

                            <Grid item xs={12} md={3}>
                                <div className="cards">
                                    <h4 className="number">
                                        03
                                    </h4>
                                    <h1 className='service'>
                                        Delivery
                                    </h1>
                                    <p className='pharg'>
                                        Nothing the copy said could convince her and so it didn’t take.
                                    </p>
                                </div>
                            </Grid>
                        </SwiperSlide>
                        <SwiperSlide>

                            <Grid item xs={12} md={3}>
                                <div className="cards">
                                    <h4 className="number">
                                        04
                                    </h4>
                                    <h1 className='service'>
                                        Tasty
                                    </h1>
                                    <p className='pharg'>
                                        Copy said could convince her and so it didn’t take long.
                                    </p>
                                </div>
                            </Grid>
                        </SwiperSlide>


                    </Swiper>



                </Grid>

            </Container>

            <Container>
                <div className="Recipetext">
                    <p className="text">
                        Our Recipes
                    </p>
                    <h2 className="title">
                        Explore Sweet &
                        Delicious Recipes
                    </h2>

                </div>

                <Grid container spacing={4}>
                    <Grid item md={6}>
                        <Card sx={{ maxWidth: 570 }}>


                            <img src={bgpost} alt="" />

                            <CardContent>
                                <p className="text">
                                    Bakery
                                </p>

                                <h3 className="delicious">
                                    Delicious Bread
                                </h3>

                                <div className="spantext">

                                    <span className='flows'>
                                        Flows by their place and supplies it with the necessary regelialia.
                                    </span>
                                    <span className='price'>
                                        <AccessTimeIcon sx={{ fontSize: 30 }} />  5 min
                                    </span>
                                </div>
                            </CardContent>



                        </Card>
                    </Grid>


                    <Grid item md={6}>

                        <div className="box">

                            <Card sx={{ maxWidth: 230 }}>


                                <img src={bgbred} alt="" />

                                <CardContent>
                                    <div className="spantext">

                                        <span className='flows'>
                                            Bakery
                                        </span>
                                        <span className='pricetag'>
                                            <AccessTimeIcon sx={{ fontSize: 20 }} />  10 min
                                        </span>
                                    </div>

                                    <h4 className='wheat'>
                                        Malted wheat flake bread
                                    </h4>


                                </CardContent>



                            </Card>

                            <Card sx={{ maxWidth: 230 }}>


                                <img src={bgbred1} alt="" />

                                <CardContent>
                                    <div className="spantext">

                                        <span className='flows'>
                                            Bakery
                                        </span>
                                        <span className='pricetag'>
                                            <AccessTimeIcon sx={{ fontSize: 20 }} />  10 min
                                        </span>
                                    </div>

                                    <h4 className='wheat'>
                                        Malted wheat flake bread
                                    </h4>


                                </CardContent>



                            </Card>



                            <Card sx={{ maxWidth: 230 }}>


                                <img src={bgbred2} alt="" />

                                <CardContent>
                                    <div className="spantext">

                                        <span className='flows'>
                                            Bakery
                                        </span>
                                        <span className='pricetag'>
                                            <AccessTimeIcon sx={{ fontSize: 20 }} />  10 min
                                        </span>
                                    </div>

                                    <h4 className='wheat'>
                                        Malted wheat flake bread
                                    </h4>


                                </CardContent>



                            </Card>
                            <Card sx={{ maxWidth: 230 }}>


                                <img src={bgbred3} alt="" />

                                <CardContent>
                                    <div className="spantext">

                                        <span className='flows'>
                                            Bakery
                                        </span>
                                        <span className='pricetag'>
                                            <AccessTimeIcon sx={{ fontSize: 20 }} />  10 min
                                        </span>
                                    </div>

                                    <h4 className='wheat'>
                                        Malted wheat flake bread
                                    </h4>


                                </CardContent>



                            </Card>

                        </div>

                    </Grid>

                </Grid>


                <Button className='btn' variant="outlined">Explore</Button>

            </Container>
        </div>




    )
}
