import React, { useEffect } from 'react';
import "./HomeScreen.css";
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import GroupIcon from '@mui/icons-material/Group';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Tooltip from '@mui/material/Tooltip';
import ChatIcon from '@mui/icons-material/Chat';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { opensidebar } from '../redux/counter/sidebarSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

function HomeScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        const text = "Donate Now !!";
        const typedTextElement = document.getElementById('typedText');

        let index = 0;
        let isAdding = true;

        function typeAnimation() {
            if (isAdding) {
                typedTextElement.textContent = text.substring(0, index + 1);
                index++;

                if (index === text.length) {
                    isAdding = false;
                    setTimeout(typeAnimation, 1500);
                    return;
                }
            } else {
                typedTextElement.textContent = text.substring(0, index - 1);
                index--;

                if (index === 0) {
                    isAdding = true;
                }
            }

            const speed = isAdding ? 200 : 100;
            setTimeout(typeAnimation, speed);
        }

        typeAnimation();
    }, []);

    return (
        <>
            <nav className='navbar'>
                <div className="div1" onClick={() => navigate("/home")} ><HomeIcon/></div>
                <div className="div2">
                <Button className='nav_button'>
                    Find a location in your area
                </Button>
                <Button className='nav_button btn'>
                    Join us
                </Button>
                </div>
               
            </nav>
            <div className='homescreen'>
                <div className="header">
                    <h1 className='logo'>BLOOD CONNECT</h1>
                    <div className="buttons">
                        <span className='about'>
                            <span>About us</span> 
                            <KeyboardArrowDownIcon/>
                        </span>
                        <Button variant="contained" color="primary" className='look_button'>
                            Looking For Blood
                            <BloodtypeIcon />
                        </Button>
                        <Button variant="contained" color="secondary" className='donate_button'  onClick={() => navigate("/upcoming-camps")} >
                            Donate Now <VolunteerActivismIcon />
                        </Button>
                        <Avatar className='avatar' onClick={() => dispatch(opensidebar())} />
                    </div>
                </div>
                <div className='chat'>
                    <Tooltip title="Chat with AI to know more">
                        <ChatIcon className='Ai' />
                    </Tooltip>
                </div>
                <div className="fade_button" />
                <div className='Quote'>
                    <h1>The gift of blood is the gift of life</h1>
                </div>
                <div className="heading">
                    <h1>
                        <span id="typedText"></span>
                    </h1>
                </div>
            </div>
            <div className='about-us'>
    Welcome to our platform! We are dedicated to providing innovative solutions to help individuals and businesses thrive in today's digital world. 
    Our mission is to create user-friendly and impactful applications that make a real difference in people's lives. 

    With a passionate team of professionals, we focus on excellence, creativity, and innovation in everything we do. 
    From building cutting-edge tools to offering top-notch services, we aim to deliver exceptional experiences for our users.

    Join us on this exciting journey as we continue to grow and shape the future of technology together.
</div>

            <div className="number">
                <div className="users">
                    <h1>No of Donors Registered</h1>
                    <span className='count'>
                        <div className='count-container'>
                            <span>1200</span>
                            <AddIcon />
                        </div>
                        <GroupIcon />
                    </span>
                </div>
                <div className="org">
                    <h1>No of Organisations Registered</h1>
                    <span className='count'>
                        <div className='count-container'>
                            <span>1000</span>
                            <AddIcon />
                        </div>
                        <Diversity3Icon />
                    </span>
                </div>
            </div>
            <div className="social">
                <FacebookIcon className='icon' />
                <InstagramIcon className='icon' />
                <YouTubeIcon className='icon' />
                <TwitterIcon className='icon' />
            </div>
        </>
    );
}

export default HomeScreen;