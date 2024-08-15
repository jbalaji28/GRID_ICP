import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Homepage.css'; // Import your CSS file for additional styling
import Navbar from './Navbar'; // Import Navbar component
import Navbar2 from './Navbar2'; // Import Navbar2 component
import CountUp from 'react-countup'; // Import CountUp component
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material'; // Import MUI components
import Footer from './Footer'; // Import Footer component

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar /> {/* Add Navbar here */}
      <Navbar2 /> {/* Add Navbar2 here */}
     
      <header className="header">
        <div className="logo-container">
          <img src="https://5.imimg.com/data5/SELLER/Default/2023/4/303127071/LW/TC/LU/56406864/solar-epc-consultancy-service-500x500.png" alt="Logo" className="logo-image" />
          <div className="logo-text">
            <span className="logo-orange">Paramesh</span> <span className="logo-white">Share</span>
          </div>
        </div>
      </header>

      <section className="hero">
        <video autoPlay muted loop>
          <source src="https://videos.pexels.com/video-files/9790080/9790080-sd_640_360_30fps.mp4" type="video/mp4" />
        </video>
        <div className="hero-content">
          <h1>PROVIDING VULNERABLE COMMUNITIES ACCESS TO</h1>
          <h1 className="highlight">AWESOME ENERGY SERVICES</h1>
        </div>
      </section>

      <section id="impact" className="impact-stats">
        <Typography variant="h2" component="h2" gutterBottom>
          Our Global Impact with Solar Grids
        </Typography>
        <div className="stats-grid">
          {/* Existing Cards */}
          {[
            {
              title: 'Peer to Peer Microgrids',
              image: 'https://www.mindk.com/wp-content/uploads/2022/05/brooklyn-microgrid-min.png',
              count: 120,
            },
            {
              title: 'Lives Impacted',
              image: 'https://cdn.shopify.com/s/files/1/2980/5140/files/nitin_grande.jpg?v=1593253088',
              count: 80000,
            },
            {
              title: 'EV Transports Driven',
              image: 'https://1charging.com/wp-content/uploads/2024/02/Screenshot-2024-02-08-202338.png',
              count: 2000000,
            },
            {
              title: 'mtCO2 Emissions Reduced',
              image: 'https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs43017-022-00285-w/MediaObjects/43017_2022_285_Fig1_HTML.png',
              count: 2700,
            },
          ].map((stat, index) => (
            <Card key={index} className="stat-card">
              <CardMedia
                component="img"
                height="140"
                image={stat.image}
                alt={stat.title}
                className="stat-image"
              />
              <CardContent>
                <Typography variant="h3">
                  <CountUp end={stat.count} duration={5} />+
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {stat.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
          {/* New Card for EV Charging */}
          <Card className="stat-card">
            <CardMedia
              component="img"
              height="140"
              image="https://www.chargepoint.com/sites/default/files/blog-photos/2022-04/DC-fast-charging-site-design.png" // Replace with your image URL
              alt="EV Charging Stations"
              className="stat-image"
            />
            <CardContent>
              <Typography variant="h3">
                EV Charging Stations
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Discover our network of EV charging stations powered by renewable energy.
              </Typography>
              <Button component={Link} to="/evcharging" variant="contained" color="primary">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="grid-formation">
        <Typography variant="h2" component="h2" gutterBottom>
          Our Grid Formation
        </Typography>
        <img src="https://solarlinkaustralia.com.au/wp-content/uploads/2023/05/reasons-to-have-solar-battery-for-home.jpg" alt="Grid Formation" className="grid-image" />
      </section>

      <section className="cta">
        <Typography variant="h3" component="h3" gutterBottom>
          Ready to Join Us?
        </Typography>
        
      </section>

      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default HomePage;
