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
