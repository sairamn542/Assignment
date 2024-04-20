// Dashboard.js
import React from 'react';

const Dashboard = ({ employees }) => {
  const totalEmployees = employees.length;
  const availableEmployees = employees.filter(emp => emp.available).length;

  return (
    <div className="dashboard">
      <div className="dashboard-section">
        <h2>Overall Statistics</h2>
        <p>Total Employees: {totalEmployees}</p>
        <p>Available Employees: {availableEmployees}</p>
      </div>
    </div>
  );
};

export default Dashboard;
