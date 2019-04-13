import React from 'react';

export default class SimpleExample extends React.Component {
    state = {
        count: 0
    };

    componentDidMount() {
        this.button.focus();
    }

    onClickButton = () => {
        this.setState(state => ({
            count: state.count + 1
        }));
    };

    render() {
        const { state } = this;
        return (
            <div className="example">
                <p>React.Component</p>
                <p>Count = {state.count}</p>
                <button 
                    ref={node => this.button = node}
                    onClick={this.onClickButton}
                >
                    Increment
                </button>
            </div>
        );
    }
}
