import { useFetch } from './hooks';

const Stories = () => {
    const stories = useFetch('https://news-proxy-server.appspot.com/topstories', []);

    return (
        <div className='stories'>
            <h3>Stories</h3>
            {
                stories.map(({ id, by, time, title, url }) => {
                    return (
                        <div key={id}>
                            <a href={url}>{title}</a>
                            <div>{by} - {new Date(time).toLocaleString()}</div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Stories;
