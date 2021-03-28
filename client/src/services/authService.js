import { authApi } from './api';
import requester from './requester';

export default {
    register: (email, firstName, lastName, password, balance) =>
        requester.post(authApi.register(), {
            email,
            firstName,
            lastName,
            password,
            balance,
        }),
};
