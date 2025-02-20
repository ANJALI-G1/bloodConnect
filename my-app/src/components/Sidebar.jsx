import React from 'react'
import "./Sidebar.css";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HistoryIcon from '@mui/icons-material/History';
import GradeIcon from '@mui/icons-material/Grade';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { closesidebar } from '../redux/counter/sidebarSlice';
import { useDispatch } from 'react-redux';

function Sidebar() {
    const dispatch = useDispatch()
  return (
    <div className='sidebar'>
        <Avatar onClick={()=> dispatch(closesidebar())}/>
        <div className="sidebar_header">
            <div className="sidebar_info">
                {/* <h2>Description</h2> */}
                <h3>
                    <FiberManualRecordIcon/>
                    Swasti Sharma
                </h3>
            </div>
            <CreateIcon/>
        </div>
        <div className="sidebar_option">
            <div className="option">
                <HomeIcon/>
                <h3>My Address</h3>
            </div>
            <KeyboardArrowDownIcon/>
        </div>
        <div className="sidebar_option">
            <div className="option">
                <HistoryIcon/>
                <h3>Donation History</h3>
            </div>
            <KeyboardArrowDownIcon/>
        </div>
        <div className="sidebar_option">
            <div className="option">
                <GradeIcon/>
                <h3>Acheivements</h3>
            </div>
            <KeyboardArrowDownIcon/>
        </div>
        <div className="sidebar_option">
            <div className="option">
                <InfoIcon/>
                <h3>Emergency Info</h3>
            </div>
            <KeyboardArrowDownIcon/>
        </div>
        <div className="sidebar_option">
            <div className="option">
                <SettingsIcon/>
                <h3>Settings</h3>
            </div>
            <KeyboardArrowDownIcon/>
        </div>
        <div className="sidebar_option logout">
            <div className="option">
                <LogoutIcon/>
                <h3>Logout</h3>
            </div>
           
        </div>
       
        
    </div>
  )
}

export default Sidebar