import React from 'react';
import StyleContext from '../../context/StyleContext';

export default class ClassContextExample extends React.Component {
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
            <StyleContext.Consumer>
                {style => (
                    <div className={`example example--${style}`}>
                        <p>React.Component + Context</p>
                        <p>Count = {state.count}</p>
                        <button 
                            ref={node => this.button = node}
                            onClick={this.onClickButton}
                        >
                            Increment
                        </button>
                    </div>
                )}
            </StyleContext.Consumer>
        );
    }
}
