import { useState } from "react";
import Header from "./Header";
import StudentProfile from "./StudentProfile";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);
  const [showProfile, setShowProfile] = useState(true);

  const studentName = "Anu";
  const department = "CSE";
  const year = "3rd Year";

  return (
    <div>
      <Header />

      <h2>Student Practice Tracker</h2>

      <button onClick={() => setCount(count + 1)}>
        Complete Practice
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && (
        <StudentProfile
          name={studentName}
          department={department}
          year={year}
          count={count}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;