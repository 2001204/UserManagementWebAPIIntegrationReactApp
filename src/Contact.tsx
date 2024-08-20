// src/Contact.tsx
import React from 'react';
import { User } from './types';
import './css/App.css';

interface ContactProps {
  user: User;
}

const Contact: React.FC<ContactProps> = ({ user }) => (
  <div className="contact-tab">
    <p><strong>Phone:</strong> {user.phone}</p>
    <p><strong>Website:</strong> {user.website}</p>
  </div>
);

export default Contact;
