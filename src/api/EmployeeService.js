const BASE_URL = 'http://localhost:8080/api/v1/users';

export async function fetchUsers() {
    const apiData = await fetch (BASE_URL + '/getAllUsers');
    if(!apiData.ok){ throw new Error('Fail to load users')};
    return await apiData.json();
}

export async function addNewUser() {
    
}