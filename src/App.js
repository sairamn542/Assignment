// App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './Components/Dashboard';
import EmployeeList from './Components/EmployeeList';
import AddEmployeeModal from './Components/AddEmployeeModal';
import './App.css';

const initialEmployees = [
  { id: 1, name: 'John Doe', designation: 'Software Engineer', age: 30, department: 'Frontend Development', available: true },
  { id: 2, name: 'Jane Smith', designation: 'Project Manager', age: 35, department: 'Backend Development', available: false },
  // Add more sample data as needed
];

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);

  useEffect(() => {
    // Load employees from local storage on component mount
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    } else {
      // Initialize with sample data if local storage is empty
      setEmployees(initialEmployees);
      localStorage.setItem('employees', JSON.stringify(initialEmployees));
    }
  }, []);

  // Function to add a new employee
  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setShowAddEmployeeModal(false);
  };

  return (
    <div className="app">
      <Dashboard employees={employees} />
      <EmployeeList employees={employees} setEmployees={setEmployees} />
      {showAddEmployeeModal && (
        <AddEmployeeModal addEmployee={addEmployee} closeModal={() => setShowAddEmployeeModal(false)} />
      )}
      <button onClick={() => setShowAddEmployeeModal(true)}>Add Employee</button>
    </div>
  );
};

export default App;
