import React from 'react';
import HeroesList from '../heroes/HeroesList';

const MarvelScreen = () => {
    return (
        <div>
            <h1>Super Heroes Marvel</h1>
            <hr className='hr-page'/>
            <HeroesList publisher='Marvel Comics' />
        </div>
    );
};

export default MarvelScreen;
