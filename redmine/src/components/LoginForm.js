import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [managerEmail, setManagerEmail] = useState('');
  const [managerPassword, setManagerPassword] = useState('');
  const [managerName, setManagerName] = useState('');
  const [developerEmail, setDeveloperEmail] = useState('');
  const [developerName, setDeveloperName] = useState('');

  const handleManagerSubmit = (e) => {
    e.preventDefault();
    console.log('Manager Name:', managerName);
    console.log('Manager Email:', managerEmail);
    console.log('Manager Password:', managerPassword);
  };

  const handleDeveloperSubmit = (e) => {
    e.preventDefault();
    console.log('Developer Name:', developerName);
    console.log('Developer Email:', developerEmail);
  };

  return (
    <div className="container">
      <div className="manager-container">
        <h2>Manager Login</h2>
        <form onSubmit={handleManagerSubmit}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="manager-name">Name:</label>
              <input
                type="text"
                id="manager-name"
                className="form-control"
                value={managerName}
                onChange={(e) => setManagerName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="manager-email">Email:</label>
              <input
                type="email"
                id="manager-email"
                className="form-control"
                value={managerEmail}
                onChange={(e) => setManagerEmail(e.target.value)}
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="manager-password">Password:</label>
              <input
                type="password"
                id="manager-password"
                className="form-control"
                value={managerPassword}
                onChange={(e) => setManagerPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
      <div className="developer-container">
        <h2>Developer Login</h2>
        <form onSubmit={handleDeveloperSubmit}>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="developer-name">Name:</label>
              <input
                type="text"
                id="developer-name"
                className="form-control"
                value={developerName}
                onChange={(e) => setDeveloperName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="developer-email">Email:</label>
              <input
                type="email"
                id="developer-email"
                className="form-control"
                value={developerEmail}
                onChange={(e) => setDeveloperEmail(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

