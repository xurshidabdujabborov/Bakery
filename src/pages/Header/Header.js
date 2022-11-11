import React from "react";
import "./Header.css";
import Navbars from "../../components/Navbars/Navbars";
import Container from "@mui/material/Container";

import Grid from "@mui/material/Grid";
import headerBg from "../../assets/img/Background.png";
function Header(props) {
  return (
    <div className="header">
      <Navbars />
      <div className="header_title">
        <Container maxWidth="lg">
          <Grid container item xs={10} md={6}>
            <div className="headertext">

            <p className="text">Sience 1984</p>
            <h3 className="fresh">
              Fresh 
              Bakery
              Every Day
            </h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost.
            </p>
            </div>
          </Grid>
        </Container>
        <img className="chef" src={headerBg} alt="" />
      </div>
    </div>
  );
}

export default Header;
