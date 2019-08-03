import React, { Component } from 'react';

export default class SendMessageBox extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */

  state = {
    input: ''
  };

  isDisabled = () => {
    return this.state.input === '';
  };

  handleSendMsgBox = event => {
    this.setState({ input: event.target.value });
  };

  addMessage = event => {
    const { user, addMsgFunc } = this.props;
    //{ username: 'John', text: 'Hi, Amy! Good, you?' }
    addMsgFunc({
      username: user.username,
      text: this.state.input
    });
    event.preventDefault();
  };

  render() {
    const { input } = this.state;
    return (
      <div>
        <form className='input-group' onSubmit={this.addMessage}>
          <input
            type='text'
            className='form-control'
            placeholder='Enter your message...'
            value={input}
            onChange={this.handleSendMsgBox}
          />
          <div className='input-group-append'>
            <button className='btn submit-button' disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}
