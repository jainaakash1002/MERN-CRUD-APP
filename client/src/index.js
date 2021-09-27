import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export { default as Navbar } from './components/Navbar';
export { default as Home } from './components/Home';
export { default as AddStudent } from './components/AddStudent';
export { default as ShowStudent } from './components/ShowStudent';
export { default as EditStudent } from './components/EditStudent';
export { default as NotFound } from './components/NotFound';
export const ENDPOINT = 'http://localhost:5000';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);