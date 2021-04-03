import Main from '../../layouts/Main';
import SectionOffers from './SectionOffers';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Pagination from '@material-ui/lab/Pagination';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllOffers, getIsFetching } from '../../../reducers/offerReducer';
import { fetchOffers } from '../../../actions/offerActions';
import Loader from '../../shared/Loader';
import './Home.scss';

const Home = ({ location, offers, fetchOffers, isFetching }) => {
    const search = location.search;
    const [count, setCount] = useState(10);
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(
        search ? Number(search.split('?page=')[1]) : 1
    );
    const history = useHistory();

    const handleClose = () => {
        setOpen(false);
    };

    const onPageChange = (event, page) => {
        setCurrentPage(page);
        page > 1
            ? history.push(`/offers?page=${page}`)
            : history.push('/offers');
    };

    useEffect(() => {
        setCurrentPage(search ? Number(search.split('?page=')[1]) : 1);
        fetchOffers(currentPage).then((count) => {
            setCount(Math.ceil(count / 6));
        });
    }, [fetchOffers, currentPage, location.search]);

    return (
        <Main>
            <div className='home-wrapper'>
                {isFetching ? (
                    <Loader type='linear' />
                ) : (
                    <>
                        <SectionOffers
                            offers={offers}
                            open={open}
                            setOpen={setOpen}
                        />
                        <div className='pagination-wrapper'>
                            <Pagination
                                page={currentPage}
                                count={count}
                                color='secondary'
                                onChange={onPageChange}
                            />
                        </div>
                    </>
                )}
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity='success'
                    variant='filled'
                >
                    Added to reviews!
                </Alert>
            </Snackbar>
        </Main>
    );
};

const mapStateToProps = (state) => ({
    offers: getAllOffers(state),
    isFetching: getIsFetching(state),
});

const mapDispatchToProps = {
    fetchOffers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
