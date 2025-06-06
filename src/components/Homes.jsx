import React from 'react';

const Homes = ({ user, logout }) => {
  return (
    <div>
      <h1>tesr</h1>
      <h2>Welcome, {user.email}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Homes;
