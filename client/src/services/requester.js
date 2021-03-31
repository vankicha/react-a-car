import { HTTP } from '../constants';
import { auth } from '../utils/firebase';
import { getToken } from '../helpers/userHelper';

const request = async (url, method, data) => {
    const options = {
        method,
        headers: { 'Content-Type': 'application/json' },
    };

    if (auth.currentUser) {
        const token = await getToken();

        options.headers = {
            ...options.headers,
            'Authorization': `Bearer ${token}`,
        };
    }

    if (data) {
        options.body = JSON.stringify({ ...data });
    }

    return fetch(url, options);
};

export default {
    get: (url) => request(url, HTTP.GET),
    post: (url, data) => request(url, HTTP.POST, data),
    put: (url, data) => request(url, HTTP.PUT, data),
    patch: (url, data) => request(url, HTTP.PATCH, data),
    delete: (url) => request(url, HTTP.DELETE),
};
