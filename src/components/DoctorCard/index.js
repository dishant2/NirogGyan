import { useNavigate } from 'react-router-dom';
import './index.css';

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/book/${doctor.id}`, { state: { doctor } });
  };

  return (
    <div className="card">
      <div>
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
      </div>
      <h3>{doctor.name}</h3>
      <p>{doctor.specialization}</p>
      <p>Status: <strong>{doctor.available ? 'Available' : 'Unavailable'}</strong></p>
      <button 
        disabled={!doctor.available}
        onClick={handleBooking}
      >
        {doctor.available ? 'Book Appointment' : 'Not Available'}
      </button>
    </div>
  );
};

export default DoctorCard;
