// src/components/RequestPower.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import { addPowerRequest } from '../firebase'; // Import the function
import './RequestPower.css';

// Function to calculate rent based on power needed
const calculateRent = (power) => {
  return power * 5; // Example calculation: 5 rupees per kWh
};

const RequestPower = () => {
  const [formData, setFormData] = useState({
    powerNeeded: '',
    location: '',
    phoneNumber: '',
    timeFrame: '',
  });
  const [rentPrice, setRentPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (formData.powerNeeded) {
      setRentPrice(calculateRent(Number(formData.powerNeeded)));
    }
  }, [formData.powerNeeded]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addPowerRequest({ ...formData, rentPrice });
      toast.success('Your request has been successfully submitted! Redirecting to the payment page...');
      setTimeout(() => {
        navigate('/payment');
      }, 2000); // Adjust the delay as needed
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while submitting your request. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="sm" className="request-power-container">
        <Paper elevation={3} className="request-power-paper">
          <Box
            component="form"
            className="request-power-form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, padding: 3 }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Request Power Easily
            </Typography>
            <Typography variant="body1" paragraph>
              We make it easy for you to request power for your home or business. Fill out the form below with the necessary details, and we will process your request promptly. Our team is committed to providing reliable and efficient energy solutions.
            </Typography>
            <TextField
              label="Minimum Power Needed (in kWh)"
              type="number"
              id="powerNeeded"
              name="powerNeeded"
              value={formData.powerNeeded}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              helperText="Specify the amount of power needed for your requirements."
            />
            <TextField
              label="Location"
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              helperText="Provide your address or the location where power is needed."
            />
            <TextField
              label="Phone Number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              helperText="Enter your contact number for follow-up."
            />
            <TextField
              label="Time Frame (in mins)"
              type="text"
              id="timeFrame"
              name="timeFrame"
              value={formData.timeFrame}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
              helperText="Specify the duration for which power is required."
            />
            <Typography variant="h6" component="p" className="rent-price">
              Estimated Rent Price: ₹{rentPrice.toFixed(2)}
            </Typography>
            <Button type="submit" variant="contained" color="primary">
              Submit Request
            </Button>
          </Box>
        </Paper>
      </Container>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default RequestPower;
