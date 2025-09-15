import React, {useState} from 'react';

interface CounterProps {
    initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({initialCount = 0}) => {
    const [count, setCount] = useState<number>(initialCount);
    const [name, setName] = useState<string>('');
    const incerment = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incerment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h2>Your Name: {name}</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}

export default Counter;