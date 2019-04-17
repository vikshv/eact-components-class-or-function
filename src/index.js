import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import CreateClassExample from './examples/CreateClassExample';
import ClassSimpleExample from './examples/ClassSimpleExample';
import StatelessFunctionExample from './examples/StatelessFunctionExample';

import UseStateExample from './examples/UseStateExample';
import UseEffectFocusExample from './examples/UseEffectFocusExample';
import UseContextExample from './examples/UseContextExample';
import ClassContextExample from './examples/ClassContextExample';

import StyleContext from './context/StyleContext';

import './style.css';

ReactDOM.render(
    <StyleContext.Provider value="light">
        <CreateClassExample />
        <ClassSimpleExample />
        <StatelessFunctionExample />
        <UseStateExample />
        <UseEffectFocusExample />
        <UseContextExample />
        <ClassContextExample />
    </StyleContext.Provider >,
    document.getElementById('root')
);
