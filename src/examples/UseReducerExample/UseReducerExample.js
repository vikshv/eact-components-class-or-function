import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    let result;
    if (action.type === 'incrementn') {
        result = { count: state.count + 1 };
    } else {
        throw new Error();
    }
    return result;
};

export default function UseReducerExample(props) {
    const [ state, dispath ] = useReducer(reducer, initialState);

    return (
        <div className="example">
            <p>useReducer</p>
            <p>Count = {state.count}</p>
            <button onClick={() => dispath({ type: 'incrementn' })}>
                Increment
            </button>
        </div>
    );
}
