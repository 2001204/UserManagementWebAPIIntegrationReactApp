// src/Address.tsx
import React from 'react';
import { User } from './types';

interface AddressProps {
  user: User;
}

const Address: React.FC<AddressProps> = ({ user }) => (
  <div className="address-tab">
    <p><strong>Street:</strong> {user.address.street}</p>
    <p><strong>Suite:</strong> {user.address.suite}</p>
    <p><strong>City:</strong> {user.address.city}</p>
    <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
  </div>
);

export default Address;
