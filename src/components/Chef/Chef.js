import React from 'react'
import "./Chef.css"
import Grid from "@mui/material/Grid";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "@mui/system";
import frame from "../../assets/img/Group 2 (1).png"

export default function Chef(props) {
    return (
        <div className="Chef">
            <Container>
                <Grid container spacing={8}>

                    <Grid item xs={12} md={6}>
                        <div className="box">
                            <p className="text">Our Baker</p>
                            <h2 className="title">
                                Meet Our
                                Professional Baker
                            </h2>
                            <div className="slider">
                                <Carousel fade>
                                    <Carousel.Item>
                                        <Carousel.Caption>
                                            <p className="text">BAKER</p>
                                            <h3>Stina Gunnarsdottir</h3>
                                            <p className=''>
                                                She packed her seven versalia, put her initial into the
                                                belt and made herself on the way. 
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Carousel.Caption>
                                            <p className="text">BAKER</p>
                                            <h3>Jaquon Hart</h3>
                                            <p>
                                                She packed her seven versalia, put her initial into the
                                                belt and made herself on the way. 
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Carousel.Caption>
                                            <p className="text">BAKER</p>
                                            <h3>Oluchi Mazi</h3>
                                            <p >
                                                She packed her seven versalia, put her initial into the
                                                belt and made herself on the way. 
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="bottomText">
                                <p>Jaquon Hart</p>
                                <p>Oluchi Mazi</p>

                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="img">
                            <img src={frame} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
