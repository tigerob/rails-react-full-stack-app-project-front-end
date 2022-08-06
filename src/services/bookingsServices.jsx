import miaMusicAPI from "../config/api";

export async function getBookingsForUser(username) {
  const response = await miaMusicAPI.get(`/bookings?username=${username}`);
  return response.data;
}

export async function createBooking(data) {
  const response = await miaMusicAPI.post("/bookings", data);
  return response.data;
}

export async function deleteBooking(id) {
  const response = await miaMusicAPI.delete(`/bookings/${id}`);
  return response.data;
}

export async function getBookings() {
  const response = await miaMusicAPI.get("/bookings");
  return response.data;
}
