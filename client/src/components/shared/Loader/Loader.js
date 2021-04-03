import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loader.scss';

const Loader = ({ type }) => {
    return (
        <div className='progress-wrapper'>
            {type === 'linear' ? (
                <LinearProgress color='secondary' style={{ width: '100%' }} />
            ) : (
                <div className='cirlucar-progress'>
                    <CircularProgress color='secondary' size={40} />
                </div>
            )}
        </div>
    );
};

export default Loader;
