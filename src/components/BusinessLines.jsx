import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './BusinessLines.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const BusinessLines = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [nearestLocation, setNearestLocation] = useState(null);
  const [notification, setNotification] = useState('');

  const locationsCoimbatore = [
    { lat: 11.0146, lon: 76.9885, name: 'Panel Paramesh' },
    { lat: 11.0137, lon: 76.9892, name: 'Panel Jagan' },
    { lat: 11.0160, lon: 76.9875, name: 'Panel John' },
    { lat: 11.0153, lon: 76.9905, name: 'Panel Maniki' },
    { lat: 11.0170, lon: 76.9898, name: 'Panel Addhu' },
    { lat: 11.0141, lon: 76.9912, name: 'Panel Dhanus' },
    { lat: 11.0129, lon: 76.9889, name: 'Panel Depak' },
    { lat: 11.0163, lon: 76.9900, name: 'Location 8' },
    { lat: 11.0150, lon: 76.9880, name: 'Location 9' },
    { lat: 11.0135, lon: 76.9872, name: 'Grid Coimbatore' },
  ];

  const locationsErode = [
    { lat: 11.6833, lon: 77.7167, name: 'Panel A' },
    { lat: 11.6844, lon: 77.7175, name: 'Panel B' },
    { lat: 11.6825, lon: 77.7180, name: 'Panel C' },
    { lat: 11.6816, lon: 77.7155, name: 'Panel D' },
    { lat: 11.6850, lon: 77.7162, name: 'Panel E' },
    { lat: 11.6860, lon: 77.7178, name: 'Panel F' },
    { lat: 11.6870, lon: 77.7188, name: 'Panel G' },
    { lat: 11.6880, lon: 77.7195, name: 'Panel H' },
    { lat: 11.6890, lon: 77.7202, name: 'Panel I' },
    { lat: 11.6900, lon: 77.7210, name: 'Panel J' },
  ];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const currentPos = [latitude, longitude];
        setCurrentPosition(currentPos);
        
        const nearestLocation = findNearestGrid(currentPos);
        setNearestLocation(nearestLocation);
        updateNotification(nearestLocation);
      },
      (error) => {
        console.error("Error getting the current position:", error);
      }
    );
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const findNearestGrid = (currentPos) => {
    if (!currentPos) return null;

    const allLocations = [...locationsCoimbatore, ...locationsErode];
    let nearestLocation = null;
    let minDistance = Infinity;

    allLocations.forEach(location => {
      const distance = calculateDistance(currentPos[0], currentPos[1], location.lat, location.lon);
      if (distance < minDistance) {
        minDistance = distance;
        nearestLocation = location;
      }
    });

    return nearestLocation;
  };

  const updateNotification = (nearestLocation) => {
    if (nearestLocation) {
      const isInCoimbatore = locationsCoimbatore.some(loc => loc.name === nearestLocation.name);
      const notificationMessage = isInCoimbatore
        ? 'The nearest grid location is in Coimbatore.'
        : 'The nearest grid location is in Erode.';
      setNotification(notificationMessage);
    } else {
      setNotification('Unable to determine the nearest grid location.');
    }
  };

  const handleRequestPower = () => {
    window.location.href = '/request-power';
  };

  return (
    <div className="business-lines">
      <Navbar />
      <div className="content-wrapper">
    
        <main className="main-content">
          <h1>Business Lines</h1>
          <section id="business-ideas" className="business-ideas">
            <h2>Our Business Ideas</h2>
            <p>We provide innovative energy solutions to vulnerable communities...</p>
          </section>
          <section id="map" className="map-section">
            <div className="map-card">
              <MapContainer center={[11.0146, 76.9895]} zoom={15} style={{ height: '600px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {currentPosition && (
                  <Marker position={currentPosition}>
                    <Popup>
                      <div className="popup-content">
                        <p>This is your current location.</p>
                        {nearestLocation && <p>Nearest grid: {nearestLocation.name}</p>}
                      </div>
                    </Popup>
                  </Marker>
                )}
                {locationsCoimbatore.map((location, index) => (
                  <Marker key={`coimbatore-${index}`} position={[location.lat, location.lon]}>
                    <Popup>{location.name}</Popup>
                  </Marker>
                ))}
                <Polyline positions={locationsCoimbatore.map(loc => [loc.lat, loc.lon])} color="blue" />
                {locationsErode.map((location, index) => (
                  <Marker key={`erode-${index}`} position={[location.lat, location.lon]}>
                    <Popup>{location.name}</Popup>
                  </Marker>
                ))}
                <Polyline positions={locationsErode.map(loc => [loc.lat, loc.lon])} color="green" />
              </MapContainer>
              <div className="notification">
                {notification && <p>{notification}</p>}
              </div>
              <button className="request-power-btn" onClick={handleRequestPower}>Request Power</button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessLines;
