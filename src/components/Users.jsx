import React, { useEffect, useState } from "react";
// import { useGlobalState } from "../utils/stateContext";

const Users = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch("localhost:3000/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div>
          <h1 class="title">All Users</h1>
        </div>
        {users.length > 0 && (
          <table class="styled-table">
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Is Admin</th>
            </tr>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.is_admin}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
export default Users;
