import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import ClassSimpleExample from './examples/ClassSimpleExample';

import UseStateExample from './examples/UseStateExample';
import UseEffectFocusExample from './examples/UseEffectFocusExample';
import UseContextExample from './examples/UseContextExample';

import StyleContext from './examples/UseContextExample/StyleContext';

import './style.css';

ReactDOM.render(
    <StyleContext.Provider value="light">
        <ClassSimpleExample />
        <UseStateExample />
        <UseEffectFocusExample />
        <UseContextExample />
    </StyleContext.Provider >,
    document.getElementById('root')
);
