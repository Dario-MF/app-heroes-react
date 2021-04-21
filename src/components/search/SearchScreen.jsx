import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import useForm from '../../custom hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';
import InfoBox from '../ui/InfoBox';

const SearchScreen = ({ history}) => {
    const location = useLocation();
    const { q = '' } = queryString.parse( location.search);

    const [ { search }, handleValueChange ] = useForm({search: q });

    const heroesFiltered = useMemo(() => getHeroByName( q ), [q]);

    const handleSubmit = (event) => {
        event.preventDefault();

        history.push(`?q=${ search }`);    
    };

    return (
        <div>
            <h1>Search Screen</h1>
            <hr className='hr-page'/>
            <div className="row">
                <div className="col-5">
                    <h5> Search Form </h5>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder='Find your hero'
                            className='form-control'
                            onChange={handleValueChange}
                            name='search'
                            value={ search }
                        />
                        <button 
                            className="btn mt-3 btn-block btn-outline-primary"
                            type='submit'
                        >Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h5> Results </h5>
                    <hr/>
                    {
                        ( q === '') &&
                            <InfoBox stateBox='primary' text='Search a heroe' />
                    }
                    {
                        ( q !== '' && heroesFiltered.length === 0 ) &&
                            <InfoBox stateBox='warning' text='Hero not found' />
                    }
                    <div className="row">
                        {
                            heroesFiltered.map(hero => (
                                <HeroCard 
                                    key={ hero.id } 
                                    {...hero} 
                                />
                            ))
                        }
                    </div>
                    

                </div>
            </div>
        </div>
    );
};

export default SearchScreen;
