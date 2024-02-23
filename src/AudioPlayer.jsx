import React from "react";
const AudioPlayer = ({ src, onEnded }) => {
    return <audio controls src={src} onEnded={onEnded}></audio>;
  };
  export default AudioPlayer
