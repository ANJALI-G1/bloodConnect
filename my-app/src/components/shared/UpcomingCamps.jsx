import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, CardMedia } from '@mui/material';
import './Upcoming-camps.css';
import donateImage from "../img/donate.png";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
const camps = [
    {
        id: 1,
        name: 'City Hospital Blood Drive',
        date: '2025-03-01',
        location: 'City Hospital, Main Road',
        image: 'https://stthomas.ac.in/wp-content/uploads/2022/08/Blood-Donation-Camp-OSA-Dubai-682x1024.jpeg',
        registration: 'https://forms.gle/exampleform1'
    },
    // {
    //     id: 2,
    //     name: 'Community Hall Blood Camp',
    //     date: '2025-03-05',
    //     location: 'Community Hall, Downtown',
    //     image: '/img/camp2.jpg',
    //     registration: 'https://forms.gle/exampleform2'
    // },
    {
        id: 3,
        name: 'University Blood Donation',
        date: '2025-03-10',
        location: 'University Campus, Block A',
        image: 'https://th.bing.com/th/id/R.5e31477d482a5766e0ef29089dc43c92?rik=hvCNdJICFHWB5Q&riu=http%3a%2f%2fimsec.ac.in%2fimages%2fnews%2f1669874122blood-donation-camp-on-5th-december-2022.jpg&ehk=OH3nvjqS1czYHIDlAAMJ17M5ULgXSe4tAgrsLjoNemg%3d&risl=&pid=ImgRaw&r=0',
        registration: 'https://forms.gle/exampleform3'
    },
    {
        id: 4,
        name: 'Corporate Office Blood Drive',
        date: '2025-03-15',
        location: 'Corporate Office, Tower B',
        image: 'https://th.bing.com/th/id/OIP.RaapSuP4bluzy_G7Fsc7RAHaIB?w=768&h=832&rs=1&pid=ImgDetMain',
        registration: 'https://forms.gle/exampleform4'
    },
    {
        id: 5,
        name: 'Local Park Blood Donation Camp',
        date: '2025-03-20',
        location: 'Local Park, Green Street',
        image: 'https://th.bing.com/th/id/OIP.RDX-YuSnEalEXq3mOZbfWgHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain',
        registration: 'https://forms.gle/exampleform5'
    },
    {
        id: 6,
        name: 'Mall Blood Donation Event',
        date: '2025-03-25',
        location: 'City Mall, First Floor',
        image: 'https://4.bp.blogspot.com/-KN3xbgnPXVo/VR0OugsxG9I/AAAAAAAAADs/THpIB6r4Id4/s1600/ashik+poster.jpg',
        registration: 'https://forms.gle/exampleform6'
    },
    {
        id: 7,
        name: 'Neighborhood Blood Drive',
        date: '2025-03-30',
        location: 'Neighborhood Center, Elm Street',
        image: 'https://th.bing.com/th/id/OIP.wGRU4vfFYykXqa6snai33AHaKf?w=723&h=1024&rs=1&pid=ImgDetMain',
        registration: 'https://forms.gle/exampleform7'
    },
    {
        id: 8,
        name: 'Sports Complex Blood Camp',
        date: '2025-04-05',
        location: 'Sports Complex, Field 3',
        image: 'https://intranet.cb.amrita.edu/sites/default/files/2022-06/Blood_donation_camp_20_5_2022.jpeg',
        registration: 'https://forms.gle/exampleform8'
    },
    {
        id: 9,
        name: 'Library Blood Donation',
        date: '2025-04-10',
        location: 'City Library, Conference Hall',
        image: 'https://th.bing.com/th/id/OIP.vbM4t5cyyYgHRZ1c2Xza6QHaFA?rs=1&pid=ImgDetMain',
        registration: 'https://forms.gle/exampleform9'
    },
    {
        id: 10,
        name: 'Town Hall Blood Drive',
        date: '2025-04-15',
        location: 'Town Hall, Civic Center',
        image: 'https://i.pinimg.com/736x/e4/98/25/e4982552e975c08baba0711b7ec2c357.jpg',
        registration: 'https://forms.gle/exampleform10'
    }
];

const UpcomingCamps = () => {
    const [highlightedCard, setHighlightedCard] = useState(null);

    const handleClick = (id, registrationLink) => {
        setHighlightedCard(id);
        window.open(registrationLink, '_blank'); // Open the Google form link
    };
     const navigate = useNavigate(); // Hook for navigation
    

    return (
        <>
            <nav className='navbar'>
                <div className="div1" ><HomeIcon onClick={() => navigate("/Home")} /></div>
                <div className="div2">
                <Button className='nav_button'>
                    Find a location in your area
                </Button>
                <Button className='nav_button btn'>
                    Join us
                </Button>
                </div>
               
            </nav>
            <div className="cards">
                <h1>Blood Donation Camps</h1>
                <div className="imglogo">
                    <img src={donateImage} alt="Donate" width={150} />
                </div>
            </div>
            <div className="hey">
                <Grid container spacing={3}>
                    {camps.map(camp => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={camp.id}>
                            <Card
                                className={`camp-card ${highlightedCard === camp.id ? 'highlight' : ''}`}
                                sx={{
                                    height: 300, // Ensures all cards are the same height
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                                onClick={() => handleClick(camp.id, camp.registration)}
                            ><CardMedia
                            component="img"
                            image={camp.image}
                            alt={camp.name}
                            sx={{
                                height: "140px", // Set a fixed height for the image
                                width: "100%", // Make the image take up the card width
                                objectFit: "cover", // Prevent distortion and crop excess image
                            }}
                        />
                        

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography variant="h6" component="div">
                                        {camp.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Date: {camp.date}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Location: {camp.location}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className="social">
                <FacebookIcon className='icon' />
                <InstagramIcon className='icon' />
                <YouTubeIcon className='icon' />
                <TwitterIcon className='icon' />
            </div>
        </>
    );
};

export default UpcomingCamps;