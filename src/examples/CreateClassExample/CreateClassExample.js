import React from 'react';
import createReactClass from 'create-react-class';

const CreateClassExample = createReactClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },
    componentDidMount: function() {
        this.button.focus();
    },
    onClickButton: function() {
        this.setState(state => ({
            count: state.count + 1
        }));
    },
    render: function() {
        return (
            <div className="example">
                <p>React create class</p>
                <p>Count = {this.state.count}</p>
                <button
                    ref={node => this.button = node}
                    onClick={this.onClickButton}
                >
                    Increment
                </button>
            </div>
        );
    }
});

export default CreateClassExample;
