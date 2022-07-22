import { useFetch } from './hooks';

const Joke = () => {
    const { setup, delivery } = useFetch('https://v2.jokeapi.dev/joke/Any', {});

    return (
        <>
            <h3>Joke of the session</h3>
            <div>{setup}</div>
            <p><em>{delivery}</em></p>
        </>

    );
};

export default Joke;
