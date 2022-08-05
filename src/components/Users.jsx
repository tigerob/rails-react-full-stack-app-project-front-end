import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [is_admin, setisAdmin] = useState(false);
  const [, setId] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const fetchData = async () => {
    const response = await fetch(
      "https://mia-music-studios-api.herokuapp.com/users",
    );
    const data = await response.json();
    setUsers(data);
  };

  function deleteUser(id) {
    fetch(`https://mia-music-studios-api.herokuapp.com/users/${id}`, {
      method: "DELETE",
    });
    setUsers(users.filter((user) => user.id !== id));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function selectUser(id) {
    let user = users.find((user) => user.id === id);
    if (user.is_admin === true) {
      setId(user.id);
      setUsername(user.username);
      setisAdmin((user.is_admin = false));
      setEmail(user.email);
      setPassword(user.password);
      let newuser = { id, username, is_admin, email, password };
      fetch(`https://mia-music-studios-api.herokuapp.com/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newuser),
      });
    } else {
      setId(user.id);
      setUsername(user.username);
      setisAdmin((user.is_admin = true));
      setEmail(user.email);
      setPassword(user.password);
      let newuser = { id, username, is_admin, email, password };
      fetch(`https://mia-music-studios-api.herokuapp.com/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newuser),
      });
    }
    window.location.reload();
  }

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
              <th>Operations</th>
            </tr>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.is_admin ? "Yes" : "No"}</td>
                  <td>
                    <button
                      class="button"
                      onClick={() => {
                        selectUser(user.id);
                      }}
                    >
                      <p class="links">Make Admin</p>
                    </button>
                    <button class="button" onClick={() => deleteUser(user.id)}>
                      <p class="links">Delete</p>
                    </button>
                  </td>
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
