import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    
    return (
        <Route 
            {...rest}
            render={() => localStorage.getItem("user")
            ? children : <Navigate to="/login" /> }
        />
    );
};

export default PrivateRoute;