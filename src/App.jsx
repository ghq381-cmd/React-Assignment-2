import "./App.css"
function Students() {
  const students = [
    {
      id: 1,
      name: "Ali Khan",
      age: 18,
      course: "E-Commerce",
      city: "Rawalpindi"
    },
    {
      id: 2,
      name: "Sara Ahmed",
      age: 20,
      course: "Graphic Design",
      city: "Lahore"
    },
    {
      id: 3,
      name: "Ahmed Raza",
      age: 19,
      course: "Office Automation",
      city: "Karachi"
    },
    {
      id: 4,
      name: "Shezad Malik",
      age: 21,
      course: "Web Development",
      city: "Balochistan"
    }
  ];

  return (
    <div className="container">
      <h1>Student Directory</h1>

      <div className="student-container">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <fieldset>
              <div className="center">
                <h2 >{student.name}</h2>
                <p><b>Course:</b> {student.course}</p>
                <p><b>Age:</b> {student.age}</p>
                <p><b>City:</b> {student.city}</p>
              </div>
            </fieldset>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;