import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "#e0e4e7",
      padding: "10px",
      borderRadius: "10px",
      width: "250px",
      margin: "10px"
    }}>
      <img 
        src={user.avatar} 
        alt={user.first_name} 
        style={{ width: "50px", height: "50px", borderRadius: "50%", marginRight: "10px" }} 
      />
      <div>
        <strong>{user.first_name} {user.last_name}</strong><br/>
        <small>{user.email}</small>
      </div>
    </div>
  );
};

export default UserCard;
