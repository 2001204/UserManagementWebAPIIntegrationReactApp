// src/Profile.tsx
import React from 'react';
import { User } from './types';
import './css/App.css';
interface ProfileProps {
  user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => (
  <div className="profile-tab">
    <p><strong>Name:</strong> {user.name}</p>
    <br />
    <p><strong>Username:</strong> {user.username}</p>
    <br />
    <p><strong>Email:</strong> {user.email}</p>
  </div>
);

export default Profile;
