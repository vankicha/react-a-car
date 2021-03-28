import Main from '../../layouts/Main';
import SectionOffers from './SectionOffers';
import './Home.scss';

const Home = () => {
    return (
        <div className='home-wrapper'>
            <Main>
                <SectionOffers />
            </Main>
        </div>
    );
};

export default Home;
