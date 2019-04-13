import React, { useState } from 'react';

export default function UseStateExample(props) {
    const [ count, setCount ] = useState(0);

    return (
        <div className="example">
            <p>useState</p>
            <p>Count = {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
