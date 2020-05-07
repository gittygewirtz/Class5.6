import React from 'react';

class ReverseText extends React.Component {

    state = {
        reversed: ''
    }

    reverse = e => {
        const text = e.target.value;
        const reversedText = text.split("").reverse().join("");
        this.setState({ reversed: reversedText });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.reverse} />
                <br />
                <h2>{this.state.reversed}</h2>
            </div>
        );
    }
}

export default ReverseText;