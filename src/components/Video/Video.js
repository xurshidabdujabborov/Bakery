import React, { useRef } from "react";
import videos from "../../assets/Video/How To Make The Best Croissants At Home.mp4";
import bitmap from "../../assets/img/Bitmap (1).png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./Video.css";
import { useState } from "react";

function Video(props) {
  const [play, setPlay] = useState(false);
  const videoIcon = useRef();

  return (
    <div className="video">
      <video src={videos} poster={bitmap} ref={videoIcon}></video>
      <div className="texts">
        <Container>
          <Grid container spacing={4}>
            <Grid items md={6} xs={10}>
              {play ? (
                <div
                  className="videoPlayerIcons"
                  onClick={() => {
                    videoIcon.current.pause();
                    setPlay(false);
                  }}
                >
                  <PauseIcon />
                </div>
              ) : (
                <div
                  className="videoPlayerIcons"
                  onClick={() => {
                    videoIcon.current.play();
                    setPlay(true);
                  }}
                >
                  <PlayArrowIcon />
                </div>
              )}
            </Grid>
            <Grid items md={6} xs={10}>
              {play ? null : (
                <div className="textInfo">
                  <p className="text">Our Video</p>
                  <h2 className="title">Story Behind Every Piece</h2>
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Video;
