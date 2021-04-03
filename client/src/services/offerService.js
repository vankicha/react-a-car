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
    getAll: (page) => requester.get(offerApi.getAll(page)),
    getOne: (offerId) => requester.get(offerApi.getOne(offerId)),
    updateOffer: (offerId, offerInfo) =>
        requester.put(offerApi.updateOffer(offerId), offerInfo),
};
