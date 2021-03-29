import { userApi } from './api';
import requester from './requester';

export default {
    getUserInfo: (userId) => requester.get(userApi.getUserInfo(userId)),
};
