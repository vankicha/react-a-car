const BASE_URL = 'http://localhost:5000/api';
const USER_URL = `${BASE_URL}/users`;
const AUTH_URL = `${BASE_URL}/auth`;
const OFFERS_URL = `${BASE_URL}/offers`;

export const authApi = {
    register: () => `${AUTH_URL}/register`,
};

export const offerApi = {
    create: () => `${OFFERS_URL}`,
    getAll: () => `${OFFERS_URL}`,
};