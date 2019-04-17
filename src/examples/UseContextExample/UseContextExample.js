import React, { useState, useContext } from 'react';
import StyleContext from '../../context/StyleContext';

export default function UseStateExample(props) {
    const style = useContext(StyleContext);
    const [ count, setCount ] = useState(0);

    return (
        <div className={`example example--${style}`}>
            <p>useContext, useState</p>
            <p>Count = {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
