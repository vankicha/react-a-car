import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { verifyAuth } from './actions/userActions';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Provide from './components/pages/Provide';
import OfferDetails from './components/pages/OfferDetails';
import Profile from './components/pages/Profile';
import './App.scss';

function App({ verifyAuth }) {
    useEffect(() => {
        verifyAuth();
    }, [verifyAuth]);

    return (
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
                    <Route path='/offers' component={Home} />
                    <Route path='/register' component={Register} />
                    <Route path='/login' component={Login} />
                    <Route path='/provide' component={Provide} />
                    <Route path='/profile' component={Profile} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}
const mapDispatchToProps = {
    verifyAuth,
};

export default connect(null, mapDispatchToProps)(App);
