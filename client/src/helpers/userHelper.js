import { auth } from '../utils/firebase';

export const getToken = async () => {
    const { token } = await auth.currentUser.getIdTokenResult();

    return token;
};
