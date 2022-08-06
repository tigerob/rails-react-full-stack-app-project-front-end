import miaMusicAPI from "../config/api";

export async function getUsers() {
  const response = await miaMusicAPI.get("/users");
  return response.data;
}

export async function deleteUsers(id) {
  const response = await miaMusicAPI.delete(`/users/${id}`);
  return response.data;
}
