import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';
import Home from './Home';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 2.5em;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  width: 50px;
`;


const Footer = styled.footer`
  background-color: #282c34;
  padding: 10px;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const App = () => {

  return (
    <Router>
      <AppContainer>
        <Header>
          <LogoLink to="/">
            <Logo src="/BreachMC_icon_192px.png" alt="BreachMC Logo" />
          </LogoLink>
          <Title>BreachMC</Title>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer>
          <FooterLink to="/tos">Terms of Service</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
        </Footer>
      </AppContainer>
    </Router>
  );
};

export default App;
