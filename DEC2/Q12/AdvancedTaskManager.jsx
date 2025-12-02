import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("High");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  // Priority Weight for Sorting
  const priorityRank = {
    High: 3,
    Medium: 2,
    Low: 1,
  };

  // Add Task
  const addTask = () => {
    if (!title.trim()) return alert("Task title cannot be empty!");

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    const updated = [...tasks, newTask].sort(
      (a, b) => priorityRank[b.priority] - priorityRank[a.priority]
    );

    setTasks(updated);
    setTitle("");
    setPriority("High");
  };

  // Toggle Completion
  const toggleComplete = (id) => {
    const updated = tasks
      .map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
      .sort((a, b) => priorityRank[b.priority] - priorityRank[a.priority]);

    setTasks(updated);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Filter Tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesPriority =
      filterPriority === "All" || task.priority === filterPriority;
    const matchesStatus =
      filterStatus === "All" ||
      (filterStatus === "Completed" && task.completed) ||
      (filterStatus === "Incomplete" && !task.completed);

    return matchesPriority && matchesStatus;
  });

  return (
    <div style={{ width: "500px", margin: "auto", padding: "20px" }}>
      <h2>Advanced Task Manager</h2>

      {/* Add Task */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <button onClick={addTask}>Add</button>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
        >
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option>All</option>
          <option>Completed</option>
          <option>Incomplete</option>
        </select>
      </div>

      {/* Task List */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              background:
                task.priority === "High"
                  ? "#ff7070"
                  : task.priority === "Medium"
                  ? "#ffd072"
                  : "#d1ffd1",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <div>
              <strong>{task.title}</strong> {" "}
              <span>({task.priority})</span>
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => toggleComplete(task.id)}>
                {task.completed ? "Undo" : "Complete"}
              </button>

              <button onClick={() => deleteTask(task.id)} style={{ background: "red", color: "white" }}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {filteredTasks.length === 0 && <p>No tasks found.</p>}
    </div>
  );
}
