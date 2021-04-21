import { heroes } from '../data/heroes';


export const getHeroByPublisher = ( publisher ) => {
    const validPublisers = ['DC Comics', 'Marvel Comics'];

    if ( !validPublisers.includes( publisher )) {
        throw new Error(`Publisher: ${ publisher }, no es un publisher valido`);
    };

    return heroes.filter(hero => hero.publisher === publisher);
};