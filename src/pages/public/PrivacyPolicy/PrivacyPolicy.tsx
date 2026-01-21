import React from 'react';
import PageHeader from '../../../components/common/PageHeader/PageHeader';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <PageHeader title="Privacy Policy" />
      
      <div className="privacy-content">
        <div className="policy-wrapper">
          <section className="policy-section">
            <h2>1. Introduction</h2>
            <p>
              J.Ganes Consulting ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>
              We collect information in various ways, including:
            </p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, company information, and billing information that you voluntarily provide when creating an account or requesting services.</li>
              <li><strong>Automatic Information:</strong> Browser type, IP address, pages visited, time and date of visit, and referring URL.</li>
              <li><strong>Cookies and Tracking Technologies:</strong> We use cookies to track user preferences and enhance user experience.</li>
              <li><strong>Business Information:</strong> Reports, documents, and data related to your consulting engagement.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>
              We use the information we collect for the following purposes:
            </p>
            <ul>
              <li>Delivering consulting services and generating reports</li>
              <li>Communicating with you about your account and services</li>
              <li>Processing payments and billing</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
              <li>Sending marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information, including:
            </p>
            <ul>
              <li>SSL/TLS encryption for data in transit</li>
              <li>Secure password storage using modern hashing algorithms</li>
              <li>Regular security audits and penetration testing</li>
              <li>Restricted access to sensitive data</li>
              <li>Compliance with GDPR and other data protection regulations</li>
            </ul>
            <p>
              However, no security system is completely secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:
            </p>
            <ul>
              <li>With service providers who assist us in operating our website and conducting business</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With your consent for other purposes</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. Your Rights and Choices</h2>
            <p>
              You have the following rights regarding your personal information:
            </p>
            <ul>
              <li>Right to access your data</li>
              <li>Right to correct or update your information</li>
              <li>Right to request deletion of your data</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@jganesconsulting.com.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Cookies and Tracking</h2>
            <p>
              We use cookies to enhance your experience. You can control cookie settings through your browser. Please note that disabling cookies may affect the functionality of our website.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review the privacy policies of any third-party websites before providing your information.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When your information is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information and terminate the child's account.
            </p>
          </section>

          <section className="policy-section">
            <h2>11. International Users</h2>
            <p>
              If you are accessing our services from outside the United States, please note that your information may be transferred to, stored in, and processed in the United States. By using our services, you consent to such transfer and processing.
            </p>
          </section>

          <section className="policy-section">
            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website with a new effective date.
            </p>
          </section>

          <section className="policy-section">
            <h2>13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="contact-info">
              <p><strong>J.Ganes Consulting</strong></p>
              <p>Email: privacy@jganesconsulting.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Business Street, Suite 100, New York, NY 10001</p>
            </div>
          </section>

          <section className="policy-section last">
            <p className="effective-date">
              <strong>Effective Date:</strong> January 20, 2026
            </p>
            <p className="effective-date">
              <strong>Last Updated:</strong> January 20, 2026
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
