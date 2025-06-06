import React from 'react';
import './Dashboard.css';
import { FaDollarSign, FaArrowUp } from 'react-icons/fa';

const Dashboard = () => {
  return (
    
    <div className="dashboard-container">
      <div className="earnings-card">
      <div className="top-section">
        <div>
          <h2 className="amount">$30200</h2>
          <p className="label">All Earnings</p>
        </div>
        <FaDollarSign className="money-icon" />
      </div>
      <div className="bottom-section">
        <p>10% changes on profit</p>
        <FaArrowUp className="up-icon" />
      </div>
    </div>
      <div className="earnings-card">
      <div className="top-section">
        <div>
          <h2 className="amount">145</h2>
          <p className="label">Task</p>
        </div>
        <FaDollarSign className="money-icon" />
      </div>
      <div className="bottom-section">
        <p>28% task performance</p>
        <FaArrowUp className="up-icon" />
      </div>
    </div>
      
    </div>
  );
};

export default Dashboard;
