// src/pages/Signup.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    navigate('/login');
  };

  return (
    <div className="auth-container bg-light-blue">
      <form
        onSubmit={handleSignup}
        className="auth-form shadow-md bg-white p-8 rounded-xl"
      >
        <h2 className="text-2xl text-navy font-bold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="auth-input"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="auth-input"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="auth-input"
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit" className="auth-button bg-primary hover:bg-green-600">
          Sign Up
        </button>
        <p className="text-sm mt-3">
          Already have an account?{' '}
          <span
            className="text-sky cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
