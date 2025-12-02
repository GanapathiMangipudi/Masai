import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [input, setInput] = useState("");

  function addTask() {
    if (input.trim() === "") return; // bonus validation
    setTasks([...tasks, input]);
    setInput("");
  }

  function clearAll() {
    setTasks([]);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo List</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
      <button onClick={clearAll}>Clear All</button>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
