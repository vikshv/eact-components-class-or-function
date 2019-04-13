import React, { useState, useEffect, useRef } from 'react';

export default function UseEffectFocusExample(props) {
    const buttonElement= useRef(null);
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        buttonElement.current.focus();
    });

    return (
        <div className="example">
            <p>useEffect, useState, useRef</p>
            <p>Count = {count}</p>
            <button
                ref={buttonElement}
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>
        </div>
    );
}
