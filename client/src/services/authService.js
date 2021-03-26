import { authApi } from './api';
import requester from './requester';

export default {
    registerAsUser: (email, firstName, lastName, password, balance) =>
        requester.post(authApi.registerAsUser(), {
            email,
            firstName,
            lastName,
            password,
            balance,
        }),
    registerAsCompany: (email, companyName, password) =>
        requester.post(authApi.registerAsCompany(), {
            email,
            companyName,
            password,
        }),
};
