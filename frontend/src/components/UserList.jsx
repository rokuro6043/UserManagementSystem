import { deleteUser } from "../services/UserService";

export default function UserList({ users, refresh }) {
  return (
    <ul>
      {users.map(u => (
        <li key={u.id}>
          {u.name} - {u.email}
          <button onClick={() => {
            deleteUser(u.id);
            refresh();
          }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
