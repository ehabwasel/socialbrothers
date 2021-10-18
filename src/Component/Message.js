import React from 'react';
import { Alert } from 'react-bootstrap';
const Message = ({ variant = 'alert', children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default Message;
