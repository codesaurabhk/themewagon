import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ setToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      setMessage("User already exists");
      return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("Signup successful! You can now login.");
    setTimeout(setToLogin, 1000);
  };

  return (
    <div className="signupmain">
      <h2>Signup</h2>

      {message && <p className="message">{message}</p>}

      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <button onClick={handleSignup}>Signup</button>

      <p>
        Already have an account?{' '}
        <button onClick={setToLogin}>Login</button>
      </p>
    </div>
  );
};

export default Signup;
