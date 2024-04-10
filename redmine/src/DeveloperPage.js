import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios importálása az API hívásokhoz

function DeveloperPage() {
  const [projects, setProjects] = useState([]); // Állapot a projektekhez
  const [developers, setDevelopers] = useState([]); // Állapot a fejlesztőkhöz
  const [projectDevelopers, setProjectDevelopers] = useState([]); // Állapot a projektfejlesztőkhöz
  const [projectTypes, setProjectTypes] = useState([]); // Állapot a projekt típusokhoz

  // Az adatok lekérdezése az adatbázisból
  useEffect(() => {
    // Projektek lekérése
    axios.get('/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });

    // Fejlesztők lekérése
    axios.get('/api/developers')
      .then(response => {
        setDevelopers(response.data);
      })
      .catch(error => {
        console.error('Error fetching developers:', error);
      });

    // Projektfejlesztők lekérése
    axios.get('/api/project-developers')
      .then(response => {
        setProjectDevelopers(response.data);
      })
      .catch(error => {
        console.error('Error fetching project developers:', error);
      });

    // Projekt típusok lekérése
    axios.get('/api/project-types')
      .then(response => {
        setProjectTypes(response.data);
      })
      .catch(error => {
        console.error('Error fetching project types:', error);
      });
  }, []);

  return (
    <div>
      <h2>Developer Page</h2>
      <div>
        <h3>Projects:</h3>
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              {project.name} - {project.description}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Developers:</h3>
        <ul>
          {developers.map(developer => (
            <li key={developer.id}>
              {developer.name} - {developer.email}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Project Developers:</h3>
        <ul>
          {projectDevelopers.map(pd => (
            <li key={pd.id}>
              Developer: {developers.find(dev => dev.id === pd.developer_id)?.name} - Project: {projects.find(proj => proj.id === pd.project_id)?.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Project Types:</h3>
        <ul>
          {projectTypes.map(type => (
            <li key={type.id}>
              {type.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DeveloperPage;
