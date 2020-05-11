import React from 'react';
import './ErrorMessage.scss';
import Error from '../../utils/svg/error';

const ErrorMessage = props => {
    return (
        <div className='error-message' style={props.styleCss}>
            <Error />
            <span className='message'>
               {props.message}
            </span>
        </div>
    )
}

export default ErrorMessage;