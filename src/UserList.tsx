// src/UserList.tsx
import React from 'react';
import { User } from './types';
import './css/App.css';

interface UserListProps {
  users: User[];
  onUserClick: (user: User) => void;
  selectedUser: User | null;
}

const UserList: React.FC<UserListProps> = ({ users, onUserClick, selectedUser }) => (
  <div className="user-list">
    <center><h2>User List</h2></center>
    <hr />
    <ul>
      {users.map(user => (
        <li
          key={user.id}
          onClick={() => onUserClick(user)}
          className={selectedUser && selectedUser.id === user.id ? 'selected' : ''}
        >
          {user.name}
        </li>
      ))}
    </ul>
  </div>
);

export default UserList;
