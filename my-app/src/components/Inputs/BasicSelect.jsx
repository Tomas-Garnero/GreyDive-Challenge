import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {

    return (
        // <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.value? props.value : ""}
                label={props.label}
                onChange={props.onChange}
            >
                {props.options.map(option => {
                return (
                    <MenuItem value={option.value} key={option.value}>{option.label}</MenuItem>
                )
                })}
            </Select>
            </FormControl>
        // </Box>
        );
    }