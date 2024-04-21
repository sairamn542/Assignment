import React, { useState, useEffect } from 'react';
import EmployeeList from './Components/EmployeeList';
import './App.css';

const initialEmployees = [
  { id: 1, name: 'John Doe', designation: 'Software Engineer', age: 30, department: 'Frontend Development', available: true },
  { id: 2, name: 'Jane Smith', designation: 'Project Manager', age: 35, department: 'Backend Development', available: false },
  // Add more sample data as needed
];
function App() {
  const [employees, setEmployees] = useState([]);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [newEmployeeData, setNewEmployeeData] = useState({
    name: '',
    designation: '',
    age: '',
    department: '',
    available: true, // Assuming new employees are available by default
  });

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
  const addEmployee = () => {
    const newEmployee = { id: employees.length + 1, ...newEmployeeData };
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setShowAddEmployeeModal(false);
    // Reset the form fields after adding employee
    setNewEmployeeData({
      name: '',
      designation: '',
      age: '',
      department: '',
      available: true,
    });
  };

  // Function to delete an employee
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="app">
      <div className="dashboard">
        <div className="dashboard-section">
          <h2>Overall Statistics</h2>
          <p>Total Employees: {employees.length}</p>
          <p>Available Employees: {employees.filter(emp => emp.available).length}</p>
        </div>
        <div className="dashboard-section">
          <h2>Add Employee</h2>
          <button onClick={() => setShowAddEmployeeModal(true)}>Add Employee</button>
        </div>
      </div>
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
      {showAddEmployeeModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowAddEmployeeModal(false)}>&times;</span>
            <h2>Add Employee</h2>
            <form onSubmit={addEmployee}>
              <label>
                Name:
                <input type="text" value={newEmployeeData.name} onChange={(e) => setNewEmployeeData({ ...newEmployeeData, name: e.target.value })} />
              </label>
              <label>
                Designation:
                <input type="text" value={newEmployeeData.designation} onChange={(e) => setNewEmployeeData({ ...newEmployeeData, designation: e.target.value })} />
              </label>
              <label>
                Age:
                <input type="number" value={newEmployeeData.age} onChange={(e) => setNewEmployeeData({ ...newEmployeeData, age: e.target.value })} />
              </label>
              <label>
                Department:
                <input type="text" value={newEmployeeData.department} onChange={(e) => setNewEmployeeData({ ...newEmployeeData, department: e.target.value })} />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
