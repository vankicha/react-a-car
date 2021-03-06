import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import './InputField.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        marginTop: '8px',
        marginBottom: '8px',
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '100%',
    },
}));

const InputField = ({
    children,
    type,
    labelWidth,
    id,
    adorment,
    helperText,
    name,
    value,
    onChange,
    error,
}) => {
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
                error={error}
                fullWidth={true}
                id={`outlined-adornment-${id}`}
                labelWidth={labelWidth}
                type={type}
                startAdornment={
                    adorment && (
                        <InputAdornment position='start'>
                            {adorment}
                        </InputAdornment>
                    )
                }
                name={name}
                value={value}
                onChange={onChange}
            />

            {helperText && (
                <FormHelperText error={error} id={`outlined-${id}-helper-text`}>
                    {helperText}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default InputField;
