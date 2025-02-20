import React, { useState } from 'react';
import './OrgDashboard.css';

function WelcomeMessage() {
    return (
        <div className="welcome-message">
            <h1>Welcome, [Organization's Name]!</h1>
            <p>Thank you for your efforts in organizing blood donation camps. Here's your dashboard to manage your activities.</p>
        </div>
    );
}

function UploadCampDetails() {
    const [campName, setCampName] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add upload camp details logic here
        console.log('Uploading camp details with', campName, location, date);
    };

    return (
        <div className="upload-camp-details">
            <h2>Upload Camp Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="campName">Camp Name:</label>
                    <input
                        type="text"
                        id="campName"
                        value={campName}
                        onChange={(e) => setCampName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Upload Details</button>
            </form>
        </div>
    );
}

function ViewRequests() {
    const requests = [
        { id: 1, user: 'User 1', bloodType: 'O+', location: 'Location 1', date: '2025-02-10' },
        { id: 2, user: 'User 2', bloodType: 'A-', location: 'Location 2', date: '2025-02-15' },
        // Add more requests here
    ];

    return (
        <div className="view-requests">
            <h2>View Blood Requests</h2>
            <ul>
                {requests.map(request => (
                    <li key={request.id}>
                        <p>User: {request.user}</p>
                        <p>Blood Type: {request.bloodType}</p>
                        <p>Location: {request.location}</p>
                        <p>Date: {request.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function OrgProfile() {
    const [name, setName] = useState('[Organization\'s Name]');
    const [email, setEmail] = useState('[Organization\'s Email]');
    const [address, setAddress] = useState('[Organization\'s Address]');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add profile update logic here
        console.log('Updating profile with', name, email, address);
    };

    return (
        <div className="org-profile">
            <h2>Profile</h2>
            <form onSubmit={handleSubmit}>
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
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

function OrgDashboard() {
    const [showUploadCampDetails, setShowUploadCampDetails] = useState(false);

    const handleUploadClick = () => {
        setShowUploadCampDetails(true);
    };

    return (
        <div className="org-dashboard">
            <WelcomeMessage />
            <div className="dashboard-sections">
                <button className="upload-button" onClick={handleUploadClick}>
                    Upload Camp Details
                </button>
                {showUploadCampDetails && <UploadCampDetails />}
                <ViewRequests />
                <OrgProfile />
            </div>
        </div>
    );
}

export default OrgDashboard;