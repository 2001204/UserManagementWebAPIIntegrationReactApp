// src/App.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';
import UserDetails from './UserDetails';
import { User } from './types';
import './css/App.css';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        if (response.data.length > 0) {
          setSelectedUser(response.data[0]); // Select the first user by default
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <center><h2 className='nav'>Welcome to User Details Page</h2></center>
      <div className="app-container">
        <UserList users={users} onUserClick={handleUserClick} selectedUser={selectedUser} />
        {selectedUser && <UserDetails user={selectedUser} />}
      </div>
    </div>
  );
};

export default App;
