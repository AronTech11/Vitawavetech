import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import './contactus.css';

const ContactForm = () => {
  return (
    <div className="contact-form-container">
      <Row justify="center" align="top" gutter={[32, 16]}>
        {/* Left column with text */}
        <Col xs={24} sm={24} md={12} lg={12} className="contact-text">
          <h2>Contact Us Here</h2>
          <p>If you have any questions or feedback, feel free to reach out by filling out the form below. We'll get back to you as soon as possible.</p>
        </Col>

        {/* Right column with the form */}
        <Col xs={24} sm={24} md={12} lg={12} className="contact-form">
          <Form layout="vertical">
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name!' }]}>
              <Input placeholder="Your name" />
            </Form.Item>

            <Form.Item label="Email address" name="email" rules={[{ required: true, message: 'Please enter your email address!' }]}>
              <Input placeholder="Your email address" />
            </Form.Item>

            <Form.Item label="Company" name="company">
              <Input placeholder="Your company name (Optional)" />
            </Form.Item>

            <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please enter a message!' }]}>
              <Input.TextArea placeholder="Your message" rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>

      {/* Optional: Contact icon image on the right (visible only on larger screens) 
      <div className="contact-image">
        <MailOutlined style={{ fontSize: '200px', color: '#003366' }} />
      </div>
      */}
    </div>
  );
};

export default ContactForm;
