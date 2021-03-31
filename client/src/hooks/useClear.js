import { useEffect } from 'react';

const useClear = (callback) => {
    useEffect(() => {
        return callback;
    }, [callback]);
};

export default useClear;
