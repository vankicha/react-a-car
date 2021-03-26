import { HTTP } from '../constants';

const request = (url, method, data) => {
    const options = {
        method,
        headers: { 'Content-Type': 'application/json' },
    };

    let token;

    if (token) {
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
    put: (url, data) => request(url, HTTP.put, data),
    patch: (url, data) => request(url, HTTP.patch, data),
    delete: (url) => request(url, HTTP.delete),
};
