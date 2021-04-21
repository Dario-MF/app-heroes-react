import React, { useMemo } from 'react';
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher';
import HeroCard from './HeroCard';

const HeroesList = ({ publisher }) => {

    const heroes =  useMemo(() => getHeroByPublisher( publisher ), [ publisher ]);

    return (
        <div className="row animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    );
};

export default HeroesList;
