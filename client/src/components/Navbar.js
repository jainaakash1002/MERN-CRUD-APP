import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <Link className="btn btn-outline-light" exact to="/">Home</Link>
        <h3 className="text-white">CRUD App</h3>
        <Link className="btn btn-outline-light" to="/students/add">Add Student</Link>
      </div>
    </nav>
  );
};