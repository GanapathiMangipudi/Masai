import { useState } from "react";

function UserCard({ name, email, age }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        borderRadius: "8px",
        marginBottom: "10px",
        background: "#fafafa",
      }}
    >
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
          age={user.age}
        />
      ))}
    </div>
  );
}


export default function App() {
  const [users, setUsers] = useState([
    { name: "Alice", email: "alice@mail.com", age: 25 },
    { name: "Bob", email: "bob@mail.com", age: 30 },
  ]);

  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [errors, setErrors] = useState({});

  // Validation rules
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name cannot be empty.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) newErrors.email = "Invalid email format.";

    if (!form.age || isNaN(form.age) || Number(form.age) <= 0)
      newErrors.age = "Age must be a positive number.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addUser = () => {
    if (!validate()) return;

    const newUser = {
      name: form.name,
      email: form.email,
      age: Number(form.age),
    };

    setUsers((prev) => [...prev, newUser]);

    // Clear form
    setForm({ name: "", email: "", age: "" });
    setErrors({});
  };

  return (
    <div style={{ padding: "20px", width: "350px", margin: "auto" }}>
      <h2>User List</h2>

      {/* UserList Display */}
      <UserList users={users} />

      <h3>Add New User</h3>

      {/* Form Inputs */}
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        style={{ width: "100%", marginBottom: "6px", padding: "8px" }}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={{ width: "100%", marginBottom: "6px", padding: "8px" }}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <input
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
        style={{ width: "100%", marginBottom: "6px", padding: "8px" }}
      />
      {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}

      <button
        onClick={addUser}
        style={{
          padding: "10px",
          width: "100%",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "6px",
          marginTop: "10px",
          cursor: "pointer",
        }}
      >
        Add User
      </button>
    </div>
  );
}
