import miaMusicAPI from '../config/api';

export async function getBookingsForUser(username){
    const response = await miaMusicAPI.get(`/bookings?username=${username}`);
    return response.data
}

export async function createBooking(data){
    const response = await miaMusicAPI.post('/bookings', data);
    return response.data;
}