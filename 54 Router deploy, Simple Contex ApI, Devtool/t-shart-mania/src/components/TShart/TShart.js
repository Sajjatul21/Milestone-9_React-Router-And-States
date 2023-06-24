import React from 'react';

const TShart = ({ tshart }) => {
    const { picture, name } = tshart;
    return (
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default TShart;