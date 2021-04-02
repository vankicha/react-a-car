import { offerApi } from './api';
import requester from './requester';

export default {
    create: (brand, model, year, price, photoUrl) =>
        requester.post(offerApi.create(), {
            brand,
            model,
            year,
            price,
            photoUrl,
        }),
    getAll: () => requester.get(offerApi.getAll()),
    getOne: (offerId) => requester.get(offerApi.getOne(offerId)),
    updateOffer: (offerId, offerInfo) =>
        requester.put(offerApi.updateOffer(offerId), offerInfo),
};
