import doctors from './DoctorData';
// const doctors = [
//   { id: 1, name: "Dr. Aisha Khan", specialization: "Cardiologist", image: "https://i.pravatar.cc/150?img=1", available: true },
//   { id: 2, name: "Dr. Rajesh Patel", specialization: "Dermatologist", image: "https://i.pravatar.cc/150?img=2", available: false },
//   { id: 3, name: "Dr. Meera Sharma", specialization: "Pediatrician", image: "https://i.pravatar.cc/150?img=3", available: true },
//   { id: 4, name: "Dr. Sameer Reddy", specialization: "Neurologist", image: "https://i.pravatar.cc/150?img=4", available: false },
//   { id: 5, name: "Dr. Fatima Ansari", specialization: "Gynecologist", image: "https://i.pravatar.cc/150?img=5", available: true },
//   { id: 6, name: "Dr. Vikram Joshi", specialization: "Orthopedic", image: "https://i.pravatar.cc/150?img=6", available: true },
//   { id: 7, name: "Dr. Anjali Menon", specialization: "ENT Specialist", image: "https://i.pravatar.cc/150?img=7", available: false },
//   { id: 8, name: "Dr. Karan Desai", specialization: "General Physician", image: "https://i.pravatar.cc/150?img=8", available: true },
//   { id: 9, name: "Dr. Priya Verma", specialization: "Ophthalmologist", image: "https://i.pravatar.cc/150?img=9", available: true },
//   { id: 10, name: "Dr. Arjun Gupta", specialization: "Psychiatrist", image: "https://i.pravatar.cc/150?img=10", available: false },
//   { id: 11, name: "Dr. Neha Kulkarni", specialization: "Cardiologist", image: "https://i.pravatar.cc/150?img=11", available: true },
//   { id: 12, name: "Dr. Ramesh Iyer", specialization: "Urologist", image: "https://i.pravatar.cc/150?img=12", available: true },
//   { id: 13, name: "Dr. Divya Shetty", specialization: "Endocrinologist", image: "https://i.pravatar.cc/150?img=13", available: false },
//   { id: 14, name: "Dr. Mohan Tripathi", specialization: "Dentist", image: "https://i.pravatar.cc/150?img=14", available: true },
//   { id: 15, name: "Dr. Sneha Jaiswal", specialization: "Gastroenterologist", image: "https://i.pravatar.cc/150?img=15", available: true },
//   { id: 16, name: "Dr. Aditya Ghosh", specialization: "Pulmonologist", image: "https://i.pravatar.cc/150?img=16", available: false },
//   { id: 17, name: "Dr. Shruti Nair", specialization: "Psychologist", image: "https://i.pravatar.cc/150?img=17", available: true },
//   { id: 18, name: "Dr. Ravi Shankar", specialization: "Hematologist", image: "https://i.pravatar.cc/150?img=18", available: false },
//   { id: 19, name: "Dr. Tanvi Rao", specialization: "Rheumatologist", image: "https://i.pravatar.cc/150?img=19", available: true },
//   { id: 20, name: "Dr. Manish Bhatt", specialization: "Nephrologist", image: "https://i.pravatar.cc/150?img=20", available: true },
//   { id: 21, name: "Dr. Pooja Sinha", specialization: "Oncologist", image: "https://i.pravatar.cc/150?img=21", available: false },
//   { id: 22, name: "Dr. Imran Qureshi", specialization: "Radiologist", image: "https://i.pravatar.cc/150?img=22", available: true },
//   { id: 23, name: "Dr. Kavita Jain", specialization: "Allergist", image: "https://i.pravatar.cc/150?img=23", available: true },
//   { id: 24, name: "Dr. Alok Chatterjee", specialization: "Pathologist", image: "https://i.pravatar.cc/150?img=24", available: false },
//   { id: 25, name: "Dr. Nidhi Saxena", specialization: "Anesthesiologist", image: "https://i.pravatar.cc/150?img=25", available: true },
//   { id: 26, name: "Dr. Yash Malhotra", specialization: "General Surgeon", image: "https://i.pravatar.cc/150?img=26", available: true },
//   { id: 27, name: "Dr. Isha Chopra", specialization: "Plastic Surgeon", image: "https://i.pravatar.cc/150?img=27", available: false },
//   { id: 28, name: "Dr. Nikhil Suri", specialization: "Vascular Surgeon", image: "https://i.pravatar.cc/150?img=28", available: true },
//   { id: 29, name: "Dr. Reena D'Souza", specialization: "Immunologist", image: "https://i.pravatar.cc/150?img=29", available: true },
//   { id: 30, name: "Dr. Deepak Mehta", specialization: "Infectious Disease", image: "https://i.pravatar.cc/150?img=30", available: false },
//   { id: 31, name: "Dr. Bhavna Kaur", specialization: "Sleep Specialist", image: "https://i.pravatar.cc/150?img=31", available: true },
//   { id: 32, name: "Dr. Harsh Vardhan", specialization: "Pain Management", image: "https://i.pravatar.cc/150?img=32", available: false },
//   { id: 33, name: "Dr. Ritu Sharma", specialization: "Sports Medicine", image: "https://i.pravatar.cc/150?img=33", available: true },
//   { id: 34, name: "Dr. Saif Ahmed", specialization: "Occupational Therapist", image: "https://i.pravatar.cc/150?img=34", available: true },
//   { id: 35, name: "Dr. Laxmi Mishra", specialization: "Speech Therapist", image: "https://i.pravatar.cc/150?img=35", available: false },
//   { id: 36, name: "Dr. Zoya Mirza", specialization: "Chiropractor", image: "https://i.pravatar.cc/150?img=36", available: true },
//   { id: 37, name: "Dr. Abhinav Kapoor", specialization: "Occupational Therapist", image: "https://i.pravatar.cc/150?img=37", available: false },
//   { id: 38, name: "Dr. Juhi Pandey", specialization: "Clinical Nutritionist", image: "https://i.pravatar.cc/150?img=38", available: true },
//   { id: 39, name: "Dr. Aman Chopra", specialization: "Nuclear Medicine", image: "https://i.pravatar.cc/150?img=39", available: true },
//   { id: 40, name: "Dr. Gauri Wagle", specialization: "Homeopath", image: "https://i.pravatar.cc/150?img=40", available: false }
// ];

// ...existing code...


function DoctorSection({ onBook }) {
  return (
    <div>
      <h2>Our Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            <strong>{doctor.name}</strong> - {doctor.specialty} ({doctor.experience}) - {doctor.location}
            <button onClick={() => onBook(doctor)}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorSection;
// ...existing code...