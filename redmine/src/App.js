import React, { useState } from 'react';
import './App.css'; // CSS fájl importálása

function App() {
  const [managerActive, setManagerActive] = useState(false);
  const [developerActive, setDeveloperActive] = useState(false);

  const handleManagerSubmit = (e) => {
    e.preventDefault();
    setManagerActive(true);
    setDeveloperActive(false);
  };

  const handleDeveloperSubmit = (e) => {
    e.preventDefault();
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
      {managerActive && (
        <div>
          <h2>Manager Page</h2>
          {/* Itt jelenítsd meg a Manager lap tartalmát */}
        </div>
      )}
      {developerActive && (
        <div>
          <h2>Developer Page</h2>
          {/* Itt jelenítsd meg a Developer lap tartalmát */}
        </div>
      )}
    </div>
  );
}

export default App;