
import React from "react";
import "./Customercare.css";

const customercare = () => {
  const levels = [
    {
      level: "Level 1: Customer Care/Complaints",
      name: "Mr. John Doe",
      address: "123 Main St, Springfield, USA - 123456",
      phone: "1800-123-456",
      email: "customer.care@example.com",
      timing: "9 a.m. to 6 p.m. All working days",
    },
    {
      level: "Level 2: Head of Customer Service",
      name: "Mr. Jane Smith",
      address: "123 Main St, Springfield, USA - 123456",
      phone: "022-1234-5678",
      email: "service.head@example.com",
      timing: "9 a.m. to 6 p.m. All working days",
    },
    {
      level: "Level 3: Compliance Officer",
      name: "Mr. Richard Roe",
      address: "123 Main St, Springfield, USA - 123456",
      phone: "022-8765-4321",
      email: "compliance@example.com",
      timing: "9 a.m. to 6 p.m. All working days",
    },
    {
      level: "Level 4: CEO",
      name: "Mr. Alan Turing",
      address: "123 Main St, Springfield, USA - 123456",
      phone: "022-9999-8888",
      email: "ceo@example.com",
      timing: "9 a.m. to 6 p.m. All working days",
    },
  ];

  return (
    <div className="grievance-container">
      <h1>Complaints and Redressals</h1>
      <h2>Grievance Escalation</h2>
      <div className="grievance-grid">
        {levels.map((level, index) => (
          <div className="grievance-card" key={index}>
            <h3>{level.level}</h3>
            <p><strong>{level.name}</strong></p>
            <p>
              <span className="icon">📍</span> {level.address}
            </p>
            <p>
              <span className="icon">📞</span> {level.phone}
            </p>
            <p>
              <span className="icon">📧</span> {level.email}
            </p>
            <p>{level.timing}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default customercare;
