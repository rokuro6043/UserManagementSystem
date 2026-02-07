import { useState } from "react";
import { register } from "../services/AuthService";

export default function RegisterForm({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const submit = async () => {
    try {
      await register(email, password);
      setMessage("Registration successful. Please login.");
    } catch {
      setMessage("Registration failed");
    }
  };

  return (
    <>
      <h2>Register</h2>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={submit}>Register</button>

      <p>{message}</p>

      <p>
        Already have an account?{" "}
        <button onClick={onSwitch}>Login</button>
      </p>
    </>
  );
}
