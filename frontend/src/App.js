import { useEffect, useState } from "react";
import { getUsers } from "./services/UserService";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Login from "./components/LoginForm";
import Register from "./components/RegisterForm";

function App() {
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [showRegister, setShowRegister] = useState(false);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    console.log("isAuthenticated:", isAuthenticated);
    if (isAuthenticated) {
      loadUsers();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return showRegister ? (
      <Register onSwitch={() => setShowRegister(false)} />
    ) : (
      <Login
        onLogin={() => setIsAuthenticated(true)}
        onSwitch={() => setShowRegister(true)}
      />
    );
  }

  return (
    <>
      <h1>User Management System</h1>
      <UserForm refresh={loadUsers} />
      <UserList users={users} refresh={loadUsers} />
    </>
  );
}

export default App;
