import { emailRegex, passwordRegex } from './regex';

export const validateRent = (
    ownerId,
    providerId,
    balance,
    currentPrice,
    hours,
    region
) => {
    if (!hours) {
        throw { message: 'Please choose duration for your rent!' };
    }

    if (!region) {
        throw { message: 'Please choose a region!' };
    }

    if (ownerId === providerId) {
        throw { message: "You can't rent your own car!" };
    }

    if (balance < currentPrice) {
        throw { message: "You don't have enough money to rent this car!" };
    }
};

export const validateRegisterForm = ({
    email,
    firstName,
    lastName,
    password,
    confirmPassword,
}) => {
    let errors = {};

    if (!emailRegex.test(email)) {
        errors = { ...errors, email: 'Invalid email!' };
    }

    if (!firstName) {
        errors = { ...errors, firstName: 'Invalid first name' };
    }

    if (!lastName) {
        errors = { ...errors, lastName: 'Invalid last name' };
    }

    if (!passwordRegex.test(password)) {
        errors = {
            ...errors,
            password:
                'Password should be atleast 8 characaters long and contain letters and digits',
        };
    }

    if (!password || password !== confirmPassword) {
        errors = {
            ...errors,
            confirmPassword: "Passwords don't match",
        };
    }

    if (Object.keys(errors).length > 0) {
        throw errors;
    }
};

export const validateLoginForm = (email, password) => {
    if (!emailRegex.test(email)) {
        console.log(email);
        throw { message: 'Invalid email!' };
    }

    if (!passwordRegex.test(password)) {
        throw {
            message:
                'Password should be atleast 8 characaters long and contain letters and digits',
        };
    }
};

export const firebaseErrorHandler = (err, setError) => {
    switch (err.code) {
        case 'auth/user-not-found':
        case 'auth/email-already-exists':
        case 'auth/wrong-password':
            return setError("User doesn't exist!");
        default:
            throw { message: 'Something went wrong!' };
    }
};

export const validateOfferForm = ({ brand, model, year, price, photoUrl }) => {
    let errors = {};

    if (!brand) {
        errors = { ...errors, brand: 'Please choose brand' };
    }

    if (!model) {
        errors = { ...errors, model: 'Please choose model' };
    }

    if (!year) {
        errors = { ...errors, year: 'Please choose year' };
    }

    if (price <= 0) {
        errors = { ...errors, price: 'Please choose valid price' };
    }

    if (!photoUrl) {
        errors = { ...errors, photoUrl: 'Please choose image for your offer' };
    }

    if (Object.keys(errors).length > 0) {
        throw errors;
    }
};
