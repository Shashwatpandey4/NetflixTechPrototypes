import React, { useState } from 'react';
import './Modal.css'; // CSS for modal styling

function Modal({ closeModal, addProject }) {
  const [name, setName] = useState('');
  const [media, setMedia] = useState('');

  // Handle media upload
  const handleMediaChange = (e) => {
    setMedia(URL.createObjectURL(e.target.files[0])); // Preview uploaded image
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && media) {
      addProject({ name, media });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Upload Media</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleMediaChange}
              required
            />
          </div>
          <button type="submit" className="done-button">Done</button>
          <button type="button" className="cancel-button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
