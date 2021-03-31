import { userApi } from './api';
import requester from './requester';

export default {
    getUserInfo: (userId) => requester.get(userApi.getUserInfo(userId)),
    rentCar: (userId, providerId, offerId, price, hours) =>
        requester.put(userApi.rentCar(userId), {
            providerId,
            offerId,
            price,
            hours,
        }),
};
