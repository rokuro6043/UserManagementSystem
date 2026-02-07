const API_URL = "http://localhost:8080/api/users";

export const getUsers = () =>
  fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  }).then(
    console.log("Fetching users with token:", localStorage.getItem("token")),
    res => res.json());

export const addUser = (user) =>
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
     },
    body: JSON.stringify(user),
  });

export const deleteUser = (id) =>
  fetch(`${API_URL}/${id}`, { method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
   });