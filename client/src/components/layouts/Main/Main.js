import Header from './Header';
import Footer from './Footer';
import './Main.scss';

const Main = ({ children }) => {
    return (
        <div className='main-wrapper'>
            <Header />
            <div className='main-content'>{children}</div>
            <Footer />
        </div>
    );
};

export default Main;
