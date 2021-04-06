import { Route, Redirect } from 'react-router';

const PublicRoute = ({ component: Component, userIsLoading, ...rest }) => {
    const isLogged = localStorage.getItem('__') ? true : false;

    return (
        <Route
            {...rest}
            render={(props) =>
                !isLogged ? <Component {...props} /> : <Redirect to='/offers' />
            }
        />
    );
};

export default PublicRoute;
