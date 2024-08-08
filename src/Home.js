import React from 'react';
import styled from 'styled-components';
import ButtonBlack from './Button_Black.svg';

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const LoginButton = styled.button`
  background-color: #25f4ee;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Description = styled.p`
  font-size: 1.5em;
  color: #555;
  max-width: 800px;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const Home = () => {
    const handleLogin = () => {
        // Implement TikTok login functionality here
        alert('Login with TikTok');
    };

    return (
        <Main>
            <h2>Welcome to BreachMC</h2>
            <LoginButton onClick={handleLogin}>
                <img src={ButtonBlack} alt="Button Black" />
            </LoginButton>
            <Description>
                BreachMC harnesses the power of AI to generate captivating and imaginative stories for you. 
                With just a few clicks, you can create amazing content and share it with your audience on TikTok. 
                Connect with your TikTok account to upload and showcase your unique stories, and let the world 
                experience the magic you’ve created.
            </Description>
        </Main>
    );
};

export default Home;