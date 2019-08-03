import React, { Component } from 'react';
import MessageList from '../message-list/MessageList';
import SendMessageBox from '../send-message-box/SendMessageBox';

export default class Chat extends Component {
  render() {
    const { user, messages, addMsgFunc } = this.props;
    return (
      <div className='chat-window'>
        <h2>Super Awesome Chat</h2>
        <MessageList user={user} messages={messages} />
        <SendMessageBox user={user} addMsgFunc={addMsgFunc} />
      </div>
    );
  }
}
