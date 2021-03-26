const BASE_URL = 'http://localhost:5000/api';
const USER_URL = `${BASE_URL}/users`;
const AUTH_URL = `${BASE_URL}/auth`;

export const authApi = {
    registerAsUser: () => `${AUTH_URL}/register?as=user`,
    registerAsCompany: () => `${AUTH_URL}/register?as=company`,
};
