import { useState } from "react";
import { addUser } from "../services/UserService";

export default function UserForm({ refresh }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = async () => {
    await addUser({ name, email });
    refresh();
  };

  return (
    <>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={submit}>Add User</button>
    </>
  );
}
