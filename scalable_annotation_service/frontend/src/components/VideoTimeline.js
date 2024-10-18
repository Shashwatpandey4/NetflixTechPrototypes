import React, { useState, useEffect } from 'react';
import './VideoTimeline.css';

const VideoTimeline = ({ videoRef }) => {
  const [duration, setDuration] = useState(0); 
  const [currentTime, setCurrentTime] = useState(0); 
  const [frames, setFrames] = useState([]); 


  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };


  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
    console.log('Video Duration:', videoRef.current.duration); 
    setFrames(createFrameTimestamps(videoRef.current.duration)); 
  };


  const createFrameTimestamps = (duration) => {
    const numFrames = Math.floor(duration); 
    const frameArray = Array.from({ length: numFrames }, (_, index) => index); 
    console.log(frameArray); 
    return frameArray;
  };

  
  const handleClick = (event) => {
    const timeline = event.target;
    const { clientX } = event;
    const { left, width } = timeline.getBoundingClientRect();
    const newTime = ((clientX - left) / width) * duration; 
    videoRef.current.currentTime = newTime; 
    setCurrentTime(newTime); 
  };

  useEffect(() => {
    const videoElement = videoRef.current;

   
    videoElement.addEventListener('timeupdate', handleTimeUpdate);
    videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);

    
    return () => {
      videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [videoRef]);

  return (
    <div className="video-timeline" onClick={handleClick}>
      {frames.map((frame) => (
        <div key={frame} className="frame" style={{ left: `${(frame / duration) * 100}%` }}>
          <span className="frame-timestamp">{frame}s</span>
        </div>
      ))}
      <div
        className="timeline-progress"
        style={{ width: `${(currentTime / duration) * 100}%` }} 
      />
      <div className="timeline-handle" style={{ left: `${(currentTime / duration) * 100}%` }} />
    </div>
  );
};

export default VideoTimeline;
