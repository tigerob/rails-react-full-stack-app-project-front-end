import miaMusicAPI from '../config/api';

export async function signUp(data){
    const response = await miaMusicAPI.post('/auth/signup', data);
    return response.data;
}

export async function logIn(data){
    const response = await miaMusicAPI.post('/auth/login', data)
    return response.data
}