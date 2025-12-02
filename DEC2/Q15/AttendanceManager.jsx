import React, { useState } from "react";

function AttendanceManager() {
  const [students, setStudents] = useState([
    { id: 1, name: "Amit", present: true },
    { id: 2, name: "Sneha", present: false },
    { id: 3, name: "Rahul", present: true },
    { id: 4, name: "Nisha", present: false },
    { id: 5, name: "Vikram", present: true },
  ]);

  const [filter, setFilter] = useState("All");

  function toggleAttendance(id) {
    setStudents((prev) =>
      prev.map((stu) =>
        stu.id === id ? { ...stu, present: !stu.present } : stu
      )
    );
  }

  const presentCount = students.filter((s) => s.present).length;

  const filteredStudents =
    filter === "All"
      ? students
      : students.filter((s) => (filter === "Present" ? s.present : !s.present));

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Attendance Manager</h1>

      <label>Filter: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>All</option>
        <option>Present</option>
        <option>Absent</option>
      </select>

      <h2>Total Present: {presentCount}</h2>

      {filteredStudents.map((student) => (
        <div
          key={student.id}
          style={{
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: student.present ? "#d4ffd4" : "#ffd4d4",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            {student.name} —{" "}
            <strong>{student.present ? "Present" : "Absent"}</strong>
          </span>

          <button onClick={() => toggleAttendance(student.id)}>
            Toggle
          </button>
        </div>
      ))}
    </div>
  );
}

export default AttendanceManager;
