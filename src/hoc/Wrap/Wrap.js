import React from 'react';

const wrap = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default wrap;