import React from 'react';

function EmployeeList({ employees, deleteEmployee }) {
  return (
    <div className="employee-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Age</th>
            <th>Department</th>
            <th>Available</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.age}</td>
              <td>{employee.department}</td>
              <td>{employee.available ? 'Yes' : 'No'}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
