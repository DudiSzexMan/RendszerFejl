import React, { useState } from 'react';
import './components/LoginForm.css';
import ManagerPage from './ManagerPage'; // ManagerPage importálása
import DeveloperPage from './DeveloperPage'; // DeveloperPage importálása
import { addManagerToDatabase, addDeveloperToDatabase } from './firebase'; // Firebase függvények importálása

function App() {
  const [managerActive, setManagerActive] = useState(false);
  const [developerActive, setDeveloperActive] = useState(false);

  const handleManagerSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    addManagerToDatabase(name, email, password)
      .then(() => {
        console.log('Manager added to database successfully');
      })
      .catch((error) => {
        console.error('Error adding manager to database:', error);
      });
    setManagerActive(true);
    setDeveloperActive(false);
  };

  const handleDeveloperSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    addDeveloperToDatabase(name, email, password)
      .then(() => {
        console.log('Developer added to database successfully');
      })
      .catch((error) => {
        console.error('Error adding developer to database:', error);
      });
    setManagerActive(false);
    setDeveloperActive(true);
  };

  return (
    <div className="container">
      {!managerActive && !developerActive && (
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <button onClick={handleManagerSubmit}>Manager Login</button>
          <button onClick={handleDeveloperSubmit}>Developer Login</button>
        </div>
      )}
      {managerActive && <ManagerPage />} {/* ManagerPage komponens megjelenítése */}
      {developerActive && <DeveloperPage />} {/* DeveloperPage komponens megjelenítése */}
    </div>
  );
}

export default App;
