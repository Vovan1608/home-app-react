import { useEffect, useState } from 'react';

const Joke = () => {
    const [joke, setJoke] = useState({});

    useEffect(() => {
        fetch('https://v2.jokeapi.dev/joke/Any')
            .then((response) => response.json())
            .then((joke) => setJoke(joke))
            .catch((err) => new Error(err));
    }, []);

    const { setup, delivery } = joke;

    return (
        <>
            <h3>Joke of the session</h3>
            <div>{setup}</div>
            <p><em>{delivery}</em></p>
        </>

    );
};

export default Joke;
