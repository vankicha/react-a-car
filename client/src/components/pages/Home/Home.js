import Main from '../../layouts/Main';
import SectionOffers from './SectionOffers';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import { useState } from 'react';
import './Home.scss';

const Home = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className='home-wrapper'>
            <Main>
                <SectionOffers setOpen={setOpen} />
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity='success'
                        variant='filled'
                    >
                        Added to reviews!
                    </Alert>
                </Snackbar>
            </Main>
        </div>
    );
};

export default Home;
