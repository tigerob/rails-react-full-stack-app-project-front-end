import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [is_admin, setisAdmin] = useState(false);
  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const editUser = () => setShowResults(true);
  const [showResults, setShowResults] = React.useState(false);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUsers(data);
  };

  function deleteUser(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    });
    setUsers(users.filter((user) => user.id !== id));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function selectUser(id) {
    let user = users.find((user) => user.id === id);
    if (user.is_admin === false) {
      setId(user.id);
      setUsername(user.username);
      setisAdmin((user.is_admin = true));
    } else {
      setId(user.id);
      setUsername(user.username);
      setisAdmin((user.is_admin = false));
    }
  }
  function updateUser() {
    let newuser = { id, username, is_admin };
    fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newuser),
    });
    window.location.reload();
    alert("User updated");
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
                      {showResults ? <return /> : null}
                      <p class="links">Make Admin</p>
                    </button>
                    <button
                      class="button"
                      onClick={() => deleteUser(user.id, { editUser })}
                    >
                      <p class="links">Delete</p>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div class="form-style-5">
          <h1>Make User Admin</h1>
          <p>Did you want to change</p>
          <input type="text" disabled={true} value={username} />
          <p>Administrator status?</p>
          <input type="hidden" value={id} />
          <input type="hidden" value={is_admin} />
          <br></br>
          <button class="button" onClick={updateUser}>
            <p class="links">Change Now</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Users;
