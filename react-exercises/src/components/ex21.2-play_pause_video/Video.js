import ReactPlayer from 'react-player';
import React from 'react';
import './Video.css';

export default function Video() {

  const ref = React.useRef(null);
  const stopVideo = () => ref.current.getInternalPlayer().pauseVideo();
  const playVideo = () => ref.current.getInternalPlayer().playVideo();

  return (
    <div className="video-container">
      <input className="video-button" type="button" onClick={stopVideo} value="stop"/>
      <input className="video-button" type="button" onClick={playVideo} value="play"/>
      <ReactPlayer url="https://youtu.be/vOXZkm9p_zY"
        width="100%"
        pip={true}
        ref={ref} 
        controls={true}
        playing={false}
      />
     
    </div>
  )
}
