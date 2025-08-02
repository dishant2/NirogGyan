import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const MyAppointments = ({ appointments }) => {
  const navigate = useNavigate();

  if (!appointments.length) {
    return (
      <div className="my-appointments-container">
        <div className="no-appointments">
          <h1>No appointments booked yet.</h1>
          <div>
            <button onClick={() => navigate("/")}>Book Now</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-appointments-container">
      <h2>My Appointments</h2>
      <ol className="appointment-list">
        {appointments.map((appt, idx) => (
          <li key={idx} className="appointment-item">
            <strong>{appt.doctor.name}</strong> — {appt.patientInfo.date} for{" "}
            {appt.patientInfo.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyAppointments;
