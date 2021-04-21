import React from 'react';

const LoginScreen = ({ history }) => {
    const handleClick = () => {
        history.replace('/'); // remplaza la entrada actual y redirecciona.
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
