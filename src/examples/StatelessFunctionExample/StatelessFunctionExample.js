import React from 'react';

const Title = (props) => (
    <p>Count = {props.value}</p>
);

const Button = (props) => (
    <button ref={props.refApi} onClick={props.onClick}>
        {props.children}
    </button>
);

export default class StatelessFunctionExample extends React.Component {
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
                <p>Stateless functions</p>
                <Title value={state.count} />
                <Button 
                    refApi={node => this.button = node}
                    onClick={this.onClickButton}
                >
                    Increment
                </Button>
            </div>
        );
    }
}
