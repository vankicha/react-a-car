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
    updateUserPhoto: (userId, photoUrl) =>
        requester.put(userApi.updateUserPhoto(userId), { photoUrl }),
    deposit: (userId, password, amount) =>
        requester.put(userApi.deposit(userId), { password, amount }),
    getUserOffers: (userId) => requester.get(userApi.getUserOffers(userId)),
    deleteOffer: (userId, offerId) =>
        requester.delete(userApi.deleteOffer(userId, offerId)),
    getUserRentals: (userId) => requester.get(userApi.getUserRentals(userId)),
    getUserReviews: (userId) => requester.get(userApi.getUserReviews(userId)),
    addOfferToReviews: (userId, offerId) =>
        requester.put(userApi.addOfferToReviews(userId), { offerId }),
    removeOfferFromReviews: (userId, offerId) =>
        requester.delete(userApi.removeOfferFromReviews(userId, offerId)),
};
