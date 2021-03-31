import ReactPlayer from 'react-player';
import React from 'react';
import './Video.css';

// https://www.youtube.com/embed/vOXZkm9p_zY
export default function Video() {

  const ref = React.useRef(null);

  const stopVideo = () => {
    console.log("stop");
    ref.current.getInternalPlayer().pauseVideo();
  }
  const playVideo = () => {
    console.log("play");
    ref.current.getInternalPlayer().playVideo();
  }

  return (
    <div className="video-container">
      <input type="button" onClick={stopVideo} value="stop"/>
      <input type="button" onClick={playVideo} value="play"/>
      <ReactPlayer url="https://youtu.be/vOXZkm9p_zY"
            width="100%"
            pip={true}
            ref={ref} 
            controls={true}
            playing={false}
          ></ReactPlayer>
      {/* <video ref={ref} type="video/mp4" controls>
         <source src="./video/LeagueOfLegends.mp4" type="video/mp4"></source>
      </video> */}
      {/* <iframe title="My Daily Marathon Tracker" width="500" height="320" src="https://www.youtube.com/embed/vOXZkm9p_zY" ref={ref}/> */}

    </div>
  )
}
