import React, { Component } from 'react';
import Message from '../message/Message';

export default class MessageList extends Component {
  render() {
    const { user, messages } = this.props;

    return (
      <div>
        <div className='name sender'>{user.username}</div>

        <ul className='message-list'>
          {messages.map((message, index) => (
            <Message user={user} message={message} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}
