import React from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import Navbar2 from './Navbar2'; // Import Navbar2
import Footer from './Footer'; // Import Footer

// Sample financial data
const financialData = [
  { name: 'Q1', revenue: 50000, expenses: 30000 },
  { name: 'Q2', revenue: 70000, expenses: 45000 },
  { name: 'Q3', revenue: 60000, expenses: 35000 },
  { name: 'Q4', revenue: 80000, expenses: 50000 },
];

const FinancialReportsPage = () => {
  return (
    <Container>
      <Navbar2 />
      <ContentWrapper>
        <MainContent>
          <Section>
            <SectionTitle>Quarterly Financial Overview</SectionTitle>
            <Description>
              The quarterly financial overview provides insights into the company's revenue and expenses over the past four quarters. This section helps to analyze financial performance trends and identify areas of improvement.
            </Description>
            <ChartContainer>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={financialData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                  <Line type="monotone" dataKey="expenses" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </Section>

          <Section>
            <SectionTitle>Annual Financial Summary</SectionTitle>
            <Description>
              This section presents a summary of the annual financial results, focusing on key metrics like total revenue, net profit, and operational costs. These figures provide a snapshot of the company's financial health over the year.
            </Description>
            <ChartContainer>
              {/* Add a chart or data visualization here for the annual summary */}
            </ChartContainer>
          </Section>

          <Section>
            <SectionTitle>Profit & Loss Statements</SectionTitle>
            <Description>
              The Profit & Loss Statements detail the company’s income and expenditures, offering a comprehensive view of profitability. This section is crucial for assessing the financial efficiency and sustainability of the business.
            </Description>
            <ChartContainer>
              {/* Add a chart or data visualization here for the P&L statement */}
            </ChartContainer>
          </Section>

          <Section>
            <SectionTitle>Balance Sheets</SectionTitle>
            <Description>
              The Balance Sheets provide a snapshot of the company’s assets, liabilities, and equity at a specific point in time. This section is essential for understanding the financial position and liquidity of the business.
            </Description>
            <ChartContainer>
              {/* Add a chart or data visualization here for the balance sheet */}
            </ChartContainer>
          </Section>
        </MainContent>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default FinancialReportsPage;

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
