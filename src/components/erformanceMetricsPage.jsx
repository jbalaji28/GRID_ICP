import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import Navbar2 from './Navbar2'; // Import Navbar2 component
import Footer from './Footer'; // Import Footer component

// Sample performance metrics data
const performanceData = [
  { name: 'Jan', efficiency: 85, uptime: 95 },
  { name: 'Feb', efficiency: 88, uptime: 97 },
  { name: 'Mar', efficiency: 80, uptime: 94 },
  { name: 'Apr', efficiency: 90, uptime: 98 },
  { name: 'May', efficiency: 92, uptime: 99 },
  { name: 'Jun', efficiency: 87, uptime: 96 },
  { name: 'Jul', efficiency: 89, uptime: 97 },
];

const PerformanceMetricsPage = () => {
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
            <SectionTitle>Performance Metrics Overview</SectionTitle>
            <Description>
              This section provides an overview of the key performance metrics of the system. It includes efficiency and uptime statistics, helping to gauge the operational effectiveness and reliability of the system.
            </Description>
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="efficiency" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uptime" stroke="#82ca9d" />
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

export default PerformanceMetricsPage;

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

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #555;
`;

const ChartContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
