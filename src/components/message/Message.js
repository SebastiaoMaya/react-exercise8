import React from 'react';

export default function Message(props) {
  const { user, message } = props;
  return (
    <li
      className={
        message.username === user.username
          ? 'message sender'
          : 'message recipient'
      }
    >
      <p>{`${message.username}: ${message.text}`}</p>
    </li>
  );
}
