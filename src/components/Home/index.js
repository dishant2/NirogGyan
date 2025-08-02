import DoctorSection from '../DoctorSection';
import './index.css';

const Home = () => {
  return (
    <>
   
    <div className="home-container">
      <h1>Welcome to NirogGyan</h1>
      <p>Your health, our priority.</p>

    <div>
      <DoctorSection />
    </div>


      <section className="home-info">
        <h2>Why Choose NirogGyan?</h2>
        <ul className="info-list">
          <li>✔️ 40+ verified specialist doctors</li>
          <li>✔️ Instant appointment booking</li>
          <li>✔️ Trusted by 10,000+ patients</li>
          <li>✔️ Easy access to health records</li>
        </ul>
      </section>
    </div>
    </>
    
  );
};

export default Home;
