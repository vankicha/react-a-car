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
};
