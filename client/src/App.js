import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Home, AddStudent, ShowStudent, EditStudent, NotFound } from './index';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/students/add" component={AddStudent} />
          <Route exact path="/students/:id" component={ShowStudent} />
          <Route exact path="/students/edit/:id" component={EditStudent} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};