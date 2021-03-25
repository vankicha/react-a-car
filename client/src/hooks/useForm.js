import { useState } from 'react';

const useForm = (defaultState) => {
    const [state, setState] = useState(defaultState);

    return [
        state,
        (event) => {
            setState((currentState) => ({
                ...currentState,
                [event.target.name]: event.target.value,
            }));
        },
    ];
};

export default useForm;
