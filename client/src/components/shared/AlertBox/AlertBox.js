import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
        marginTop: '8px',
        marginBottom: '8px',
    },
}));

const AlertBox = ({ severity, children, title }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Alert severity={severity}>
                {title && <AlertTitle>{title}</AlertTitle>}
                {children}
            </Alert>
        </div>
    );
};

export default AlertBox;
