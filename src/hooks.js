import { useEffect, useState } from 'react';

export const useFetch = (url, initialVal) => {
    const [result, setResult] = useState(initialVal);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setResult(data))
            .catch((err) => console.log(err));
    }, []);

    return result;
};
