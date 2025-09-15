import React, { useState } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div style={{padding: '20px', textAlign: 'center'}}>
            <h1>Counter Exercise</h1>
            <h1 style={{color: '#5DE2E7'}}>{count}</h1>
            <div style={{margin: '20px 0'}}>
                <button onClick={() => setCount(count + 1)} style={{margin: '10px', backgroundColor:'#7DDA58', border: 'none', outline: 'none'}}>+ เพิ่ม</button>
                <button onClick={() => setCount(count - 1)} style={{margin: '10px', backgroundColor:'#E24949', border: 'none', outline: 'none'}} >- ลด</button>
                <button onClick={() => setCount(0)} style={{margin: '10px', backgroundColor:'#ECA335', border: 'none', outline: 'none'}}>🔁 Reset</button>
            </div>
        </div>
    )
}

export default Counter;