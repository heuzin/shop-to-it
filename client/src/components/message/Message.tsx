import React from 'react';
import { Alert } from 'react-bootstrap';

type Props = {
    variant?: string;
    childen?: React.ReactNode;
};

export const Message: React.FC<Props> = ({ variant, children }) => {
    return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
    variant: 'info',
};

export default Message;
