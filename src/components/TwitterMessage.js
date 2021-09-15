import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = e => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    const charsLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        value={this.state.message}
        onChange={this.handleChange}
        id="message" />
        Characters left: {charsLeft}
      </div>
    );
  }
}

export default TwitterMessage;
