const API = "http://localhost:8080/api/auth";

export const login = async (email, password) => {
  console.log("Attempting login for:", email + "/" + password);
  const res = await fetch("http://localhost:8080/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
};

export const register = async (email, password) => {
  console.log("Attempting registration for:", email + "/" + password);
  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Registration failed");
};

