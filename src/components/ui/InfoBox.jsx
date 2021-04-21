import React from 'react';

const InfoBox = ({stateBox, text}) => {
    return (
        <div className={`alert alert-${stateBox}`} role="alert">
            { text }
        </div>
    );
};

export default InfoBox;
