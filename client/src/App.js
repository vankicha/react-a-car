import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { verifyAuth } from './actions/userActions';
import PrivateRoute from './hoc/PrivateRoute';
import PublicRoute from './hoc/PublicRoute';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Provide from './components/pages/Provide';
import OfferDetails from './components/pages/OfferDetails';
import OfferEdit from './components/pages/OfferEdit';
import Profile from './components/pages/Profile';
import Reviews from './components/pages/Reviews';
import GeoContextProvider from './contexts/GeoContext';
import './App.scss';

function App({ verifyAuth }) {
    useEffect(() => {
        verifyAuth();
    }, [verifyAuth]);

    return (
        <GeoContextProvider>
            <BrowserRouter>
                <div className='App'>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/offers' />
                        </Route>
                        <Route
                            exact
                            path='/offers/:offerId/details'
                            component={OfferDetails}
                        />
                        <PrivateRoute
                            exact
                            path='/offers/:offerId/edit'
                            component={OfferEdit}
                        />
                        <Route path='/offers' component={Home} />
                        <PublicRoute path='/register' component={Register} />
                        <PublicRoute path='/login' component={Login} />
                        <PrivateRoute path='/provide' component={Provide} />
                        <PrivateRoute path='/profile' component={Profile} />
                        <PrivateRoute path='/reviews' component={Reviews} />
                    </Switch>
                </div>
            </BrowserRouter>
        </GeoContextProvider>
    );
}
const mapDispatchToProps = {
    verifyAuth,
};

export default connect(null, mapDispatchToProps)(App);
