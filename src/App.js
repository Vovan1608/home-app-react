import { useState } from 'react';

import Joke from './Joke';
import Tasks from './Tasks';
import Stories from './Stories';

import './index.css';

const App = () => {
    const [userQuery, setUserQuery] = useState('');

    const updateUserQuery = (e) => {
        setUserQuery(e.target.value);
    };

    const searchQuery = () => {
        window.open(`https://google.com/search?q=${userQuery}`, '_blank');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchQuery();
        }
    };

    return (
        <div className="App">
            <h1>Hello</h1>
            <div className='form'>
                <input
                    value={userQuery}
                    onKeyDown={handleKeyDown}
                    onChange={updateUserQuery}
                />
                <button onClick={searchQuery}>Search</button>
            </div>
            <hr />
            <Joke />
            <hr />
            {/* <Stories /> */}
            <Tasks />
        </div>
    );
}

export default App;
