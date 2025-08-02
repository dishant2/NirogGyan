import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import DoctorSection from './components/DoctorSection';
import BookingForm from './components/BookingForm';
import Confirmation from './components/Confirmation';
import MyAppointments from './components/MyAppointments';
import Header from './components/Header';
import About from './components/About';

const App = () => {
  const [appointments, setAppointments] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<DoctorSection />} />
        <Route path="/book/:id" element={<BookingForm setAppointments={setAppointments} />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/appointments" element={<MyAppointments appointments={appointments} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
