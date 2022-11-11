import React from "react";
import Grid from "@mui/material/Grid";
import Carousel from "react-bootstrap/Carousel";
import "./Main.css";
import { Container } from "@mui/system";
import Frame from "../../assets/img/Frame 3.png";
function Main(props) {
  return (
    <main>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={5}>
            <div className="img">
              <img src={Frame} alt="" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="box">
              <p className="text">About Us</p>
              <h2 className="title">Baking Special Moments</h2>
              <div className="slider">
                <Carousel fade>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <span className="number">01</span>
                      <h3>Last view back</h3>
                      <p>
                        She packed her seven versalia, put her initial into the
                        belt and made herself on the way. When she reached the
                        first hills of the Italic.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <span className="number">02</span>
                      <h3>Last view back</h3>
                      <p>
                        She packed her seven versalia, put her initial into the
                        belt and made herself on the way. When she reached the
                        first hills of the Italic.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Carousel.Caption>
                      <span className="number">03</span>
                      <h3>Last view back</h3>
                      <p>
                        She packed her seven versalia, put her initial into the
                        belt and made herself on the way. When she reached the
                        first hills of the Italic.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className="bottomText">
                <p>On the skyline</p>
                <p>Pityful a rethoric</p>
                <p>On her way she</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default Main;
