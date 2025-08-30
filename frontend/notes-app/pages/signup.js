import { useState } from 'react';
import api from '../utils/axiosInstance';

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    await api.post('/auth/register/', { username, email, password });
    alert("Account created successfully!");
  };

  return (
    <form onSubmit={handleRegister} className="p-6">
      <h1 className="text-xl font-bold">Sign Up</h1>
      <input
        type="text"
        placeholder="Username"
        className="border p-2 my-2 w-full"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        className="border p-2 my-2 w-full"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 my-2 w-full"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}
