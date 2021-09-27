import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { ENDPOINT } from '../index';

export default function EditStudent() {
  let history = useHistory();
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: '',
    standard: '',
    attendance: '',
    email: '',
    phone: ''
  });

  const { name, standard, attendance, email, phone } = student;
  const onInputChange = e => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`${ENDPOINT}/students/${id}`, student);
    history.push("/");
  };

  const loadStudent = async () => {
    const res = await axios.get(`${ENDPOINT}/students/${id}`);
    setStudent(Array.isArray(res.data) ? res.data[0] : res.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-3">
        <h2 className="text-center mb-4">Edit Student</h2>
        <hr />
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label for="standard">Class:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="standard"
              name="standard"
              value={standard}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label for="salary">Attendance:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Attendance"
              name="attendance"
              value={attendance}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label for="email">Email Address:</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mt-3">
            <label for="phone">Phone Number:</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block mt-3">Update Student</button>
        </form>
      </div>
    </div>
  );
};