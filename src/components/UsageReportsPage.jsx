import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Navbar2 from './Navbar2'; // Import the new Navbar2 component
import Footer from './Footer'; // Import Footer component

// Sample data for charts
const usageData = [
  { name: 'Jan', residential: 2400, commercial: 1400 },
  { name: 'Feb', residential: 3000, commercial: 2000 },
  { name: 'Mar', residential: 3200, commercial: 2400 },
  { name: 'Apr', residential: 2500, commercial: 1900 },
  { name: 'May', residential: 2800, commercial: 2200 },
  { name: 'Jun', residential: 2900, commercial: 2300 },
  { name: 'Jul', residential: 3300, commercial: 2500 },
];

const breakdownData = [
  { category: 'Residential', usage: 19000 },
  { category: 'Commercial', usage: 13000 },
  { category: 'Industrial', usage: 8000 },
  { category: 'Others', usage: 4000 },
];

const UsageReportsPage = () => {
  return (
    <Container>
      <Navbar2 />
      <ContentWrapper>
        <Sidebar>
          <SidebarItem>Dashboard</SidebarItem>
          <SidebarItem>Usage Reports</SidebarItem>
          </Sidebar>
        <MainContent>
          <Section>
            <SectionTitle>Usage Overview</SectionTitle>
            <SummaryCards>
              <Card>
                <CardTitle>Total Energy Consumed</CardTitle>
                <CardValue>72,000 kWh</CardValue>
              </Card>
              <Card>
                <CardTitle>Total Residential Usage</CardTitle>
                <CardValue>35,000 kWh</CardValue>
              </Card>
              <Card>
                <CardTitle>Total Commercial Usage</CardTitle>
                <CardValue>20,000 kWh</CardValue>
              </Card>
              <Card>
                <CardTitle>Total Industrial Usage</CardTitle>
                <CardValue>10,000 kWh</CardValue>
              </Card>
            </SummaryCards>
          </Section>
          <Section>
            <SectionTitle>Monthly Usage Trends</SectionTitle>
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="residential" stroke="#8884d8" />
                  <Line type="monotone" dataKey="commercial" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </Section>
          <Section>
            <SectionTitle>Usage Breakdown</SectionTitle>
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={breakdownData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="usage" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </Section>
        </MainContent>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default UsageReportsPage;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f4f4; /* Light background color for better readability */
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
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 200px;
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
