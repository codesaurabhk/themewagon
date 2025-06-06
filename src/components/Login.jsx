import React, { useState } from 'react';
import './Login.css';

const Login = ({ setUser, setToSignup }) => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Login sucessfully");
      setUser(user);
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="loginmain">
      <h2>Login Here</h2>

      <input
        type="email"
        value={email}
        onChange={e => setemail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <button onClick={handleSubmit}>Login</button>

      <p>
        Don't have an account?{' '}
        <button onClick={setToSignup}>Signup</button>
      </p>
    </div>
  );
};

export default Login;
