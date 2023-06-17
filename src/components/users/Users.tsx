import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.data;
      })
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch((err) => setError("Error"));
  }, []);

  return (
    <div>
      <h1> Users </h1>

      {error && <p> {error} </p>}

      <ul>
        {users.map((user) => (
          <li key={user}> {user} </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
