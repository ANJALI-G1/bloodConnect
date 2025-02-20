import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontScreen from './components/FrontScreen';
import HomeScreen from './components/HomeScreen';
import Sidebar from './components/Sidebar';
import Login from './components/login/Login';
import Register from './components/login/Register';
import { selectSidebarIsOpen } from "./redux/counter/sidebarSlice";
import { useSelector } from 'react-redux';
import './App.css';
import UserDashboard from './components/user/UserDashboard';
import OrgDashboard from './components/organization/OrgDashboard';
import UpcomingCamps from './components/shared/UpcomingCamps';

function App() {
  const sidebarIsOpen = useSelector(selectSidebarIsOpen);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<><HomeScreen />{sidebarIsOpen && <Sidebar />}</>} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/org-dashboard" element={<OrgDashboard />} />
        <Route path="/upcoming-camps" element={<UpcomingCamps />} />
        <Route path="/" element={<FrontScreen />} />
      </Routes>
    </Router>
  );
}

export default App;