// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { auth, signInWithEmailAndPassword, signInWithPopup, provider } from '../firebase';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error signing in with email and password:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google login result:", result);
      navigate('/dashboard');
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <Container>
      <Box>
        <title style={{marginBottom: "20px", fontSize: '24px', color: '#333' }}>Login</title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleGoogleLogin} backgroundColor="#4285F4">Login with Google</Button>
      </Box>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
`;

const Box = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  outline: none;  // Ensures no default outline on focus
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: ${props => props.backgroundColor || '#007bff'};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
  transition: background-color 0.3s;  // Smooth transition for background color

  &:hover {
    background-color: ${props => props.backgroundColor ? '#357ae8' : '#0056b3'};
  }
`;
