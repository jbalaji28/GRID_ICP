// src/components/DashboardPage.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar component
import Footer from './Footer'; // Import Footer component

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Navbar /> {/* Add Navbar here */}
      <ContentWrapper>
        <Sidebar>
          <Logo>MyApp</Logo>
          <Nav>
            <NavItem onClick={() => navigate('/dashboard')}>Dashboard</NavItem>
            <NavItem onClick={() => navigate('/profile')}>Profile</NavItem>
            <NavItem onClick={() => navigate('/settings')}>Settings</NavItem>
            <NavItem onClick={() => navigate('/logout')}>Logout</NavItem>
          </Nav>
        </Sidebar>
        <Main>
          <Header>
            <Title>Dashboard</Title>
          </Header>
          <Content>
            <Section>
              <SectionTitle>Overview</SectionTitle>
              <CardGrid>
                <Card>
                  <CardTitle>Monthly Revenue by a single provider</CardTitle>
                  <CardValue>₹15,000+</CardValue>
                </Card>
                <Card>
                  <CardTitle>your investments</CardTitle>
                  <CardValue>150 RS</CardValue>
                </Card>
                <Card>
                  <CardTitle>Active Users in our app</CardTitle>
                  <CardValue>1,200</CardValue>
                </Card>
              </CardGrid>
            </Section>
            <Section>
              <SectionTitle>Recent Activity</SectionTitle>
              <ActivityList>
                <ActivityItem>John Daris wants to have a chat with you.</ActivityItem>
                <ActivityItem>Johnathan daris wants to share his experience about  a purchase.</ActivityItem>
                <ActivityItem>what About you?</ActivityItem>
              </ActivityList>
            </Section>
          </Content>
        </Main>
      </ContentWrapper>
      <Footer /> {/* Add Footer here */}
    </Container>
  );
};

export default DashboardPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Arial', sans-serif; /* Clean font */
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden; /* Prevent overflow issues */
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #2c3e50; /* Darker, professional color */
  color: #ecf0f1; /* Light text color for contrast */
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  height: 100vh; /* Full height */
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px; /* Increased space */
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavItem = styled.div`
  padding: 12px;
  cursor: pointer;
  border-radius: 6px; /* Slightly rounded corners */
  margin-bottom: 10px;
  font-size: 16px; /* Adjusted font size */
  transition: background-color 0.3s; /* Smooth transition */

  &:hover {
    background-color: #34495e; /* Lighter hover color */
  }
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #ecf0f1; /* Light background for main area */
`;

const Header = styled.header`
  background-color: #3498db; /* Professional blue */
  color: white;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin: 0;
  font-size: 26px; /* Slightly larger title */
`;

const Content = styled.div`
  padding: 30px; /* Increased padding */
  flex: 1;
`;

const Section = styled.section`
  margin-bottom: 30px; /* Increased spacing between sections */
`;

const SectionTitle = styled.h2`
  font-size: 22px; /* Slightly larger section title */
  margin-bottom: 15px; /* Increased space below section title */
  color: #2c3e50; /* Darker color for text */
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive grid */
  gap: 20px; /* Space between cards */
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.div`
  font-size: 18px;
  color: #34495e; /* Darker text for card titles */
`;

const CardValue = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: #2ecc71; /* Green color for values */
`;

const ActivityList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ActivityItem = styled.li`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 16px; /* Adjusted font size */
`;
