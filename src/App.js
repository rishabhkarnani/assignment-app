import React, { useEffect, useState } from 'react';
import axios from 'axios';

// User Card Component
const UserCard = ({ user }) => {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "#e0c3a5",  
      padding: "20px",
      borderRadius: "20px",
      width: "350px",
      margin: "15px",
      boxShadow: "4px 6px 12px rgba(0, 0, 0, 0.2)"
    }}>
      <img 
        src={user.avatar} 
        alt={user.first_name} 
        style={{
          width: "100px", 
          height: "100px", 
          borderRadius: "50%", 
          marginRight: "20px",
          border: "4px solid #8B4513"  
        }} 
      />
      <div>
        <strong style={{ fontSize: "20px", color: "#3e2723" }}>{user.first_name} {user.last_name}</strong><br/>
        <small style={{ fontSize: "16px", color: "#5d4037" }}>{user.email}</small>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/assignmentData.json')  
      .then(response => {
        setUsers(response.data[0].data);  
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{
      textAlign: "center",
      padding: "40px",
      backgroundColor: "#f5e1c8", 
      minHeight: "100vh"
    }}>
      <h1 style={{ color: "#3e2723", fontSize: "36px", marginBottom: "20px" }}>User List</h1>
      <p style={{ color: "#5d4037", fontSize: "18px", marginBottom: "40px" }}>
        
      </p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(370px, 1fr))",
        gap: "20px",
        justifyContent: "center"
      }}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
