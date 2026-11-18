
import { useState } from 'react';
import './App.css';

function App() {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [courseName, setCourseName] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    if (!studentName || !studentId || !courseName) {
      alert('Please fill in all fields!');
      return;
    }

    alert('Course registration submitted successfully!');

    setStudentName('');
    setStudentId('');
    setCourseName('');
  };

  return (
    <div className="container">
      <header>
        <h1>University Course Registration System</h1>
        <p>Student Course Registration Portal</p>
      </header>

      <div className="registration-form">
        <h2>Register for a Course</h2>

        <form onSubmit={handleRegister}>
          <label>Student Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />

          <label>Student ID</label>
          <input
            type="text"
            placeholder="Enter your student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />

          <label>Course Name</label>
          <input
            type="text"
            placeholder="Enter your course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />

          <button type="submit">Register</button>
        </form>
      </div>

      <footer>
        <p>University Course Registration System</p>
      </footer>
    </div>
  );
}

export default App;
