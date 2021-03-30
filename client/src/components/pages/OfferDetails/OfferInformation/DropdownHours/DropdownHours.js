import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 100,
        marginLeft: '10px',
    },
}));

const hoursArr = [
    { text: '1 hour', value: 1 },
    { text: '4 hours', value: 4 },
    { text: '8 hours', value: 8 },
    { text: '12 hours', value: 12 },
    { text: '24 hours', value: 24 },
];

const DropdownHours = () => {
    const classes = useStyles();

    const [hours, setHours] = useState('');

    const handleChange = (event) => {
        setHours(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <Select value={hours} onChange={handleChange} displayEmpty>
                <MenuItem value=''>
                    <em>Hour/s</em>
                </MenuItem>
                {hoursArr.map((x) => (
                    <MenuItem key={x.value} value={x.value}>
                        <em>{x.text}</em>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default DropdownHours;
