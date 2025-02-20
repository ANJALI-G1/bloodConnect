import React, { useState } from 'react';
import './UserDashboard.css';

function WelcomeMessage() {
    return (
        <div className="welcome-message">
            <h1>Welcome, [User's Name]!</h1>
            <p>Thank you for being a lifesaver. Here's your dashboard to manage your blood donation activities.</p>
        </div>
    );
}

function RequestBlood() {
    const [bloodType, setBloodType] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add request blood logic here
        console.log('Requesting blood with', bloodType, location, date);
    };

    return (
        <div className="request-blood">
            <h2>Request Blood</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="bloodType">Blood Type:</label>
                    <input
                        type="text"
                        id="bloodType"
                        value={bloodType}
                        onChange={(e) => setBloodType(e.target.value)}
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
                <button type="submit">Request Blood</button>
            </form>
        </div>
    );
}

function ViewCamps() {
    const camps = [
        { id: 1, name: 'Camp 1', location: 'Location 1', date: '2025-03-01' },
        { id: 2, name: 'Camp 2', location: 'Location 2', date: '2025-03-15' },
        // Add more camps here
    ];

    return (
        <div className="view-camps">
            <h2>Upcoming Blood Donation Camps</h2>
            <ul>
                {camps.map(camp => (
                    <li key={camp.id}>
                        <h3>{camp.name}</h3>
                        <p>Location: {camp.location}</p>
                        <p>Date: {camp.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function DonationHistory() {
    const donations = [
        { id: 1, date: '2025-01-01', location: 'Location 1' },
        { id: 2, date: '2024-12-15', location: 'Location 2' },
        // Add more donations here
    ];

    return (
        <div className="donation-history">
            <h2>Donation History</h2>
            <ul>
                {donations.map(donation => (
                    <li key={donation.id}>
                        <p>Date: {donation.date}</p>
                        <p>Location: {donation.location}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function UserProfile() {
    const [name, setName] = useState('[User\'s Name]');
    const [email, setEmail] = useState('[User\'s Email]');
    const [phone, setPhone] = useState('[User\'s Phone]');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add profile update logic here
        console.log('Updating profile with', name, email, phone);
    };

    return (
        <div className="user-profile">
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
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

function UserDashboard() {
    const [showRequestBlood, setShowRequestBlood] = useState(false);

    const handleRequestClick = () => {
        setShowRequestBlood(true);
    };

    return (
        <div className="user-dashboard">
            <WelcomeMessage />
            <div className="dashboard-sections">
                <button className="urgent-button" onClick={handleRequestClick}>
                    Need Urgent Blood
                </button>
                {showRequestBlood && <RequestBlood />}
                <ViewCamps />
                <DonationHistory />
                <UserProfile />
            </div>
        </div>
    );
}

export default UserDashboard;