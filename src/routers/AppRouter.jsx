import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch  
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import { AuthContext } from '../auth/AuthContext';


const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>   
                <Switch>
                   <PublicRoute 
                        exact 
                        path='/login' 
                        isAuthenticated={ user.logged } 
                        component={ LoginScreen }
                    />
                   <PrivateRoute 
                        path='/'
                        isAuthenticated={ user.logged } 
                        component={ DashboardRoutes } 
                    />
                </Switch>
            </div>
      </Router>
    );
};

export default AppRouter;
