import miaMusicAPI from "../config/api";

export async function getPrices() {
  const response = await miaMusicAPI.get("/prices");
  return response.data;
}
