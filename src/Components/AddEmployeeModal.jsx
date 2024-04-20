// AddEmployeeModal.js
import React, { useState } from 'react';

const AddEmployeeModal = ({ addEmployee, closeModal }) => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [age, setAge] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!name || !designation || !age || !department) {
      alert('Please fill all fields');
      return;
    }
    if (isNaN(age) || parseInt(age) <= 0) {
      alert('Age must be a positive integer');
      return;
    }
    const newEmployee = { name, designation, age: parseInt(age), department, available: true };
    addEmployee(newEmployee);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Designation:</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
          <label>Age:</label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          <label>Department:</label>
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <option value="">Select Department</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="Testing">Testing</option>
            <option value="Deployment">Deployment</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
