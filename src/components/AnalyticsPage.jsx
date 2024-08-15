import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import Navbar2 from './Navbar2'; // Import Navbar2 component
import Footer from './Footer'; // Import Footer component

// Sample data for charts
const sampleData = [
  { name: 'Jan', energyConsumed: 4000, energyProduced: 2400 },
  { name: 'Feb', energyConsumed: 3000, energyProduced: 1398 },
  { name: 'Mar', energyConsumed: 2000, energyProduced: 9800 },
  { name: 'Apr', energyConsumed: 2780, energyProduced: 3908 },
  { name: 'May', energyConsumed: 1890, energyProduced: 4800 },
  { name: 'Jun', energyConsumed: 2390, energyProduced: 3800 },
  { name: 'Jul', energyConsumed: 3490, energyProduced: 4300 },
];

const AnalyticsPage = () => {
  return (
    <Container>
      <Navbar2 />
      <ContentWrapper>
        <Sidebar>
          <SidebarItem>
            <StyledLink to="/usage-reports">Usage Reports</StyledLink>
          </SidebarItem>
          <SidebarItem>
            <StyledLink to="/financial-reports">Financial Reports</StyledLink>
          </SidebarItem>
          <SidebarItem>
            <StyledLink to="/performance-metrics">Performance Metrics</StyledLink>
          </SidebarItem>
        </Sidebar>
        <MainContent>
          <Section>
            <SectionTitle>Dashboard Summary</SectionTitle>
            <SummaryCards>
              <Card>
                <CardTitle>Total Energy Consumed</CardTitle>
                <CardValue>500,000 kWh</CardValue>
              </Card>
              <Card>
                <CardTitle>Total Energy Produced</CardTitle>
                <CardValue>600,000 kWh</CardValue>
              </Card>
              <Card>
                <CardTitle>Active Nodes</CardTitle>
                <CardValue>75</CardValue>
              </Card>
            </SummaryCards>
          </Section>
          <Section>
            <SectionTitle>Usage Reports</SectionTitle>
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sampleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="energyConsumed" stroke="#8884d8" />
                  <Line type="monotone" dataKey="energyProduced" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </Section>
          <Section>
            <SectionTitle>Financial Reports</SectionTitle>
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sampleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="energyConsumed" stroke="#ff7300" />
                  <Line type="monotone" dataKey="energyProduced" stroke="#387908" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </Section>
          <Section>
            <SectionTitle>Performance Metrics</SectionTitle>
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={sampleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="energyConsumed" stroke="#0088FE" />
                  <Line type="monotone" dataKey="energyProduced" stroke="#00C49F" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </Section>
        </MainContent>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default AnalyticsPage;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarItem = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 10px;
  &:hover {
    background-color: #444;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const SummaryCards = styled.div`
  display: flex;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex: 1;
`;

const CardTitle = styled.div`
  font-size: 18px;
  margin-bottom: 5px;
`;

const CardValue = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ChartContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
