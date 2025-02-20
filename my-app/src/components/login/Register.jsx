import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
    const [isOrganization, setIsOrganization] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [orgName, setOrgName] = useState('');
    const [orgAddress, setOrgAddress] = useState('');
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // Add registration logic here
        console.log('Registering as', isOrganization ? 'Organization' : 'Individual', 'with', name, email, password, isOrganization && { orgName, orgAddress });
        navigate('/login');
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <div className="toggle-container">
                <button
                    className={`toggle-button ${!isOrganization ? 'active' : ''}`}
                    onClick={() => setIsOrganization(false)}
                >
                    Individual
                </button>
                <button
                    className={`toggle-button ${isOrganization ? 'active' : ''}`}
                    onClick={() => setIsOrganization(true)}
                >
                    Organization
                </button>
            </div>
            <form onSubmit={handleRegister}>
                {isOrganization ? (
                    <>
                        <div className="form-group">
                            <label htmlFor="orgName">Organization Name:</label>
                            <input
                                type="text"
                                id="orgName"
                                value={orgName}
                                onChange={(e) => setOrgName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="orgAddress">Organization Address:</label>
                            <input
                                type="text"
                                id="orgAddress"
                                value={orgAddress}
                                onChange={(e) => setOrgAddress(e.target.value)}
                                required
                            />
                        </div>
                    </>
                ) : (
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
}

export default Register;