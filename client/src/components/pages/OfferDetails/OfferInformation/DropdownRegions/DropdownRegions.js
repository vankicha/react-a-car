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
    { text: 'Sofia', value: 'sofia' },
    { text: 'Burgas', value: 'burgas' },
    { text: 'Varna', value: 'varna' },
    { text: 'Plovdiv', value: 'plovdiv' },
];

const DropdownRegions = () => {
    const classes = useStyles();

    const [region, setRegion] = useState('');

    const handleChange = (event) => {
        setRegion(event.target.value);
    };

    return (
        <FormControl className={classes.formControl}>
            <Select value={region} onChange={handleChange} displayEmpty>
                <MenuItem value=''>
                    <em>None</em>
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

export default DropdownRegions;
