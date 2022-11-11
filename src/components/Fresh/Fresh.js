import { Button, Container, Grid } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';
import "./Fresh.css"
import postbg from "../../assets/img/Bitmap (3).png"
import postbg1 from "../../assets/img/Bitmap (4).png"
import postbg2 from "../../assets/img/Bitmap (5).png"
import postbg3 from "../../assets/img/Bitmap (6).png"
export default function Fresh() {
    return (
        <div className='Fresh'>
            <Container maxWidth={"lg"} >



                <div className="freshtext">
                    <p className="text">
                        Our Products
                    </p>

                    <h2 className="title">
                        Baked Fresh <br />
                        Every Morning
                    </h2>
                </div>

                <Grid container spacing={2}>
                    <Grid item md={8} xs={12}>

                        <div className="homemade">


                            <p className="text">
                                Bakery
                            </p>
                            <h3 className="home">
                                Homemade
                                Bread
                            </h3>
                            <div className="spantext">

                                <span className='grey'>
                                    Flows by their place and supplies it with <br /> the necessary regelialia.
                                </span>


                                <h5 className='white'>
                                    $9
                                </h5>



                            </div>

                        </div>
                    </Grid>

                    <Grid item md={4} xs={12}>

                        <Card sx={{ maxWidth: 370 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={postbg}
                                />
                                <CardContent>

                                    <p className="text">
                                        Bakery
                                    </p>
                                    <div className="spanbottom">

                                        <span className="left">
                                            Bread
                                        </span>
                                        <span className='right'>
                                            $5
                                        </span>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>

                <div className="bottom">

                    <Grid container spacing={2} >
                        <Grid item md={4} xs={12}>

                            <Card sx={{ maxWidth: 370 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={postbg1}
                                    />
                                    <CardContent>

                                        <p className="text">
                                            Pastry
                                        </p>
                                        <div className="spanbottom">

                                            <span className="left">
                                                Cupcake
                                            </span>
                                            <span className='right'>
                                                $3
                                            </span>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item md={4} xs={12}>

                            <Card sx={{ maxWidth: 370 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={postbg2}
                                    />
                                    <CardContent>

                                        <p className="text">
                                            Sweet
                                        </p>
                                        <div className="spanbottom">

                                            <span className="left">
                                                Biscuits
                                            </span>
                                            <span className='right'>
                                                $2
                                            </span>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item md={4} xs={12}>

                            <Card sx={{ maxWidth: 370 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={postbg3}
                                    />
                                    <CardContent>

                                        <p className="text">
                                            Pastry
                                        </p>
                                        <div className="spanbottom">

                                            <span className="left">
                                                Brioche
                                            </span>
                                            <span className='right'>
                                                $5
                                            </span>
                                        </div>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </div>

               <Button  variant="outlined">Explore</Button>
            </Container>

        </div>
    )
}
