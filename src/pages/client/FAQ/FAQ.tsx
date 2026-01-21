import React, { useState } from 'react';
import PageHeader from '../../../components/common/PageHeader/PageHeader';
import './FAQ.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'What is J.Ganes Consulting?',
      answer: 'J.Ganes Consulting is a leading consulting firm specializing in business strategy, operations, and digital transformation. We help organizations optimize their processes and achieve their strategic goals.'
    },
    {
      id: 2,
      question: 'How can I access my reports?',
      answer: 'You can access all your reports from the Report Library section in your client dashboard. Reports are organized by date and category for easy navigation.'
    },
    {
      id: 3,
      question: 'How often are reports updated?',
      answer: 'Reports are typically updated on a weekly basis, though some premium clients may receive daily updates. Please check your service agreement for specific update schedules.'
    },
    {
      id: 4,
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including credit cards, bank transfers, and ACH payments. You can manage your payment methods in the Billing section of your account.'
    },
    {
      id: 5,
      question: 'How do I update my account information?',
      answer: 'You can update your account information by navigating to the My Account section. Simply click on the fields you want to modify and save your changes.'
    },
    {
      id: 6,
      question: 'What is Ask Judy AI?',
      answer: 'Ask Judy AI is our intelligent assistant powered by artificial intelligence. You can ask Judy questions about your reports, business metrics, and industry trends for instant insights.'
    },
    {
      id: 7,
      question: 'Is my data secure?',
      answer: 'Yes, we implement industry-standard encryption and security protocols to protect your data. All communications are encrypted, and we comply with GDPR and other data protection regulations.'
    },
    {
      id: 8,
      question: 'How do I contact support?',
      answer: 'You can reach our support team through the Contact page or email us at support@jganesconsulting.com. Our support team typically responds within 24 hours.'
    }
  ];

  const toggleAccordion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <PageHeader title="Frequently Asked Questions" />
      
      <div className="faq-content">
        <div className="faq-wrapper">
          <div className="accordion">
            {faqItems.map((item) => (
              <div key={item.id} className="accordion-item">
                <button
                  className={`accordion-header ${expandedId === item.id ? 'active' : ''}`}
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={expandedId === item.id}
                >
                  <span className="accordion-title">{item.question}</span>
                  <span className="accordion-icon">
                    {expandedId === item.id ? '−' : '+'}
                  </span>
                </button>
                {expandedId === item.id && (
                  <div className="accordion-body">
                    <div className="accordion-content">
                      {item.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
