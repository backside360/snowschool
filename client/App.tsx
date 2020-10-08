import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Routes } from './pages';

const App: React.FC = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
