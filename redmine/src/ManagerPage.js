// ManagerPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios importálása az API hívásokhoz

function ManagerPage() {
  const [managers, setManagers] = useState([]); // Állapot a menedzserekhez
  const [tasks, setTasks] = useState([]); // Állapot a feladatokhoz

  // Az adatok lekérdezése az adatbázisból
  useEffect(() => {
    // Menedzserek lekérése
    axios.get('/api/managers')
      .then(response => {
        setManagers(response.data);
      })
      .catch(error => {
        console.error('Error fetching managers:', error);
      });

    // Feladatok lekérése
    axios.get('/api/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div>
      <h2>Manager Page</h2>
      <div>
        <h3>Managers:</h3>
        <ul>
          {managers.map(manager => (
            <li key={manager.id}>
              {manager.name} - {manager.email}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Tasks:</h3>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.name} - {task.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ManagerPage;
