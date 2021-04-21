import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = ({ history }) => {
    const { dispatch } = useContext( AuthContext );
    
    const handleClick = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Dario'
            }
        });
        
        history.replace('/');  //remplaza la entrada actual y redirecciona.
        //history.push('path'); empuja una nueva entrada y redirecciona.
    };



    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr className='hr-page'/>
            <button
                className='btn btn-primary'
                onClick={handleClick}
            >Login</button>
        </div>
    );
};

export default LoginScreen;
