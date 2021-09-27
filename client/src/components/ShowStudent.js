import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ENDPOINT } from '../index';

export default function ShowStudent() {
  const [student, setStudent] = useState({});
  const { id } = useParams();
  useEffect(() => {
    loadStudent();
  }, []);
  const loadStudent = async () => {
    const res = await axios.get(`${ENDPOINT}/students/${id}`);
    setStudent(Array.isArray(res.data) ? res.data[0] : res.data);
  };

  return (
    <div className="container py-4 w-75 mx-auto shadow p-3">
      <h2 className="text-center">Student Detail</h2>
      <hr />
      <div className="d-flex justify-content-center">
        <ul className="list-group w-50">
          <li className="list-group-item">ID: {student.id}</li>
          <li className="list-group-item">Name: {student.name}</li>
          <li className="list-group-item">Class: {student.standard}</li>
          <li className="list-group-item">Attendance: {student.attendance}</li>
          <li className="list-group-item">Email: {student.email}</li>
          <li className="list-group-item">Phone: {student.phone}</li>
        </ul>
      </div>
    </div>
  );
};