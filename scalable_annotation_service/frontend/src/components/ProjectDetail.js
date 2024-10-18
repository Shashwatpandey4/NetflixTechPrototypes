import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import VideoTimeline from './VideoTimeline'; // Import the VideoTimeline component
import './ProjectDetail.css';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams(); // Get the project ID from the URL
  const project = projects[id]; // Get the project from the list using the ID
  const videoRef = useRef(null); // Create a reference for the video element

  if (!project) {
    return <div>Project not found</div>; // Handle case where project doesn't exist
  }

  return (
    <div className="project-detail-container">
      <h1 className="project-title">{project.name}</h1>
      <div className="video-player-container">
        <video ref={videoRef} controls className="video-player">
          <source src={project.media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <VideoTimeline videoRef={videoRef} /> {/* Include the VideoTimeline component */}
    </div>
  );
};

export default ProjectDetail;
