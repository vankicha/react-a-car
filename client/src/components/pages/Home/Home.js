import Main from '../../layouts/Main';
import SectionOffers from './SectionOffers';
import SectionSorting from './SectionSorting';

const Home = () => {
    return (
        <Main>
            <SectionSorting />
            <SectionOffers />
        </Main>
    );
};

export default Home;
