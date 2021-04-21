import React from 'react';
import HeroesList from '../heroes/HeroesList';

const DcScreen = () => {
    return (
        <div>
            <h1>Super Heroes DC</h1>
            <hr className='hr-page'/>
            <HeroesList publisher='DC Comics' />
        </div>
    );
};

export default DcScreen;
