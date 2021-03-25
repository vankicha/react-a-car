import Header from './Header';
import './Main.scss';

const Main = ({ children }) => {
    return (
        <div className='main-wrapper'>
            <Header />
            <div className='main-content'>{children}</div>
        </div>
    );
};

export default Main;
