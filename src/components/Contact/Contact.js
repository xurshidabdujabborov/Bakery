import React from 'react'
import "./Contact.css"
import bredbg from "../../assets/img/Group 3 (bred).png"
import { Container, Grid } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Button } from '@mui/material';
export default function Contact() {
  return (
    <div className='  Contact'>

      <Container >
        <Grid container >
          <Grid item md={6} >

            <img src={bredbg} alt="" />
          </Grid>
          <Grid item md={6}>

            <div className="adresstext">

              <p className="text">
                Get in Touch
              </p>
              <h2 className="title">
                Contact <br />
                With Us
              </h2>
            </div>

            <div className="infolocation">
              <div className="one">
                <div className="icon">
                  <LocationOnIcon sx={{ fontSize: 30 }} />

                </div>
                <div className="icontext">
                  <h6>
                    01
                  </h6>
                  <h5 className='Adres'>
                    Address
                  </h5>

                  <p className='grey'>
                    764 Richardson Rd. <br />
                    Bethpage, NY 11714
                  </p>

                </div>

              </div>
              <div className="one">
                <div className="icon">
                  <PhoneInTalkOutlinedIcon sx={{ fontSize: 30 }} />

                </div>
                <div className="icontext">
                  <h6>
                    02
                  </h6>
                  <h5 className='Adres'>
                    Phone
                  </h5>

                  <p className='phone'>
                    +1 (234) 567-89-02
                  </p>

                </div>

              </div>
            </div>
            <div className="Button">

              <Button variant="outlined">Contact Us</Button>
            </div>

          </Grid>
        </Grid>

      </Container>


    </div>
  )
}

