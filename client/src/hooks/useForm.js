import { useState } from 'react';

const useForm = (defaultState) => {
    const [state, setState] = useState(defaultState);

    return [
        state,
        (event) => {
            event.target
                ? setState((currentState) => ({
                      ...currentState,
                      [event.target.name]: event.target.value,
                  }))
                : setState((currState) => ({
                      ...currState,
                      ...event,
                  }));
        },
    ];
};

export default useForm;
