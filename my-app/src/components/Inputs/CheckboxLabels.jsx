import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxLabels(props) {
    return (
        <FormControlLabel control={<Checkbox checked={props.value? true : false} onChange={props.onChange}/>} label={props.label} />
    );
}