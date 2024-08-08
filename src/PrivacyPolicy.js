import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 50px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 600px) {
    width: 95%;
    padding: 15px;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #444;
`;

const SectionTitle = styled.h2`
  color: #555;
  margin-top: 20px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin: 10px 0;
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Paragraph>Welcome to BreachMC ("we", "our", "us"). We are committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by BreachMC.</Paragraph>

      <SectionTitle>1. Information We Collect</SectionTitle>
      <Paragraph>We collect information from you in several ways when you use our application:</Paragraph>
      <ul>
        <li><strong>Account Information:</strong> When you create an account, we collect your username, password, email address, and TikTok login information.</li>
        <li><strong>Profile Information:</strong> We collect information that you choose to add to your profile, such as a profile picture.</li>
        <li><strong>Usage Data:</strong> We collect information about your activity on our application, such as the videos you generate and upload.</li>
        <li><strong>Device Information:</strong> We collect information about the device you use to access our application, including IP address, browser type, and operating system.</li>
      </ul>

      <SectionTitle>2. How We Use Your Information</SectionTitle>
      <Paragraph>We use the information we collect in the following ways:</Paragraph>
      <ul>
        <li><strong>To Provide and Improve Our Service:</strong> We use your information to operate, maintain, and improve our application.</li>
        <li><strong>To Communicate with You:</strong> We use your information to communicate with you about your account and respond to your inquiries.</li>
        <li><strong>To Personalize Your Experience:</strong> We use your information to personalize the content and features you see on our application.</li>
        <li><strong>To Ensure Security:</strong> We use your information to monitor and enhance the security of our application.</li>
      </ul>

      <SectionTitle>3. Sharing Your Information</SectionTitle>
      <Paragraph>We do not share your personal information with third parties except in the following circumstances:</Paragraph>
      <ul>
        <li><strong>With Your Consent:</strong> We may share your information with third parties if you give us permission to do so.</li>
        <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to a valid request from a law enforcement authority.</li>
        <li><strong>To Protect Our Rights:</strong> We may disclose your information to enforce our terms of service and protect the rights, property, or safety of BreachMC, our users, and others.</li>
      </ul>

      <SectionTitle>4. Data Security</SectionTitle>
      <Paragraph>We implement appropriate technical and organizational measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.</Paragraph>

      <SectionTitle>5. Data Retention</SectionTitle>
      <Paragraph>We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. If you delete your account, we will delete your personal information within a reasonable period of time, except where we are required to retain certain information for legal purposes.</Paragraph>

      <SectionTitle>6. Your Rights</SectionTitle>
      <Paragraph>You have the following rights regarding your personal information:</Paragraph>
      <ul>
        <li><strong>Access:</strong> You have the right to request access to the personal information we hold about you.</li>
        <li><strong>Correction:</strong> You have the right to request that we correct any inaccuracies in your personal information.</li>
        <li><strong>Deletion:</strong> You have the right to request that we delete your personal information.</li>
        <li><strong>Objection:</strong> You have the right to object to the processing of your personal information.</li>
      </ul>

      <SectionTitle>7. Changes to This Privacy Policy</SectionTitle>
      <Paragraph>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our application. You are advised to review this Privacy Policy periodically for any changes.</Paragraph>

      <SectionTitle>8. Contact Us</SectionTitle>
      <Paragraph>If you have any questions about this Privacy Policy, please contact us at [Your Contact Information].</Paragraph>
    </Container>
  );
};

export default PrivacyPolicy;
