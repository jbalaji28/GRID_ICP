import React from 'react';
import styled from 'styled-components';
import Navbar2 from './Navbar2';
import Footer from './Footer';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';

// Generate data points
const generateDataPoints = (cityCoords, numPoints) => {
  const [lat, lng] = cityCoords;
  const points = [];
  const radius = 0.5; // Approximate radius in degrees

  for (let i = 0; i < numPoints; i++) {
    const offsetLat = (Math.random() - 0.5) * radius;
    const offsetLng = (Math.random() - 0.5) * radius;
    points.push([lat + offsetLat, lng + offsetLng]);
  }

  return points;
};

const cities = {
  Delhi: [28.6139, 77.209],
  Indore:[22.7196 , 75.8577],
  
  Kolkata: [22.5726, 88.3639],
  Bangalore: [12.9716, 77.5946],
  Ahmedabad: [23.0225, 72.5714],
};

const numPointsPerCity = 20;
const allDataPoints = Object.values(cities).flatMap(city => generateDataPoints(city, numPointsPerCity));

const Evcharging = () => {
  return (
    <Container>
      <Navbar2 />
      <Content>
        <Section>
          <Title>Transforming India's EV Charging Infrastructure</Title>
          <Subtitle>
            Empowering Rural Roads with Renewable Energy Solutions
          </Subtitle>
          <Paragraph>
            India’s major roads, many of which pass through rural villages, are
            currently underserved by EV charging facilities. This lack of
            infrastructure has been a significant barrier to the widespread
            adoption of electric vehicles.
          </Paragraph>
          <Paragraph>
            Our decentralized grid system aims to change this by providing
            accessible, affordable, and renewable energy across India. By
            strategically placing EV charging stations along major roads and
            in rural areas, we ensure that every part of the country is
            connected to a sustainable energy network.
          </Paragraph>
        </Section>

        <Section>
          <MapWrapper>
            <MapTitle>Potential EV Charging Stations Across India</MapTitle>
            <MapContainer
              center={[22.3511148, 78.6677428]} // Centered on India
              zoom={5}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {allDataPoints.map((coords, index) => (
                <CircleMarker
                  key={index}
                  center={coords}
                  radius={4}
                  fillColor="#ff7800"
                  color="#000"
                  weight={1}
                  opacity={0.7}
                  fillOpacity={0.7}
                >
                  <Popup>
                    Potential EV Charging Station
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </MapWrapper>
        </Section>

        <Section>
          <FeatureTitle>Key Features & Benefits</FeatureTitle>
          <FeatureList>
            <FeatureItem>
              <FeatureHeading>Comprehensive Coverage</FeatureHeading>
              <FeatureText>
                Our solution ensures EV charging stations are available on all
                major roads, including those passing through rural areas. This
                provides a consistent and reliable charging network across the
                country.
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureHeading>Renewable Energy</FeatureHeading>
              <FeatureText>
                By leveraging renewable energy sources, we reduce carbon
                footprints and make EV charging more sustainable and
                environmentally friendly.
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureHeading>Cost-Effective Solutions</FeatureHeading>
              <FeatureText>
                Low-cost charging options help reduce the overall cost of EV
                ownership, making electric vehicles more accessible to the
                general public.
              </FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureHeading>Reduced Dependency on Batteries</FeatureHeading>
              <FeatureText>
                Reliable charging infrastructure eliminates the need for costly
                and wasteful battery purchases, supporting a more sustainable
                ecosystem.
              </FeatureText>
            </FeatureItem>
          </FeatureList>
        </Section>

        <Section>
          <ImpactTitle>Impact and Future Growth</ImpactTitle>
          <Paragraph>
            By integrating EV charging stations into our decentralized grid, we
            are not only addressing the current infrastructure gap but also
            paving the way for a cleaner, greener, and more connected India. Our
            approach ensures that both urban and rural areas benefit from
            renewable energy, driving the nation towards a sustainable future.
          </Paragraph>
          <Paragraph>
            As the demand for electric vehicles continues to grow, our
            infrastructure will expand, offering even more coverage and support
            for EV users across the country.
          </Paragraph>
        </Section>
      </Content>
      <Footer />
    </Container>
  );
};

export default Evcharging;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const Content = styled.div`
  flex: 1;
  padding: 40px 20px;
  background-color: #ffffff;
  max-width: 1200px;
  margin: auto;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: #555;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #666;
`;

const MapWrapper = styled.div`
  margin: 40px 0;
`;

const MapTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const FeatureTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const FeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FeatureItem = styled.div`
  flex-basis: 48%;
  margin-bottom: 20px;
`;

const FeatureHeading = styled.h4`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #444;
`;

const FeatureText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #666;
`;

const ImpactTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;
