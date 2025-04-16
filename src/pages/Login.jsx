// src/pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate login success
    setError('');
    navigate('/');
  };

  return (
    <div className="auth-container bg-light-blue">
      <form
        onSubmit={handleLogin}
        className="auth-form shadow-md bg-white p-8 rounded-xl"
      >
        <h2 className="text-2xl text-navy font-bold mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="auth-button bg-sky hover:bg-blue-500">
          Login
        </button>
        <p className="text-sm mt-3">
          Don’t have an account?{' '}
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
