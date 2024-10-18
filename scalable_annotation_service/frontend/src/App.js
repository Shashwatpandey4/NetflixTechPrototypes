import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home'; 
import ProjectDetail from './components/ProjectDetail';

function App() {
  // State to store all projects
  const [projects, setProjects] = useState([]);

  // Function to add a project
  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <Router>
      <Routes>
        {/* Route for login page */}
        <Route path="/" element={<Login />} />

        {/* Route for the home page */}
        <Route path="/home" element={<Home projects={projects} addProject={addProject} />} />

        {/* Route for individual project details */}
        <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;
