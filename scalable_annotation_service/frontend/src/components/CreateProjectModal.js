import React, { useState } from 'react';
import './CreateProjectModal.css'; 

const CreateProjectModal = ({ closeModal, addProject }) => {
  const [projectName, setProjectName] = useState('');
  const [media, setMedia] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof addProject === 'function') {
      const newProject = { name: projectName, media: media };
      addProject(newProject); 
      closeModal(); 
    } else {
      console.error("addProject is not a function");
    }
  };

  const handleMediaChange = (e) => {
    setMedia(URL.createObjectURL(e.target.files[0])); 
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Create New Project</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
          <input
            type="file"
            accept="video/*,image/*" 
            onChange={handleMediaChange}
            required
          />
          <button type="submit">Create Project</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectModal;
