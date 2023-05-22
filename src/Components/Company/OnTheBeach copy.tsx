import React, { FC } from 'react';

interface OTBProps {
    text: string;
    variant: 'companyname' | 'p' | 'body';
}


const OnTheBeach: FC<OTBProps> = ({ text, variant }) => {
    if (variant === 'companyname') {
        return (
            <span>On The Beach</span>
        );
    }

    if (variant === 'p') {
        return (
            <p>{text}</p>
        );
    }

    if (variant === 'body') {
        return (
            <body>{text}</body>
        );
    }

    return null;
};

export default OnTheBeach;