import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
