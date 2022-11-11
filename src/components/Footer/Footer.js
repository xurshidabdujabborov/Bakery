import React from 'react'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./Footer.css"
import face  from"../../assets/img/facebook (1).png"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (


        <footer>
            <Container>
                <div className="footertop">

                    <Grid container spacing={4}>
                        <Grid item md={3}>
                            <h2 className="logo">
                                BKR
                            </h2>
                        </Grid>
                        <Grid item md={3}>
                            <ul>
                                <li>
                                    <h5 className='main'>
                                        Menu
                                    </h5>
                                </li>
                                <li>
                                    <h5 className='links'>
                                        About
                                    </h5>
                                </li>
                                <li>
                                    <h5 className='links'>
                                        Product
                                    </h5>
                                </li>
                                <li>
                                    <h5 className='links'>
                                        Recipes
                                    </h5>
                                </li>
                                <li>
                                    <h5 className='links'>
                                        Contact
                                    </h5>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item md={3}>
                            <ul>
                                <li>
                                    <h5 className='main'>
                                        Service
                                    </h5>
                                </li>
                                <li>
                                    <h5 className='links'>
                                        Bakery



                                    </h5>
                                </li>
                                <li>
                                    <h5 className='links'>
                                        Delivery
                                    </h5>
                                </li>
                                <li>
                                    <h5 className='links'>
                                        Catering
                                    </h5>
                                </li>
                                <li>
                                    <h5 className='links'>
                                        Corporate
                                    </h5>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item md={3}>

                            <li>
                                <h5 className='main'>
                                    Social
                                </h5>
                            </li>
                            <li>
                                <div className="social">
                                   
                                    <div className="Facebook">

                                  <img src={face} alt="" />
                                    </div>
                                    <div className="Twitter">

                                    <TwitterIcon />
                                    </div>
                                    <div className="Instagram">

                                    <InstagramIcon />
                                    </div>
                                </div>
                            </li>


                        </Grid>
                    </Grid>
                </div>

                <div className="footerbottom">
                    <Container>
                        <Grid container spacing={12}>
                            <Grid item md={7}>
                                <span className='copy'>
                                    Copyright © 2020 Laaqiq. All Rights Reserved.
                                </span>
                            </Grid>
                            <Grid item md={2}>

                                <h5 className='link'>
                                    Terms of Use
                                </h5>
                            </Grid>
                            <Grid item md={2}>

                                <h5 className='link'>
                                    Privacy Policy
                                </h5>
                            </Grid>



                        </Grid>
                    </Container>
                </div>
            </Container>
        </footer>
    )
}
