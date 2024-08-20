// src/UserDetails.tsx
import React from 'react';
import { Tab, Tabs } from '@mui/material';
import Profile from './Profile';
import Address from './Address';
import CompanyDetails from './CompanyDetails';
import Contact from './Contact';
import { User } from './types';
import './css/App.css';

interface UserDetailsProps {
  user: User;
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  const [selectedTab, setSelectedTab] = React.useState<number>(0);
  const [showEdit, setShowEdit] = React.useState<boolean>(false);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedTab(newValue);
    setShowEdit(false);
  };

  const handleActionClick = () => {
    setShowEdit(!showEdit);
  };

  return (
    <div className="user-details">
      <h2>User Details</h2>
      <Tabs className="user-details-tabs" value={selectedTab} onChange={handleTabChange}>
        <Tab label="Profile" />
        <Tab label="Address" />
        <Tab label="Company Details" />
        <Tab label="Contact Us" />
      </Tabs>
      <div className="action-section">
        <button onClick={handleActionClick}>Action</button>
        {showEdit && <div className="edit-popup">Edit</div>}
      </div>
      <hr />
      {selectedTab === 0 && <Profile user={user} />}
      <br />
      {selectedTab === 1 && <Address user={user} />}
      <br />
      {selectedTab === 2 && <CompanyDetails user={user} />}
      <br />
      {selectedTab === 3 && <Contact user={user} />}
      <center><h2 className='footer'>@2024 | Gaurav Choubey</h2> </center>
    </div>
  );
};

export default UserDetails;
