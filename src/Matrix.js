import { useState, useEffect } from 'react';
import MATRIX_FRAMES from './data/matrix';

const minDilay = 10;
const minIncrement = 1;

const Matrix = () => {
    const [index, setIndex] = useState(0);
    const [delay, setDelay] = useState(minDilay);
    const [increment, setIncrement] = useState(minIncrement);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((storedIndex) => {
                return (storedIndex + increment) % MATRIX_FRAMES.length;
            });
        }, delay);

        return () => clearInterval(interval);
    }, [delay, increment]);

    const updateDilay = (e) => {
        const delay = Number(e.target.value);

        setDelay(delay < minDilay ? minDilay : delay)
    };

    const updateIncrement = (e) => {
        const increment = Number(e.target.value);

        setIncrement(increment < minIncrement ? minIncrement : increment);
    };

    return (
        <div className='Matrix'>
            <img src={MATRIX_FRAMES[index]} alt='matrix-animation' />
            <div className='multiform'>
                <div>
                    Frame transition dilay (seconds):
                    <input type='number' onChange={updateDilay} />
                </div>
                <div>
                    Frame increment:
                    <input type='number' onChange={updateIncrement} />
                </div>
            </div>
        </div>
    );
};

export default Matrix;
