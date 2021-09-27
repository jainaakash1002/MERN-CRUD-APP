import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ENDPOINT } from '../index';

export default function Home() {
  const [students, setStudents] = useState([]);
  

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const result = await axios.get(`${ENDPOINT}/students`);
    setStudents(result.data);
  };

  const deleteStudent = async id => {
    await axios.delete(`${ENDPOINT}/students/${id}`);
    loadStudents();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2 className="text-center">Students Data</h2>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Class</th>
              <th scope="col">Attendance</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr>
                <th scope="row">{student.id}</th>
                <td>{student.name}</td>
                <td>{student.standard}</td>
                <td>{student.attendance}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>
                  <Link className="btn btn-primary me-3" to={`/students/${student.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary me-3" to={`/students/edit/${student.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};