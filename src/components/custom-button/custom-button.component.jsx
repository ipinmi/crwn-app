import React from 'react';

import './custom-button.styles.scss'

// stateless
// children are for multiple uses, eg sign in out, to be resuable

const CustomButton = ({children, ...otherProps}) => (
    <button className='custom-button' { ...otherProps}> 
        {children}
    </button>
);

export default CustomButton;