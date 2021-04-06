import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, userIsLoading, ...rest }) => {
    const isLogged = localStorage.getItem('__') ? true : false;

    return (
        <Route
            {...rest}
            render={(props) =>
                isLogged ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/login' />
                )
            }
        />
    );
};

export default PrivateRoute;
