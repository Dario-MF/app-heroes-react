import React, { useMemo } from 'react';
import { Redirect } from 'react-router';
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroById';
import './HeroScreen.css'



const HeroeScreen = ({ match, history }) => {

    const { heroId } = match.params;
    const [heroe] = useMemo(() => getHeroById(heroId), [heroId]);

    if (!heroe) {
        return <Redirect to={`/${heroId.split('-')[0]}`} />;
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = heroe;

    const handleReturn = () => {
        if (history.length <= 2) {
            history.push(`/${heroId.split('-')[0]}`);
        } else {
            history.goBack();
        };
    };

    return (
        <div className='row mt-5 hero-screen'>
            <div className="col-4 animate__animated animate__fadeInLeft">
                <img
                    //src={`../assets/heroes/${heroId}.jpg`} img desde public/assets.
                    src={heroImages(`./${heroId}.jpg`).default}
                    alt={superhero}
                    className='img-fluid rounded' />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b> Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b> Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b> Primera aparición: </b>{first_appearance}</li>
                </ul>
                <h5>Characters</h5>
                <p>- {characters}</p>
                <button
                    className='btn btn-outline-primary'
                    onClick={handleReturn}
                >Regresar
                </button>
            </div>
        </div>
    );
};

export default HeroeScreen;
