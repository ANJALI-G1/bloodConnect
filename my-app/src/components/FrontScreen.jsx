import React from 'react';
import { useNavigate } from "react-router-dom"; // Import the hook for navigation
import "./FrontScreen.css";
import Button from '@mui/material/Button';

function Login() {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <div className='login'>
            <div className="login_background">
                <h1> BLOOD CONNECT</h1>
                <Button 
                variant="contained"
                color="primary"
                className='home_button'
                onClick={() => navigate("/home")}
                >Home
                </Button>

                <Button
                    variant="contained"
                    color="primary"
                    className='signin_button'
                    onClick={() => navigate("/register")} // Navigate to the Sign Up page
                >
                    Sign Up
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    className='login_button'
                    onClick={() => navigate("/login")} // Navigate to the Log In page
                >
                    Log In
                </Button>
            </div>
            <div className="login_gradient"></div>
            <div className="login_body">
                <h1>The Gift Of Blood Is The Gift Of Life</h1>
            </div>
            <footer>
                <p className='footer'>&copy; 2025 Blood Connect Org. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Login;
