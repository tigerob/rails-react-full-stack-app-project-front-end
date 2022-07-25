import miaMusicAPI from '../config/api';

export async function signUp(data){
    const response = await miaMusicAPI.post('/auth/signup', data);
    console.log(response.data);
    return response.data;
}