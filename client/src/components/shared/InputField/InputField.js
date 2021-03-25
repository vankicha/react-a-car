import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '100%',
    },
}));

const InputField = ({ children, type, labelWidth, id }) => {
    const classes = useStyles();

    return (
        <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant='outlined'
        >
            <InputLabel htmlFor={`outlined-adornment-${id}`}>
                {children}
            </InputLabel>
            <OutlinedInput
                fullWidth={true}
                id={`outlined-adornment-${id}`}
                labelWidth={labelWidth}
                type={type}
            />
        </FormControl>
    );
};

export default InputField;
