import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Results from './components/Results';
import Layout from './components/Layout';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </Layout>
      </Router>
    </UserProvider>
  );
}

export default App;