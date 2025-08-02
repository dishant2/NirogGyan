import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';

const Confirmation = () => {
  const { state } = useLocation();
  const { doctor, form } = state || {};

  if (!doctor || !form) return <p>Invalid confirmation data.</p>;

  return (
    <div className="confirmation-container">
      <div className='confirmation-content'>
      <h2>Appointment Confirmed!</h2>
      <p><strong>Doctor:</strong> {doctor.name}</p>
      <p><strong>Name:</strong> {form.name}</p>
      <p><strong>Email:</strong> {form.email}</p>
      <p><strong>Date & Time:</strong> {form.datetime}</p>
      </div>
    </div>
  );
};

export default Confirmation;
