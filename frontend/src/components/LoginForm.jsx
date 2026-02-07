import { useState } from "react";
import { login } from "../services/AuthService";

export default function LoginForm({ onLogin, onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async () => {
    try {
      const res = await login(email, password);
      localStorage.setItem("token", res.token);
      onLogin();
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={submit}>Login</button>

      <p style={{ color: "red" }}>{error}</p>

      <p>
        Don’t have an account?{" "}
        <button onClick={onSwitch}>Register</button>
      </p>
    </>
  );
}
