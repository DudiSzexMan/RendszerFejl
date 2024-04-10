import React, { useState } from 'react';
import './components/LoginForm.css';
import ManagerPage from './ManagerPage'; // ManagerPage importálása
import DeveloperPage from './DeveloperPage'; // DeveloperPage importálása

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
    React.createElement('div', { className: 'container' },
      !managerActive && !developerActive && (
        React.createElement('div', { className: 'form-group' },
          React.createElement('label', { htmlFor: 'name' }, 'Name:'),
          React.createElement('input', { type: 'text', id: 'name' }),
          React.createElement('label', { htmlFor: 'email' }, 'Email:'),
          React.createElement('input', { type: 'email', id: 'email' }),
          React.createElement('label', { htmlFor: 'password' }, 'Password:'),
          React.createElement('input', { type: 'password', id: 'password' }),
          React.createElement('button', { onClick: handleManagerSubmit }, 'Manager Login'),
          React.createElement('button', { onClick: handleDeveloperSubmit }, 'Developer Login')
        )
      ),
      managerActive && (
        React.createElement(ManagerPage, null) /* ManagerPage komponens megjelenítése */
      ),
      developerActive && (
        React.createElement(DeveloperPage, null) /* DeveloperPage komponens megjelenítése */
      )
    )
  );
}

export default App;
