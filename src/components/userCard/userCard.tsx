import { useEffect, useState } from "react";
import "./userCard.css";
import ToDo from "../ToDoList/toDo";

export interface User {
  id: number;
  name: string;
  email: string;
}

function UserCard(): JSX.Element {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const jsonData: User[] = await response.json();
        setUsers(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleUserCardClick = (userId: number) => {
    setSelectedUserId(userId);
  };

  return (
    <div className="showData">
      <h1>Users</h1>
      <div className="card-container">
        {users.map((user) => (
          <div
            className="card"
            key={user.id}
            onClick={() => handleUserCardClick(user.id)}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setSelectedUserId(null)}>Clear Data</button>

      {selectedUserId !== null && <ToDo userId={selectedUserId} />}
    </div>
  );
}

export default UserCard;
