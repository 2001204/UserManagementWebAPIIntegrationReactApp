// src/CompanyDetails.tsx
import React from 'react';
import { User } from './types';
import './css/App.css';

interface CompanyDetailsProps {
  user: User;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ user }) => (
  <div className="company-details-tab">
    <p><strong>Company Name:</strong> {user.company.name}</p>
    <p><strong>CatchPhrase:</strong> {user.company.catchPhrase}</p>
    <p><strong>BS:</strong> {user.company.bs}</p>
  </div>
);

export default CompanyDetails;
