import Button from '@mui/material/Button';

export default function BasicButtons(props) {
    return (
        <Button variant="outlined" onClick={props.onClick}>{props.label}</Button>
    );
}