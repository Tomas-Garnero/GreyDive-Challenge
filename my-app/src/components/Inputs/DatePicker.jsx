import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

export default function BasicDatePicker(props) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
            label={props.label}
            value={props.value}
            onChange={(newValue) => {
                props.onChange(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        );
    }