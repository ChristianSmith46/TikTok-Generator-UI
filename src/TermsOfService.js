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

const SubSectionTitle = styled.h3`
  color: #666;
  margin-top: 15px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin: 10px 0;
`;

const List = styled.ul`
  margin: 10px 0 10px 20px;
  list-style-type: disc;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

const TermsOfService = () => {
  return (
    <Container>
      <Title>Terms of Service</Title>
      <Paragraph>
        Welcome to [Your App Name] ("the App"). By using our App, you agree to comply with and be bound by the following Terms of Service ("Terms"). Please review these Terms carefully. If you do not agree to these Terms, you should not use this App.
      </Paragraph>

      <SectionTitle>1. Acceptance of Terms</SectionTitle>
      <Paragraph>
        By accessing and using the App, you accept and agree to be bound by these Terms and any future modifications and additions to these Terms as published from time to time on the App.
      </Paragraph>

      <SectionTitle>2. Description of Service</SectionTitle>
      <Paragraph>
        The App allows users to generate videos using artificial intelligence (AI) and upload these videos to their TikTok accounts. The service includes AI video generation, editing tools, and integration with TikTok for direct uploads.
      </Paragraph>

      <SectionTitle>3. Eligibility</SectionTitle>
      <Paragraph>
        You must be at least 13 years old to use this App. By using this App, you represent and warrant that you meet the age requirement and have the legal capacity to enter into this agreement.
      </Paragraph>

      <SectionTitle>4. User Accounts</SectionTitle>
      <Paragraph>
        You may be required to create an account to use certain features of the App. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
      </Paragraph>

      <SectionTitle>5. User-Generated Content</SectionTitle>
      <SubSectionTitle>5.1 Ownership</SubSectionTitle>
      <Paragraph>
        You retain ownership of any content, including videos, that you upload or generate using the App ("User Content"). However, by uploading or generating User Content, you grant us a worldwide, non-exclusive, royalty-free, transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with the App and our business.
      </Paragraph>

      <SubSectionTitle>5.2 Responsibility</SubSectionTitle>
      <Paragraph>You are solely responsible for the User Content you upload or generate. You agree not to upload or generate any User Content that:</Paragraph>
      <List>
        <ListItem>Violates any third-party rights, including intellectual property rights.</ListItem>
        <ListItem>Is unlawful, defamatory, obscene, or otherwise objectionable.</ListItem>
        <ListItem>Contains any viruses, malware, or other harmful software.</ListItem>
      </List>

      <SubSectionTitle>5.3 Removal</SubSectionTitle>
      <Paragraph>
        We reserve the right to remove any User Content that violates these Terms or is otherwise objectionable at our sole discretion.
      </Paragraph>

      <SectionTitle>6. AI-Generated Content</SectionTitle>
      <Paragraph>The App uses AI to generate content based on user inputs. You acknowledge and agree that:</Paragraph>
      <List>
        <ListItem>AI-generated content is created based on patterns and may not always be accurate or appropriate.</ListItem>
        <ListItem>You are responsible for reviewing and editing AI-generated content before uploading it to TikTok.</ListItem>
        <ListItem>We do not guarantee the quality or accuracy of AI-generated content.</ListItem>
      </List>

      <SectionTitle>7. TikTok Integration</SectionTitle>
      <Paragraph>The App integrates with TikTok to allow for direct uploads. You acknowledge and agree that:</Paragraph>
      <List>
        <ListItem>You must comply with TikTok's terms of service and community guidelines when uploading content.</ListItem>
        <ListItem>We are not responsible for any actions taken by TikTok related to your uploaded content.</ListItem>
      </List>

      <SectionTitle>8. Prohibited Activities</SectionTitle>
      <Paragraph>You agree not to:</Paragraph>
      <List>
        <ListItem>Use the App for any illegal or unauthorized purpose.</ListItem>
        <ListItem>Interfere with or disrupt the App or servers or networks connected to the App.</ListItem>
        <ListItem>Attempt to gain unauthorized access to any portion of the App or any other accounts, systems, or networks.</ListItem>
      </List>

      <SectionTitle>9. Intellectual Property</SectionTitle>
      <Paragraph>All content and materials available on the App, including but not limited to text, graphics, website name, code, images, and logos are the intellectual property of [Your Company Name], and are protected by applicable copyright and trademark law. Any unauthorized use of these materials is prohibited.</Paragraph>

      <SectionTitle>10. Disclaimer of Warranties</SectionTitle>
      <Paragraph>The App is provided on an "as is" and "as available" basis. We make no warranties, expressed or implied, regarding the App, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</Paragraph>

      <SectionTitle>11. Limitation of Liability</SectionTitle>
      <Paragraph>In no event shall [Your Company Name], its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App.</Paragraph>

      <SectionTitle>12. Indemnification</SectionTitle>
      <Paragraph>You agree to indemnify and hold harmless [Your Company Name] and its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses arising out of or related to your use of the App or any violation of these Terms.</Paragraph>

      <SectionTitle>13. Modifications to the Service and Terms</SectionTitle>
      <Paragraph>We reserve the right to modify or discontinue the App at any time without notice. We also reserve the right to change these Terms at any time. Your continued use of the App after any such changes constitutes your acceptance of the new Terms.</Paragraph>

      <SectionTitle>14. Governing Law</SectionTitle>
      <Paragraph>These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.</Paragraph>

      <SectionTitle>15. Contact Information</SectionTitle>
      <Paragraph>If you have any questions about these Terms, please contact us at [Your Contact Information].</Paragraph>

      <Paragraph>By using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</Paragraph>
    </Container>
  );
};

export default TermsOfService;
