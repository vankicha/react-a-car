import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/register' component={Register} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
