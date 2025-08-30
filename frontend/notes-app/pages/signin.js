import { useState } from 'react';
import { useDispatch } from 'react-redux';
import api from '../utils/axiosInstance';
import { loginSuccess } from '../redux/userSlice';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await api.post('/auth/login/', { email, password });
    dispatch(loginSuccess(res.data));
  };

  return (
    <form onSubmit={handleLogin} className="p-6">
      <h1 className="text-xl font-bold">Sign In</h1>
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
}
