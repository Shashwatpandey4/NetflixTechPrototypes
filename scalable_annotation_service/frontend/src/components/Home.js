import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateProjectModal from './CreateProjectModal'; // Import the new modal
import './Home.css'; // Import CSS for styling

function Home({ projects, addProject }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Open the modal when the plus button is clicked
  const openModal = () => {
    setShowModal(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Handle adding the new project
  const handleAddProject = (project) => {
    addProject(project);  
    setShowModal(false);  
  };

  // Handle clicking on a project card to navigate to its detail page
  const handleProjectClick = (index) => {
    navigate(`/project/${index}`);
  };

  return (
    <div className="home-container">
      <div className="left-panel">
        {/* Navigation panel */}
        <h2>Navigation</h2>
        <ul>
          <li>Dashboard</li>
          <li>Your Projects</li>
          <li>Settings</li>
          {/* Add more links as needed */}
        </ul>
      </div>

      <div className="main-content">
        {/* Search bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search projects..." />
        </div>

        <div className="navbar">
          <h1>Your Projects</h1>
          <button className="plus-button" onClick={openModal}>+</button>
        </div>

        <div className="projects-grid">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => handleProjectClick(index)}
              >
                <video
                  src={project.media}
                  alt={project.name}
                  className="project-thumbnail"
                  controls
                />
                <h3>{project.name}</h3>
              </div>
            ))
          ) : (
            <p>No projects yet. Click the plus button to add one!</p>
          )}
        </div>
      </div>

      {showModal && (
        <CreateProjectModal closeModal={closeModal} addProject={handleAddProject} />
      )}
    </div>
  );
}

export default Home;
