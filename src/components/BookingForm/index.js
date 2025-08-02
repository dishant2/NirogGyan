import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './index.css';

const BookingForm = ({ setAppointments }) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const doctor = state?.doctor;

  const [form, setForm] = useState({
    name: '',
    email: '',
    datetime: '',
  });

  useEffect(() => {
    if (!doctor) {
      navigate('/doctors'); // Redirect if accessed directly
    }
  }, [doctor, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAppointment = {
      doctor,
      patientInfo: {
        name: form.name,
        email: form.email,
        date: form.datetime,
      },
    };

    setAppointments(prev => [...prev, newAppointment]);

    navigate('/confirmation', { state: { doctor, form } });
  };

  if (!doctor) return null;

  return (
    <div className="container-booking">
      <form onSubmit={handleSubmit} className="booking-form">
        <h2>Book Appointment with Dr. {doctor.name}</h2>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          name="datetime"
          type="datetime-local"
          value={form.datetime}
          onChange={handleChange}
          required
          className="input-field"
        />
        <button type="submit" className="confirmation-btn">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
